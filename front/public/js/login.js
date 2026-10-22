let coinCounter = document.querySelector(".stats__clicks");
let energyMax = document.querySelector(".energy__max");
let energy = document.querySelector(".energy__current");
let progeressbar = document.querySelector(".progress-bar-energy");

document.querySelector(".buy_toques").addEventListener("click", () => {
  $.ajax({
    url: "/buy_toques",
    method: "post",
    dataType: "json",
    data: JSON.stringify({ telegram_id: userId }),
    success: async function (data) {
      if (data.ok) {
        load();
        closeToques();
        showNotification("Покупка выполнена", "done");
      } else {
        closeToques();
        showNotification("Недостаточно монет", "error");
      }
    },
  });
});

async function setToques(level) {
  const level_box = [
    ".toques_level_modal",
    ".toques_level",
    ".toques_level_tocar_balance",
    ".toques_level_tocar",
    ".current_tocar_modal",
  ];
  level_box.forEach((element) => {
    document.querySelector(element).innerHTML = level;
  });
  document.querySelector(".next_tocar_modal").innerHTML = level + 1;
  document.querySelector(".toques_cost_modal").innerHTML =
    calculate_price(level);
}

async function setReferals(count) {
  document.querySelector(".share__invite-count").innerHTML =
    manager.info.referrals;
  document.querySelector(".stats__friends").innerHTML =
    manager.info.referrals + " друзей";
  document.querySelector(".Przyjaciele-stats").innerHTML =
    manager.info.referrals + " друзей";
  document.querySelector(".count_Przyjaciele_balacne").innerHTML =
    manager.info.referrals + " друзей";

  document.querySelector(".share__income-coin_text").innerHTML = formatNumber(
    manager.info.referrals * 100
  );
}

async function setReferalsLink() {
  document.querySelector(".share__invite-link").innerHTML =
    "https://t.me/taptesttap_bot?start=" + manager.info.referral_code;
}

document.querySelector(".share__btn").addEventListener("click", () => {
  copyToClipboard(document.querySelector(".share__invite-link").innerHTML);
});

async function setName(name) {
  document.querySelector(".wallet__profile-name").innerHTML = name;
  document.querySelector(".rating-card__username").innerHTML = name;
}

async function setPhoto(url) {
  document.querySelector(".wallet__profile-avatar").setAttribute("src", url);
  document.querySelector(".rating-card__avatar").setAttribute("src", url);
}

async function setDateregistration(date) {
  document.querySelector(
    ".wallet__profile-reg"
  ).innerHTML = `В игре с ${date}`;
}

async function setCoinCounter(count) {
  coinCounter.innerHTML = formatNumber(count);
  document.querySelector(".balance__coins").innerHTML = coinCounter.innerHTML;
  document.querySelector(".rating_amount_user").innerHTML = nFormatter(
    count,
    1
  );
  document.querySelector(".balance__usd").innerHTML =
    formatNumber(roundNumber(manager.info.converted_balance, 2)) + " PLN";
  document.querySelector(".perks-balance__coins").innerHTML =
    coinCounter.innerHTML;
}

async function addCoinCounter(count) {
  manager.info.balance += count;
  coinCounter.innerHTML = formatNumber(manager.info.balance);
  document.querySelector(".balance__coins").innerHTML = coinCounter.innerHTML;
  document.querySelector(".rating_amount_user").innerHTML = nFormatter(
    manager.info.balance,
    1
  );
  document.querySelector(".balance__usd").innerHTML =
    formatNumber(nFormatter(manager.info.balance * 0.00449986, 2), 2) + " PLN";
  document.querySelector(".perks-balance__coins").innerHTML =
    coinCounter.innerHTML;
}

async function setMaxEnergy(count) {
  energyMax.innerHTML = "/" + count;
}

async function setEnergy(count) {
  energy.innerHTML = count;
  document.querySelector(".min-popup-energy").innerHTML = manager.energy_max;
  document.querySelector(".max-popup-energy").innerHTML =
    manager.energy_max * 3;
}

async function addEnergy(count) {
  manager.info.energy += count;
  energy.innerHTML = manager.info.energy;
}

async function removeEnergy(count) {
  if (manager.info.energy - count > 0) manager.info.energy -= count;
  else manager.info.energy = 0;
  energy.innerHTML = manager.info.energy;
}

async function setProgeressbar(energy, maxEnergy) {
  progeressbar.style.width = (energy / maxEnergy) * 100 + "%";
}

async function load() {
  if (!userId) return;
  $.ajax({
    url: "/get_info",
    method: "post",
    dataType: "json",
    data: JSON.stringify({ telegram_id: userId }),
    success: async function (data) {
      manager = data;
      if (manager.ok) {
        await setCoinCounter(manager.info.balance);
        await setEnergy(manager.info.energy);
        await setMaxEnergy(manager.info.energy_max);
        await setName(manager.info.first_name);
        await setPhoto(manager.info.avatar_url);
        await setDateregistration(manager.info.joined_at);
        await setToques(manager.info.modifies.toques_lvl);
        await setReferals(manager.info.referrals);
        await setReferalsLink();
        await setProgeressbar(manager.info.energy, manager.info.energy_max);
      }
    },
  });
}

document.addEventListener("DOMContentLoaded", async () => {
  if (!userId) return;
  await load();
});
