function openToques() {
  try {
    WebApp.HapticFeedback.impactOccurred("light");
  } catch {}
  document.querySelector(".popup-toques").style.display = "flex";
  document
    .querySelector(".popup-toques-modal")
    .classList.remove("popup__box_hide");
}

function closeToques() {
  try {
    WebApp.HapticFeedback.impactOccurred("light");
  } catch (e) {}

  document
    .querySelector(".popup-toques-modal")
    .classList.add("popup__box_hide");
  setTimeout(() => {
    document.querySelector(".popup-toques").style.display = "none";
  }, 200);
}

document
  .querySelector(".popup__toques-close-btn")
  .addEventListener("click", () => {
    closeToques();
  });

function openSub(callback = "") {
  try {
    WebApp.HapticFeedback.impactOccurred("light");
  } catch {}

  if (manager.info.modifies.subscribe_bonus == false) {
    document.querySelector(".popup-sub").style.display = "flex";
    document
      .querySelector(".popup-sub-modal")
      .classList.remove("popup__box_hide");
  } else {
	openOnlySub()
    // openPage("referals", callback);
  }
}

function openOnlySub() {
  try {
    WebApp.HapticFeedback.impactOccurred("light");
  } catch {}

  document.querySelector(".popup-only-sub").style.display = "flex";
  document
    .querySelector(".popup-only-sub-modal")
    .classList.remove("popup__box_hide");
}

function closeOnlySub() {
  try {
    WebApp.HapticFeedback.impactOccurred("light");
  } catch {}

  document
    .querySelector(".popup-only-sub-modal")
    .classList.add("popup__box_hide");
  setTimeout(() => {
    document.querySelector(".popup-only-sub").style.display = "none";
  }, 200);
}

function closeSub() {
  try {
    WebApp.HapticFeedback.impactOccurred("light");
  } catch {}

  document.querySelector(".popup-sub-modal").classList.add("popup__box_hide");
  setTimeout(() => {
    document.querySelector(".popup-sub ").style.display = "none";
  }, 200);
}

document
  .querySelector(".popup__sub-close-btn")
  .addEventListener("click", () => {
    closeSub();
  });

document
  .querySelector(".popup__only-sub-close-btn")
  .addEventListener("click", () => {
    closeOnlySub();
  });

document.querySelector(".subscribe-only-btn").addEventListener("click", () => {
  try {
    WebApp.HapticFeedback.impactOccurred("light");
  } catch {}
  try {
    showNotification("Это демоверсия. Для тестовой награды нажми «Проверить подписку».", "done");
  } catch (e) {
    alert(e);
  }
});

document.querySelector(".subscribe-btn").addEventListener("click", () => {
  try {
    WebApp.HapticFeedback.impactOccurred("light");
  } catch {}
  try {
    showNotification("Это демоверсия. Для тестовой награды нажми «Проверить подписку».", "done");
  } catch (e) {
    alert(e);
  }
});

document.querySelector(".verificate_sub").addEventListener("click", () => {
  try {
    WebApp.HapticFeedback.impactOccurred("light");
  } catch {}
  $.ajax({
    url: "/check_subscription",
    method: "post",
    dataType: "json",
    data: JSON.stringify({ telegram_id: userId }),
    success: async function (data) {
      if (data.ok) {
        if (data.subscribed) {
          await load();
          closeSub();
          showNotification("Готово! Ты получил двойной запас энергии", "done");
          return;
        }
      }
      closeSub();
      showNotification("Подписка не найдена", "error");
    },
  });
});

function openListing(callback) {
  try {
    WebApp.HapticFeedback.impactOccurred("light");
  } catch {}
  document.querySelector("#listing-page").removeAttribute("hidden");
  currentPage = callback;

  WebApp.BackButton.show();
  WebApp.BackButton.onClick(null);

  WebApp.BackButton.onClick(() => {
    document.querySelector("#listing-page").setAttribute("hidden", true);
    WebApp.BackButton.hide();
  });
}

document.querySelector(".listing-page").addEventListener("click", () => {
  openListing("work");
});
document.querySelector(".go-to-listing").addEventListener("click", () => {
  openListing("balance");
});
