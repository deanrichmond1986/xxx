"""Verify the original layout survives the cosmetic finish and gameplay still works."""
from pathlib import Path
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
import threading, subprocess, json
from playwright.sync_api import sync_playwright, expect
ROOT=Path(__file__).resolve().parents[1]
OUT=ROOT/'evidence'; OUT.mkdir(exist_ok=True)
class Handler(SimpleHTTPRequestHandler):
    def __init__(self,*args,**kwargs): super().__init__(*args,directory=str(ROOT),**kwargs)
    def log_message(self,*args): pass
server=ThreadingHTTPServer(('127.0.0.1',0),Handler)
threading.Thread(target=server.serve_forever,daemon=True).start()
url=f'http://127.0.0.1:{server.server_port}/docs/'
checks=[]; errors=[]; metrics=[]
original=subprocess.check_output(['git','show','fb640b3:front/index.html'],cwd=ROOT,text=True)
current=(ROOT/'front/index.html').read_text()
normalize=lambda s: '\n'.join(line.rstrip() for line in s.splitlines())
assert normalize(original.split('<body',1)[1].split('</body>',1)[0])==normalize(current.split('<body',1)[1].split('</body>',1)[0])
checks.append('Original body markup, wording, screen order, controls and artwork unchanged')
with sync_playwright() as p:
    browser=p.chromium.launch(executable_path='/usr/bin/chromium',headless=True,args=['--no-sandbox'])
    for w,h in [(420,900),(390,844),(360,640)]:
        page=browser.new_page(viewport={'width':w,'height':h})
        page.on('pageerror',lambda e:errors.append(str(e)))
        page.goto(url,wait_until='networkidle')
        expect(page.locator('#start-page')).to_be_visible()
        coin=page.locator('.onboarding__img').bounding_box()
        assert coin['width']>=270
        if w==390: page.screenshot(path=str(OUT/'welcome-mobile.png'))
        page.locator('.start-btn').click()
        expect(page.locator('.stats__clicks')).to_have_text('0')
        page.locator('#tapBox').click();page.wait_for_timeout(700)
        expect(page.locator('.stats__clicks')).to_have_text('1')
        boxes={s:page.locator(s).first.bounding_box() for s in ['.clicker','.energy','.menu']}
        assert boxes['.clicker']['width']>=min(w-48,340)
        assert boxes['.energy']['y']+boxes['.energy']['height']<=boxes['.menu']['y']
        assert page.evaluate('document.documentElement.scrollWidth<=innerWidth+1')
        metrics.append({'viewport':[w,h],'welcomeCoin':coin,'game':boxes})
        if w==390: page.screenshot(path=str(OUT/'play-mobile.png'))
        page.reload(wait_until='networkidle'); page.locator('.start-btn').click()
        expect(page.locator('.stats__clicks')).to_have_text('1')
        state=page.evaluate("JSON.parse(localStorage.getItem('money-tap-demo-v1'))")
        state['balance']=1000
        page.evaluate("s=>localStorage.setItem('money-tap-demo-v1',JSON.stringify(s))",state)
        page.reload(wait_until='networkidle');page.locator('.start-btn').click()
        page.evaluate("openPage('perks')")
        expect(page.locator('.perks')).to_be_visible()
        page.wait_for_timeout(100)
        page.evaluate('openToques()')
        page.locator('.buy_toques').click();page.wait_for_timeout(400)
        state=page.evaluate("JSON.parse(localStorage.getItem('money-tap-demo-v1'))")
        assert state['balance']==0 and state['modifies']['toques_lvl']==2
        page.wait_for_timeout(450)
        if w==390: page.screenshot(path=str(OUT/'boosts-mobile.png'))
        for route,selector,image in [('rating','.rating','leaders'),('balance','.balance','profile'),('work','.work','play')]:
            page.evaluate('(route)=>openPage(route)',route)
            page.wait_for_timeout(450)
            expect(page.locator(selector).first).to_be_visible()
            if w==390: page.screenshot(path=str(OUT/f'{image}-mobile.png'))
        page.locator('#tapBox').click();page.wait_for_timeout(700)
        assert page.evaluate("JSON.parse(localStorage.getItem('money-tap-demo-v1')).balance")==2
        page.emulate_media(reduced_motion='reduce')
        assert page.locator('.start-btn').evaluate('(e)=>parseFloat(getComputedStyle(e).transitionDuration)<0.001')
        checks.append(f'{w}x{h}: large coins, energy above menu, no horizontal overflow, taps, persistence, upgrade, tabs, reduced motion')
        page.close()
    browser.close()
server.shutdown()
assert not errors,errors
checks.append('No browser JavaScript errors')
(OUT/'ui-verification.json').write_text(json.dumps({'checks':checks,'metrics':metrics,'errors':errors},ensure_ascii=False,indent=2)+'\n')
print('\n'.join('PASS: '+x for x in checks))
