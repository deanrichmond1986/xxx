/* Pages adapter: preserves the existing demo save, never calls a remote API. */
(() => {
  "use strict";
  const key = "money-tap-demo-v1";
  let storageAvailable = true;
  const fresh = () => ({
    first_name: "Игрок",
    joined_at: new Date().toLocaleDateString("ru-RU"),
    balance: 0,
    energy: 500,
    energy_max: 500,
    referrals: 0,
    referral_code: "demo",
    avatar_url: "public/img/coin.png",
    modifies: { toques_lvl: 1, subscribe_bonus: false },
    updated: Date.now(),
    timer_end: new Date(Date.now() + 30 * 86400000).toISOString(),
  });
  let memory = fresh();
  function read() {
    try {
      const saved = JSON.parse(localStorage.getItem(key));
      if (
        saved &&
        Number.isFinite(saved.balance) &&
        Number.isFinite(saved.energy) &&
        Number(saved.energy_max) > 0 &&
        Number(saved.modifies?.toques_lvl) >= 1
      )
        memory = saved;
    } catch {
      storageAvailable = false;
    }
    return memory;
  }
  function persist(info) {
    memory = info;
    try {
      localStorage.setItem(key, JSON.stringify(info));
    } catch {
      storageAvailable = false;
    }
  }
  function transact(path, data) {
    const info = read();
    const stamp = Number(info.updated) || Date.now();
    const steps = Math.max(0, Math.floor((Date.now() - stamp) / 12000));
    info.energy = Math.min(info.energy_max, info.energy + steps);
    info.updated = steps ? stamp + steps * 12000 : stamp;
    let result;
    switch (path) {
      case "get_info":
        result = { ok: true, info };
        break;
      case "clicker": {
        const count = Math.max(
          0,
          Math.min(info.energy, Math.floor(Number(data.click_count) || 0)),
        );
        info.balance += count * info.modifies.toques_lvl;
        info.energy -= count;
        result = { ok: true, now_energy: info.energy, info };
        break;
      }
      case "buy_toques": {
        const price = Math.floor(1000 * 2.5 ** (info.modifies.toques_lvl - 1));
        if (info.balance < price)
          throw new Error("Недостаточно монет для улучшения.");
        info.balance -= price;
        info.modifies.toques_lvl++;
        result = { ok: true };
        break;
      }
      case "check_subscription":
        if (!info.modifies.subscribe_bonus) {
          info.modifies.subscribe_bonus = true;
          info.energy_max *= 2;
          info.energy = info.energy_max;
        }
        result = { ok: true, subscribed: true };
        break;
      case "get_timer":
        result = {
          ok: true,
          timer_end: info.timer_end,
          days_left: Math.max(
            0,
            Math.ceil((new Date(info.timer_end) - Date.now()) / 86400000),
          ),
        };
        break;
      case "top": {
        const player = {
          place: 1,
          first_name: `${info.first_name} (демо)`,
          balance: info.balance,
        };
        result = {
          ok: true,
          result: { user_position: player, top_10: [player] },
        };
        break;
      }
      default:
        throw new Error("Эта функция недоступна в демоверсии.");
    }
    persist(info);
    return JSON.parse(JSON.stringify(result));
  }
  window.DemoApi = {
    get storageAvailable() {
      return storageAvailable;
    },
    async request(path, data = {}) {
      await new Promise((resolve) => setTimeout(resolve, 35));
      // Cross-tab writes are serialized where the browser supports Web Locks.
      if (navigator.locks?.request)
        return navigator.locks.request(key, () => transact(path, data));
      return transact(path, data);
    },
  };
})();
