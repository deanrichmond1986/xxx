"""Real Chromium workflow, accessibility, responsive and failure-path checks."""
from __future__ import annotations
from functools import partial
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
import json
import os
import re
import threading
from playwright.sync_api import sync_playwright, expect

ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / 'evidence'
OUTPUT.mkdir(exist_ok=True)
AXE = ROOT / 'node_modules/axe-core/axe.min.js'
if not AXE.exists():
    raise SystemExit('Install test dependencies with npm ci first.')

class Handler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(ROOT), **kwargs)
    def log_message(self, *_args):
        pass

server = ThreadingHTTPServer(('127.0.0.1', 0), Handler)
threading.Thread(target=server.serve_forever, daemon=True).start()
BASE = f'http://127.0.0.1:{server.server_port}/docs/'
checks: list[str] = []
violations: list[dict] = []
errors: list[str] = []

def record(message):
    checks.append(message)
    print('PASS:', message, flush=True)

def add_page(context):
    page = context.new_page()
    page.on('pageerror', lambda error: errors.append(str(error)))
    return page

def enter(page):
    page.goto(BASE, wait_until='networkidle')
    if page.locator('#welcome').is_visible():
        page.locator('#start-button').click()
    expect(page.locator('#game')).to_be_visible()
    page.evaluate('document.fonts.ready')

def saved(page):
    return page.evaluate("JSON.parse(localStorage.getItem('money-tap-demo-v1'))")

def axe(page, name):
    page.add_script_tag(path=str(AXE))
    result = page.evaluate("""async () => await axe.run(document, {
        runOnly: {type:'tag', values:['wcag2a','wcag2aa','wcag21aa','wcag22aa']}
    })""")
    for issue in result['violations']:
        violations.append({'screen':name,'id':issue['id'],'impact':issue['impact'],
                           'nodes':[node['target'] for node in issue['nodes']]})
    assert not result['violations'], violations
    record(f'accessibility: {name}')

def no_overflow(page):
    assert page.evaluate('document.documentElement.scrollWidth <= innerWidth + 1'), page.evaluate('({viewport:innerWidth,width:document.documentElement.scrollWidth,route:location.hash})')

