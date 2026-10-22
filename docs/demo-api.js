(() => {
  'use strict';
  const key = 'money-tap-demo-v1';
  const fresh = () => ({
    first_name: 'Игрок', joined_at: new Date().toLocaleDateString('ru-RU'),
    balance: 0, energy: 500, energy_max: 500, referrals: 0,
    referral_code: 'demo', avatar_url: 'public/img/coin.png',
    modifies: {toques_lvl: 1, subscribe_bonus: false},
    updated: Date.now(), timer_end: new Date(Date.now() + 30 * 86400000).toISOString(),
  });
  let state;
  try {
    state = JSON.parse(localStorage.getItem(key));
    if (!state || !Number.isFinite(state.balance) || !state.modifies) state = fresh();
  } catch { state = fresh(); }
  function persist() { try { localStorage.setItem(key, JSON.stringify(state)); } catch {} }
  function recover() {
    const steps = Math.floor((Date.now() - state.updated) / 12000);
    if (steps > 0) {
      state.energy = Math.min(state.energy_max, state.energy + steps);
      state.updated += steps * 12000;
    }
  }
  const clone = value => JSON.parse(JSON.stringify(value));
  function request(path, data) {
    recover();
    let result;
    switch (path) {
      case 'get_info':
        result = {ok: true, info: {...clone(state), converted_balance: state.balance * 0.00449986}};
        break;
      case 'clicker': {
        const clicks = Math.max(0, Math.min(state.energy, Math.floor(Number(data.click_count) || 0)));
        state.balance += clicks * state.modifies.toques_lvl;
        state.energy -= clicks;
        result = {ok: true, now_energy: state.energy};
        break;
      }
      case 'buy_toques': {
        const price = Math.floor(1000 * 2.5 ** (state.modifies.toques_lvl - 1));
        if (state.balance < price) result = {ok: false, error: 'Недостаточно монет'};
        else {
          state.balance -= price;
          state.modifies.toques_lvl++;
          result = {ok: true};
        }
        break;
      }
      case 'get_timer':
        result = {ok: true, timer_end: state.timer_end, days_left: Math.max(0, Math.ceil((new Date(state.timer_end) - Date.now()) / 86400000))};
        break;
      case 'top': {
        const player = {place: 1, first_name: 'Игрок (демо)', balance: state.balance, avatar_url: state.avatar_url};
        result = {ok: true, result: {user_position: player, top_10: [player]}};
        break;
      }
      case 'check_subscription':
        if (!state.modifies.subscribe_bonus) {
          state.modifies.subscribe_bonus = true;
          state.energy_max *= 2;
          state.energy = state.energy_max;
        }
        result = {ok: true, subscribed: true};
        break;
      default: result = {ok: false, error: 'Эта функция недоступна в демоверсии'};
    }
    persist();
    return result;
  }
  const nativeFetch = window.fetch.bind(window);
  window.fetch = (url, options) => {
    if (new URL(url, window.location.href).pathname.endsWith('/get_timer')) {
      return Promise.resolve(new Response(JSON.stringify(request('get_timer', {})), {headers: {'Content-Type':'application/json'}}));
    }
    return nativeFetch(url, options);
  };
  $.ajax = options => {
    const deferred = $.Deferred();
    setTimeout(() => {
      try {
        const path = options.url.split('?')[0].split('/').filter(Boolean).pop();
        const data = typeof options.data === 'string' ? JSON.parse(options.data) : (options.data || {});
        const result = request(path, data);
        options.success?.(result);
        deferred.resolve(result);
      } catch (error) {
        options.error?.(null, 'error', error);
        deferred.reject(error);
      }
    }, 30);
    return deferred.promise();
  };
})();
