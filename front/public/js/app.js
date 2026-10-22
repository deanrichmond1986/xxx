/* Shared Money Tap UI. The live API and the Pages demo use the same views. */
(() => {
  "use strict";
  const $ = (id) => document.getElementById(id);
  const demo = document.documentElement.dataset.mode === "demo";
  const webApp = window.Telegram?.WebApp;
  const userId = demo ? 1 : webApp?.initDataUnsafe?.user?.id;
  const number = new Intl.NumberFormat("ru-RU", { maximumFractionDigits: 0 });
  const routes = {
    play: "Игра",
    boosts: "Улучшения",
    leaders: "Рейтинг",
    profile: "Профиль",
    friends: "Приглашения",
  };
  const state = {
    profile: null,
    started: false,
    pending: 0,
    sent: 0,
    flushPromise: null,
    flushTimer: null,
    readVersion: 0,
    rankingVersion: 0,
    uncertain: false,
    dialogBusy: false,
    dialogKind: "",
    opener: null,
    toastTimer: null,
    route: "play",
  };
  const fmt = (value) => number.format(Math.max(0, Number(value) || 0));
  const level = () =>
    Math.max(1, Number(state.profile?.modifies?.toques_lvl) || 1);
  const price = () => Math.floor(1000 * 2.5 ** (level() - 1));
  const setText = (id, text) => {
    $(id).textContent = text;
  };
  const setAll = (selector, text) =>
    document.querySelectorAll(selector).forEach((node) => {
      node.textContent = text;
    });
  const nextPaint = () =>
    new Promise((resolve) => requestAnimationFrame(resolve));
  let nativeOverflow = "";

  async function api(path, data = {}) {
    if (demo) return window.DemoApi.request(path, data);
    if (!userId)
      throw new Error(
        "Открой игру через Telegram-бота, чтобы загрузить свой профиль.",
      );
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 8000);
    try {
      const response = await fetch(`/${path}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ telegram_id: userId, ...data }),
        signal: controller.signal,
      });
      if (response.status === 403)
        throw new Error(
          "Нет доступа к игре. Открой её снова через Telegram-бота.",
        );
      if (response.status === 401)
        throw new Error(
          "Сессия закончилась. Открой игру снова через Telegram-бота.",
        );
      if (!response.ok)
        throw new Error(
          "Игра временно недоступна. Проверь подключение и попробуй снова.",
        );
      const result = await response.json();
      if (!result.ok) {
        const known = {
          "Insufficient balance": "Недостаточно монет для улучшения.",
          "User not found":
            "Профиль не найден. Отправь /start Telegram-боту и открой игру снова.",
        };
        throw new Error(
          known[result.error] ||
            "Не удалось выполнить действие. Проверь баланс и попробуй снова.",
        );
      }
      return result;
    } catch (error) {
      if (error.name === "AbortError" || error instanceof TypeError)
        throw new Error(
          "Не удалось связаться с игрой. Проверь подключение и попробуй снова.",
        );
      throw error;
    } finally {
      clearTimeout(timeout);
    }
  }

  function banner(message = "") {
    $("connection-banner").hidden = !message;
    setText("connection-text", message);
  }
  function notify(message, tone = "success") {
    clearTimeout(state.toastTimer);
    setText("toast-text", message);
    setText("toast-mark", tone === "error" ? "!" : tone === "info" ? "·" : "✓");
    $("toast").hidden = false;
    state.toastTimer = setTimeout(() => {
      $("toast").hidden = true;
    }, 4500);
  }
  function render() {
    const info = state.profile;
    if (!info) return;
    const outstanding = state.pending + state.sent;
    const balance = Number(info.balance) + outstanding * level();
    const energy = Math.max(0, Number(info.energy) - outstanding);
    const max = Math.max(1, Number(info.energy_max) || 500);
    setAll("[data-balance]", fmt(balance));
    setAll("[data-level]", fmt(level()));
    setAll("[data-next-level]", fmt(level() + 1));
    setAll("[data-price]", fmt(price()));
    setText("energy-current", fmt(energy));
    setText("energy-max", fmt(max));
    setText("profile-energy", fmt(max));
    $("energy-fill").style.width = `${Math.min(100, (energy / max) * 100)}%`;
    $("energy-meter").setAttribute("aria-valuemax", String(max));
    $("energy-meter").setAttribute("aria-valuenow", String(energy));
    $("energy-meter").setAttribute(
      "aria-valuetext",
      `${fmt(energy)} из ${fmt(max)}`,
    );
    setText(
      "energy-note",
      energy === max
        ? "Полный запас. Можно играть"
        : "+1 энергия каждые 12 сек",
    );
    setText(
      "save-status",
      outstanding
        ? "Сохраняем…"
        : state.uncertain
          ? "Нужно проверить баланс"
          : demo
            ? window.DemoApi.storageAvailable
              ? "Сохранено на устройстве"
              : "Без сохранения"
            : "Сохранено",
    );
    $("tap-coin").disabled = energy < 1 || state.uncertain || state.dialogBusy;
    $("tap-coin").setAttribute(
      "aria-label",
      `Нажать и получить ${fmt(level())} монет`,
    );
    setText(
      "tap-hint",
      energy < 1
        ? "Энергия восстанавливается. Можно сделать паузу"
        : "Касайся монеты — находи свой ритм",
    );
    setText("profile-title", info.first_name || "Игрок");
    setText(
      "profile-avatar",
      (info.first_name || "Игрок")
        .trim()
        .slice(0, 1)
        .toLocaleUpperCase("ru-RU"),
    );
    setText(
      "joined-at",
      info.joined_at
        ? `В игре с ${info.joined_at}`
        : "Твоя история начинается с первого тапа",
    );
    setText("friend-count", fmt(info.referrals));
    setText("referral-count", fmt(info.referrals));
    setText(
      "bonus-description",
      info.modifies?.subscribe_bonus
        ? "Бонус уже получен"
        : "Увеличь запас для новых тапов",
    );
    const missing = Math.max(0, price() - balance);
    setText(
      "upgrade-hint",
      missing
        ? `До улучшения ещё ${fmt(missing)} монет`
        : "Монет хватает. Можно улучшить",
    );
    $("referral-link").value = demo
      ? `${location.origin}${location.pathname}`
      : `https://t.me/taptesttap_bot?start=${encodeURIComponent(info.referral_code || "")}`;
  }

  async function refresh({ quiet = false, force = false } = {}) {
    if (!force && (state.pending || state.sent || state.dialogBusy))
      return false;
    const version = ++state.readVersion;
    try {
      const response = await api("get_info");
      if (version !== state.readVersion) return false;
      if (!force && (state.pending || state.sent)) return false;
      state.profile = response.info;
      state.uncertain = false;
      if (demo && !window.DemoApi.storageAvailable)
        banner(
          "Браузер не разрешает сохранение. Можно играть, но прогресс пропадёт после закрытия страницы.",
        );
      else banner();
      render();
      return true;
    } catch (error) {
      if (version !== state.readVersion) return false;
      banner(error.message);
      if (!quiet) setText("save-status", "Не удалось загрузить");
      return false;
    }
  }

  async function start() {
    if ($("start-button").disabled) return;
    const button = $("start-button");
    button.disabled = true;
    button.setAttribute("aria-busy", "true");
    const ok = await refresh({ force: true });
    button.disabled = false;
    button.removeAttribute("aria-busy");
    if (!ok) return;
    state.started = true;
    try {
      localStorage.setItem("money-tap-onboarded-v2", "yes");
    } catch {
      /* The game remains usable without onboarding persistence. */
    }
    $("welcome").hidden = true;
    $("game").hidden = false;
    $("bottom-nav").hidden = false;
    navigate(
      routes[location.hash.slice(1)] ? location.hash.slice(1) : "play",
      true,
    );
  }
  function welcome() {
    flush();
    state.started = false;
    $("welcome").hidden = false;
    $("game").hidden = true;
    $("bottom-nav").hidden = true;
    document.title = "Добро пожаловать — Money Tap";
    history.replaceState(null, "", `${location.pathname}${location.search}`);
    window.scrollTo({ top: 0 });
    $("welcome-title").focus({ preventScroll: true });
  }
  function navigate(route, replace = false) {
    if (!routes[route]) route = "play";
    if (!state.started) {
      if (replace) history.replaceState(null, "", `#${route}`);
      else if (location.hash !== `#${route}`)
        history.pushState(null, "", `#${route}`);
      if (state.profile) {
        state.started = true;
        $("welcome").hidden = true;
        $("game").hidden = false;
        $("bottom-nav").hidden = false;
      } else {
        start();
        return;
      }
    }
    if (location.hash !== `#${route}`) {
      if (replace) history.replaceState(null, "", `#${route}`);
      else history.pushState(null, "", `#${route}`);
    }
    state.route = route;
    state.rankingVersion++;
    document.querySelectorAll("[data-view]").forEach((view) => {
      view.hidden = view.dataset.view !== route;
    });
    document.querySelectorAll("[data-nav]").forEach((link) => {
      if (link.dataset.nav === (route === "friends" ? "profile" : route))
        link.setAttribute("aria-current", "page");
      else link.removeAttribute("aria-current");
    });
    document.title = `${routes[route]} — Money Tap`;
    window.scrollTo({ top: 0 });
    const heading = document.querySelector(`[data-view="${route}"] h1`);
    heading?.focus({ preventScroll: true });
    if (route === "leaders") loadRanking();
  }

  function tap(event) {
    if (!state.profile || $("tap-coin").disabled || state.dialogBusy) return;
    state.pending++;
    state.readVersion++;
    try {
      webApp?.HapticFeedback?.impactOccurred("light");
    } catch {
      /* Unsupported haptics do not block gameplay. */
    }
    if (!matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const pop = document.createElement("span");
      pop.className = "tap-pop";
      pop.textContent = `+${fmt(level())}`;
      pop.setAttribute("aria-hidden", "true");
      const stage = document.querySelector(".coin-stage");
      const rect = stage.getBoundingClientRect();
      const pointer = event?.detail > 0 && event.clientX > 0;
      pop.style.left = `${pointer ? Math.min(rect.width - 20, Math.max(20, event.clientX - rect.left)) : rect.width / 2}px`;
      pop.style.top = `${pointer ? Math.min(rect.height - 20, Math.max(20, event.clientY - rect.top)) : rect.height / 2}px`;
      stage.append(pop);
      setTimeout(() => pop.remove(), 800);
    }
    render();
    clearTimeout(state.flushTimer);
    state.flushTimer = setTimeout(flush, 180);
  }
  async function flush() {
    clearTimeout(state.flushTimer);
    if (state.flushPromise) {
      await state.flushPromise;
      return state.pending ? flush() : !state.uncertain;
    }
    if (!state.pending) return !state.uncertain;
    const count = state.pending;
    state.pending = 0;
    state.sent = count;
    state.readVersion++;
    state.flushPromise = (async () => {
      try {
        const response = await api("clicker", { click_count: count });
        const profile = response.info ? response : await api("get_info");
        state.profile = profile.info;
        state.sent = 0;
        state.uncertain = false;
        render();
        return true;
      } catch {
        state.pending = 0;
        state.sent = 0;
        state.uncertain = true;
        render();
        const reconciled = await refresh({ quiet: true, force: true });
        banner(
          reconciled
            ? "Касания не удалось подтвердить сразу. Баланс проверен — можно продолжить."
            : "Не удалось подтвердить касания. Проверь баланс перед продолжением.",
        );
        return false;
      } finally {
        state.flushPromise = null;
      }
    })();
    const ok = await state.flushPromise;
    if (state.pending && ok) state.flushTimer = setTimeout(flush, 60);
    return ok;
  }

  function openDialog(kind, title, description) {
    if (state.dialogBusy) return;
    if (!$("app-dialog").open) state.opener = document.activeElement;
    state.dialogKind = kind;
    setText("dialog-title", title);
    setText("dialog-description", description);
    setText("dialog-error", "");
    $("dialog-upgrade").hidden = kind !== "upgrade";
    $("dialog-cost").hidden = kind !== "upgrade";
    $("dialog-confirm").hidden = kind === "help" || kind === "claimed";
    $("dialog-confirm").disabled = false;
    setText("dialog-dismiss", kind === "upgrade" ? "Пока не нужно" : "Понятно");
    if (!$("app-dialog").open) {
      nativeOverflow = document.documentElement.style.overflow;
      document.documentElement.style.overflow = "hidden";
      $("app-dialog").showModal();
    }
    $("dialog-dismiss").focus();
  }
  function closeDialog() {
    if (state.dialogBusy) return;
    $("app-dialog").close();
  }
  function upgrade() {
    if (!state.profile) {
      notify("Сначала загрузи свой прогресс.", "info");
      return;
    }
    openDialog(
      "upgrade",
      "Сильнее на один тап",
      "Каждое касание будет приносить больше монет. Улучшение остаётся с тобой.",
    );
    setText("dialog-current", `+${fmt(level())}`);
    setText("dialog-next", `+${fmt(level() + 1)}`);
    setText("dialog-price", `${fmt(price())} монет`);
    setText("dialog-confirm", "Улучшить силу касания");
    const available =
      Number(state.profile.balance) + (state.pending + state.sent) * level();
    const missing = Math.max(0, price() - available);
    if (missing) {
      setText(
        "dialog-error",
        `Пока не хватает ${fmt(missing)} монет. Продолжай играть и возвращайся.`,
      );
      $("dialog-confirm").disabled = true;
    }
    if (state.uncertain) {
      setText(
        "dialog-error",
        "Сначала проверь баланс через сообщение над игрой.",
      );
      $("dialog-confirm").disabled = true;
    }
  }
  function energy() {
    if (!state.profile) {
      notify("Сначала загрузи свой прогресс.", "info");
      return;
    }
    if (state.profile.modifies?.subscribe_bonus) {
      openDialog(
        "claimed",
        "Больше энергии — больше игры",
        `Двойной запас уже активен: ${fmt(state.profile.energy_max)} энергии. Она восстанавливается сама: одна единица каждые 12 секунд.`,
      );
      return;
    }
    openDialog(
      "energy",
      "В два раза больше энергии",
      demo
        ? "Попробуй двойной запас в демоверсии. Это тестовый бонус: подписка на канал не требуется."
        : "Запас можно увеличить за подписку. Если уже подписался через Telegram-бота, проверь статус здесь.",
    );
    setText(
      "dialog-confirm",
      demo ? "Получить тестовый бонус" : "Проверить подписку",
    );
  }
  function help() {
    openDialog(
      "help",
      "Всё начинается с касания",
      "Нажимай на монету, чтобы собирать игровые монеты. Каждое касание расходует одну энергию.\n\nЭнергия восстанавливается сама: +1 каждые 12 секунд. В улучшениях можно увеличить силу касания.\n\n" +
        (demo
          ? "Сейчас открыта демоверсия. Прогресс хранится в этом браузере. Монеты нельзя вывести или обменять на деньги."
          : "Монеты используются внутри игры. Вывод и обмен на реальные деньги недоступны."),
    );
  }
  async function confirmAction() {
    if (state.dialogBusy || $("dialog-confirm").disabled || !state.profile)
      return;
    const kind = state.dialogKind;
    if (!["upgrade", "energy"].includes(kind)) return;
    state.dialogBusy = true;
    const button = $("dialog-confirm");
    button.disabled = true;
    button.setAttribute("aria-busy", "true");
    $("dialog-dismiss").disabled = true;
    $("app-dialog").querySelector(".icon-button").disabled = true;
    setText("dialog-error", "");
    const previousLevel = level();
    let success = false;
    try {
      const tapsConfirmed = await flush();
      if (!tapsConfirmed)
        throw new Error(
          "Сначала проверь баланс: последние касания ещё не подтверждены.",
        );
      if (kind === "upgrade" && Number(state.profile.balance) < price())
        throw new Error(
          `Не хватает ${fmt(price() - state.profile.balance)} монет для улучшения.`,
        );
      const response = await api(
        kind === "upgrade" ? "buy_toques" : "check_subscription",
      );
      if (kind === "energy" && !response.subscribed)
        throw new Error(
          "Подписка пока не подтверждена. Проверь её в Telegram и попробуй снова.",
        );
      const current = await api("get_info");
      state.profile = current.info;
      success = true;
    } catch (error) {
      // Writes are not idempotent. Reconcile once; never automatically replay them.
      const reconciled = await refresh({ quiet: true, force: true });
      if (kind === "upgrade" && reconciled && level() > previousLevel)
        success = true;
      else {
        setText(
          "dialog-error",
          reconciled
            ? error.message
            : "Результат действия пока неизвестен. Закрой окно и проверь баланс перед повтором.",
        );
        if (!reconciled) state.uncertain = true;
      }
    } finally {
      state.dialogBusy = false;
      button.removeAttribute("aria-busy");
      button.disabled =
        state.uncertain ||
        (kind === "upgrade" && Number(state.profile.balance) < price());
      $("dialog-dismiss").disabled = false;
      $("app-dialog").querySelector(".icon-button").disabled = false;
      render();
      if (success) {
        closeDialog();
        notify(
          kind === "upgrade"
            ? `Уровень ${fmt(level())}. Каждое касание приносит больше.`
            : "Двойной запас энергии активирован.",
        );
      }
    }
  }

  async function loadRanking() {
    const version = ++state.rankingVersion;
    $("ranking-frame").setAttribute("aria-busy", "true");
    $("ranking-state").hidden = false;
    $("ranking-retry").hidden = true;
    $("leaderboard").replaceChildren();
    setText("ranking-state", "Загружаем результаты…");
    try {
      const response = await api("top");
      if (version !== state.rankingVersion) return;
      const result = response.result || {};
      const rows = (result.top_10 || []).slice(0, 10);
      setText(
        "my-position",
        result.user_position?.place
          ? `#${fmt(result.user_position.place)}`
          : "Пока вне топа",
      );
      setText(
        "leader-description",
        demo
          ? "Здесь начинается твой личный рекорд."
          : "Результаты, предоставленные игрой.",
      );
      if (!rows.length)
        setText(
          "ranking-state",
          "Результатов пока нет. Сделай первое касание и возвращайся.",
        );
      else {
        $("ranking-state").hidden = true;
        const fragment = document.createDocumentFragment();
        for (const row of rows) {
          const item = document.createElement("li");
          const fields = [
            ["rank-number", fmt(row.place)],
            ["rank-avatar", (row.first_name || "И").slice(0, 1)],
            ["rank-name", row.first_name || "Игрок"],
            ["rank-balance", fmt(row.balance)],
          ];
          for (const [className, value] of fields) {
            const span = document.createElement("span");
            span.className = className;
            span.textContent = value;
            if (className === "rank-avatar")
              span.setAttribute("aria-hidden", "true");
            item.append(span);
          }
          fragment.append(item);
        }
        $("leaderboard").replaceChildren(fragment);
      }
    } catch {
      if (version !== state.rankingVersion) return;
      setText(
        "ranking-state",
        "Не удалось загрузить рейтинг. Твой игровой прогресс сохранён.",
      );
      $("ranking-retry").hidden = false;
    } finally {
      if (version === state.rankingVersion)
        $("ranking-frame").setAttribute("aria-busy", "false");
    }
  }
  async function copyLink() {
    const button = $("copy-link");
    if (button.disabled || !$("referral-link").value) return;
    button.disabled = true;
    try {
      if (!navigator.clipboard?.writeText)
        throw new Error("Clipboard unavailable");
      await navigator.clipboard.writeText($("referral-link").value);
      setText(
        "copy-help",
        "Ссылка скопирована. Теперь можно отправить её другу.",
      );
      notify("Ссылка скопирована.");
    } catch {
      $("referral-link").focus();
      $("referral-link").select();
      setText(
        "copy-help",
        "Не удалось скопировать автоматически. Ссылка выделена — скопируй её вручную.",
      );
    } finally {
      button.disabled = false;
    }
  }
  async function retry() {
    if (!state.started) {
      await start();
      return;
    }
    const ok = await refresh({ force: true });
    if (ok) notify("Баланс проверен. Можно продолжить.", "info");
  }
  window.App = {
    start,
    welcome,
    navigate,
    tap,
    upgrade,
    energy,
    help,
    confirmAction,
    closeDialog,
    copyLink,
    retry,
    loadRanking,
    notify,
  };

  document.addEventListener("click", (event) => {
    const link = event.target.closest('a[href^="#"]');
    if (
      !link ||
      link.classList.contains("skip-link") ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    )
      return;
    const route = link.hash.slice(1);
    if (!routes[route]) return;
    event.preventDefault();
    navigate(route);
  });
  window.addEventListener("popstate", () => {
    const route = location.hash.slice(1);
    if (route === "main") return;
    if (routes[route]) navigate(route, true);
    else welcome();
  });
  $("app-dialog").addEventListener("keydown", (event) => {
    if (event.key !== "Tab") return;
    const nodes = [
      ...$("app-dialog").querySelectorAll(
        'button, a[href], input, [tabindex="0"]',
      ),
    ].filter((node) => !node.disabled && node.getClientRects().length);
    const first = nodes[0];
    const last = nodes[nodes.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last?.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first?.focus();
    }
  });
  $("app-dialog").addEventListener("cancel", (event) => {
    if (state.dialogBusy) event.preventDefault();
  });
  $("app-dialog").addEventListener("close", () => {
    document.documentElement.style.overflow = nativeOverflow;
    if (state.opener?.isConnected) state.opener.focus({ preventScroll: true });
  });
  window.addEventListener("storage", (event) => {
    if (
      demo &&
      event.key === "money-tap-demo-v1" &&
      !state.pending &&
      !state.sent &&
      !state.dialogBusy
    )
      refresh({ quiet: true });
  });
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) flush();
    else if (state.started) refresh({ quiet: true });
  });
  setInterval(() => {
    if (state.started && !document.hidden) refresh({ quiet: true });
  }, 12000);
  try {
    webApp?.ready?.();
    webApp?.expand?.();
    webApp?.disableVerticalSwipes?.();
  } catch {
    /* Telegram methods are optional in the public demo. */
  }
  if (!userId) {
    $("start-button").disabled = true;
    setText(
      "welcome-note",
      "Открой игру через Telegram-бота, чтобы загрузить профиль.",
    );
  } else {
    let returning = false;
    try {
      returning = localStorage.getItem("money-tap-onboarded-v2") === "yes";
    } catch {
      /* An unavailable store should not block entry. */
    }
    if (returning || routes[location.hash.slice(1)]) nextPaint().then(start);
  }
})();