try:
    with sync_playwright() as p:
        browser = p.chromium.launch(executable_path=os.environ.get('CHROMIUM_PATH', '/usr/bin/chromium'), headless=True, args=['--no-sandbox'])
        context = browser.new_context(viewport={'width':390,'height':844}, locale='ru-RU')
        page = add_page(context)
        page.goto(BASE, wait_until='networkidle')
        page.evaluate('document.fonts.ready')
        expect(page.locator('#welcome')).to_be_visible()
        page.screenshot(path=str(OUTPUT/'welcome-mobile.png'))
        axe(page, 'welcome')
        page.locator('#start-button').click()
        expect(page.locator('#game')).to_be_visible()
        expect(page.locator('[data-balance]').first).to_have_text('0')
        expect(page).to_have_title('Игра — Money Tap')
        for _ in range(8):
            page.locator('#tap-coin').click()
        page.wait_for_function("JSON.parse(localStorage.getItem('money-tap-demo-v1')).balance===8")
        expect(page.locator('#energy-current')).to_have_text('492')
        record('welcome, real taps, energy debit and persisted progress')
        page.screenshot(path=str(OUTPUT/'play-mobile.png'))
        axe(page, 'play')
        no_overflow(page)
        page.get_by_role('link', name='Улучшения', exact=True).click()
        expect(page).to_have_title('Улучшения — Money Tap')
        opener = page.locator('.upgrade-card button')
        opener.click()
        expect(page.locator('#app-dialog')).to_be_visible()
        expect(page.locator('#dialog-confirm')).to_be_disabled()
        expect(page.locator('#dialog-error')).to_contain_text('не хватает')
        axe(page, 'insufficient-funds dialog')
        for _ in range(10):
            page.keyboard.press('Tab')
            assert page.evaluate("document.getElementById('app-dialog').contains(document.activeElement)")
        page.keyboard.press('Escape')
        expect(page.locator('#app-dialog')).not_to_be_visible()
        expect(opener).to_be_focused()
        record('insufficient funds, native dialog focus containment, Escape and restored focus')
        page.evaluate("""() => {
            const s=JSON.parse(localStorage.getItem('money-tap-demo-v1'));s.balance=2000;
            localStorage.setItem('money-tap-demo-v1',JSON.stringify(s));
            window.originalRequest=DemoApi.request.bind(DemoApi);window.purchaseCalls=0;
            DemoApi.request=async (...args)=>{if(args[0]==='buy_toques')window.purchaseCalls++;return originalRequest(...args)};
            return App.retry();
        }""")
        opener.click()
        page.locator('#dialog-confirm').click()
        page.evaluate("document.getElementById('dialog-confirm').click()")
        expect(page.locator('#app-dialog')).not_to_be_visible()
        assert saved(page)['modifies']['toques_lvl']==2 and saved(page)['balance']==1000
        assert page.evaluate('window.purchaseCalls')==1
        record('upgrade exact cost, effect and prevention of duplicate purchase')
        page.screenshot(path=str(OUTPUT/'boosts-mobile.png'))
        axe(page, 'boosts')
        page.evaluate('App.energy()')
        page.locator('#dialog-confirm').click()
        expect(page.locator('#app-dialog')).not_to_be_visible()
        assert saved(page)['energy_max']==1000
        page.evaluate('App.energy()')
        expect(page.locator('#dialog-confirm')).not_to_be_visible()
        page.keyboard.press('Escape')
        record('one-time double-energy bonus and claimed state')
        page.get_by_role('link', name='Игра', exact=True).click()
        before=saved(page)['balance']
        page.locator('#tap-coin').click()
        page.wait_for_function("JSON.parse(localStorage.getItem('money-tap-demo-v1')).balance===1002")
        assert saved(page)['balance']==before+2
        page.get_by_role('link', name='Рейтинг', exact=True).click()
        expect(page.locator('#leaderboard li')).to_have_count(1)
        expect(page.locator('#leaderboard')).to_contain_text('(демо)')
        page.screenshot(path=str(OUTPUT/'leaders-mobile.png'))
        axe(page, 'leaders')
        page.evaluate("""() => { DemoApi.request=async (path,data)=>path==='top'?{ok:true,result:{top_10:[]}}:originalRequest(path,data);return App.loadRanking(); }""")
        expect(page.locator('#ranking-state')).to_contain_text('Результатов пока нет')
        page.evaluate("""() => { DemoApi.request=async(path,data)=>{if(path==='top')throw new Error('test');return originalRequest(path,data)};return App.loadRanking(); }""")
        expect(page.locator('#ranking-retry')).to_be_visible()
        page.evaluate('() => {DemoApi.request=originalRequest;}')
        page.locator('#ranking-retry').click()
        expect(page.locator('#leaderboard li')).to_have_count(1)
        record('bounded leaderboard, empty state and failure/retry recovery')
        page.get_by_role('link', name='Профиль', exact=True).click()
        page.screenshot(path=str(OUTPUT/'profile-mobile.png'))
        axe(page, 'profile')
        page.get_by_role('link', name='Пригласить друга').click()
        page.evaluate("Object.defineProperty(navigator,'clipboard',{value:{writeText:async()=>{throw new Error('denied')}},configurable:true})")
        page.locator('#copy-link').click()
        expect(page.locator('#copy-help')).to_contain_text('вручную')
        expect(page.locator('#referral-link')).to_be_focused()
        assert page.evaluate("document.getElementById('referral-link').selectionEnd>0")
        axe(page, 'friends')
        record('clipboard failure preserves a selected, labeled referral URL')
        page.reload(wait_until='networkidle')
        expect(page.locator('#game')).to_be_visible()
        expect(page).to_have_title('Приглашения — Money Tap')
        assert saved(page)['balance']==1002
        page.go_back()
        expect(page).to_have_title('Профиль — Money Tap')
        record('returning visitor, route restoration and browser back')
        page.get_by_role('link', name='Игра', exact=True).click()
        page.evaluate("""() => {window.originalRequest=DemoApi.request.bind(DemoApi);window.clickCalls=0;DemoApi.request=async(path,data)=>{
          if(path==='clicker'){clickCalls++;await originalRequest(path,data);throw new Error('lost response')}
          return originalRequest(path,data);
        }}""")
        page.locator('#tap-coin').click()
        expect(page.locator('#connection-banner')).to_be_visible()
        assert saved(page)['balance']==1004 and page.evaluate('window.clickCalls')==1
        expect(page.locator('[data-balance]').first).to_have_text('1\u00a0004')
        page.evaluate('DemoApi.request=originalRequest;App.retry()')
        expect(page.locator('#connection-banner')).not_to_be_visible()
        record('uncertain write reconciles authoritative balance without replaying a tap')
        context.set_offline(True)
        page.locator('#tap-coin').click()
        page.wait_for_function("JSON.parse(localStorage.getItem('money-tap-demo-v1')).balance===1006")
        context.set_offline(False)
        record('demo remains playable offline after assets are loaded')
        page2=add_page(context)
        enter(page2)
        page2.get_by_role('link',name='Игра',exact=True).click()
        page.evaluate('App.tap({detail:0});App.tap({detail:0})')
        page2.evaluate('App.tap({detail:0});App.tap({detail:0})')
        page2.wait_for_function("JSON.parse(localStorage.getItem('money-tap-demo-v1')).balance===1014")
        record('two-tab demo mutations are serialized by Web Locks')
        page2.close()
        for w,h in [(320,640),(360,640),(390,844),(430,932),(1280,900)]:
            layout_context=browser.new_context(viewport={'width':w,'height':h},locale='ru-RU',reduced_motion='reduce')
            layout=add_page(layout_context);enter(layout)
            no_overflow(layout)
            assert layout.locator('#tap-coin').bounding_box()['width']>=220
            meter=layout.locator('#energy-meter').bounding_box();coin=layout.locator('#tap-coin').bounding_box()
            assert meter['y']>coin['y']+coin['height']
            layout.locator('#tap-coin').hover()
            assert layout.locator('#tap-coin').evaluate("e=>getComputedStyle(e).transform")=='none'
            for label in ['Улучшения','Рейтинг','Профиль']:
                layout.get_by_role('link',name=label,exact=True).click()
                no_overflow(layout)
            layout.get_by_role('button',name='Приветственный экран').click()
            expect(layout.locator('#welcome')).to_be_visible()
            layout.locator('#start-button').scroll_into_view_if_needed()
            rect=layout.locator('#start-button').bounding_box()
            assert rect['y']>=0 and rect['y']+rect['height']<=h+1
            assert layout.evaluate("getComputedStyle(document.documentElement).scrollbarColor")!='auto'
            layout_context.close()
        record('five viewports, no horizontal overflow, reachable welcome CTA, reduced motion and global scrollbars')
        failed_context=browser.new_context(viewport={'width':390,'height':844})
        failed=add_page(failed_context)
        failed.goto(BASE,wait_until='networkidle')
        failed.evaluate("() => {window.realApi=DemoApi.request;DemoApi.request=async()=>{throw new Error('Не удалось загрузить прогресс. Попробуй снова.')}}")
        failed.locator('#start-button').click()
        expect(failed.locator('#connection-banner')).to_be_visible()
        expect(failed.locator('#welcome')).to_be_visible()
        expect(failed.locator('#start-button')).to_be_enabled()
        failed.evaluate('() => {DemoApi.request=realApi;}')
        failed.get_by_role('button',name='Попробовать снова').click()
        expect(failed.locator('#game')).to_be_visible()
        record('initial request failure keeps welcome intact and supports retry')
        failed_context.close()
        blocked_context=browser.new_context(viewport={'width':390,'height':844})
        blocked_context.add_init_script("Storage.prototype.getItem=function(){throw new Error('blocked')};Storage.prototype.setItem=function(){throw new Error('blocked')};")
        blocked=add_page(blocked_context);enter(blocked)
        expect(blocked.locator('#connection-banner')).to_contain_text('не разрешает сохранение')
        expect(blocked.locator('#save-status')).to_have_text('Без сохранения')
        blocked.locator('#tap-coin').click()
        expect(blocked.locator('[data-balance]').first).to_have_text('1')
        record('blocked local storage is explained without blocking gameplay or claiming saved progress')
        blocked_context.close()
        live_context=browser.new_context(viewport={'width':390,'height':844})
        live=add_page(live_context)
        live.route('https://telegram.org/**',lambda r:r.fulfill(content_type='application/javascript',body='window.Telegram={WebApp:{initDataUnsafe:{}}};'))
        live.goto(BASE.replace('/docs/','/front/'),wait_until='networkidle')
        expect(live.locator('#start-button')).to_be_disabled()
        expect(live.locator('#welcome-note')).to_contain_text('Telegram')
        live.get_by_role('button',name='Как играть',exact=True).click()
        expect(live.locator('#app-dialog')).to_be_visible()
        record('live frontend outside Telegram has an honest entry state and working help')
        live_context.close()
        assert not errors,errors
        context.close();browser.close()
    css=(ROOT/'front/public/css/main.css').read_text()
    design=(ROOT/'DESIGN.md').read_text()
    for name,token in [('primary','8b3fe0'),('glow','7c3aed'),('background','101014'),('surface','211f29'),('text','ffffff'),('gold','e5aa28'),('danger','ffb4ab'),('focus','d8b4fe')]:
        assert re.search(rf'--color-{name}:\s*#{token}',css,re.I)
        assert re.search(rf'{name}:\s*[\"\']#{token}',design,re.I)
    record('documented color tokens match the canonical runtime palette')
finally:
    server.shutdown()
    (OUTPUT/'ui-verification.json').write_text(json.dumps({'passed':checks,'accessibility_violations':violations,'browser_errors':errors},ensure_ascii=False,indent=2)+'\n')
print(f'{len(checks)} checks completed; {len(violations)} accessibility violations; {len(errors)} browser errors.')
