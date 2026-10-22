let sendTimer = null;
setInterval(() => {
  if (manager?.info && sendTimer == null) {
    if (manager.info.energy < manager.info.energy_max) {
      // manager.info.energy += 1;
      // setProgeressbar(manager.info.energy, manager.info.energy_max);
      // addEnergy(1);
      load();
    }
  }
}, 12000);

let clickCount = 0;
async function clicker(countClick) {
  if (!manager?.info) return;
  if (manager.info.energy <= 0) {
    openOnlySub();
    return;
  }
  try {
    WebApp.HapticFeedback.impactOccurred("light");
  } catch {}

  clearTimeout(sendTimer);

  const clickCost = manager.info.modifies.toques_lvl;
  clickCount += 1;

  // Рисуем визуал
  await removeEnergy(1);
  await addCoinCounter(clickCost);
  await setProgeressbar(manager.info.energy, manager.info.energy_max);

  // Рисуем клики
  const plusOne = document.createElement("div");
  plusOne.className = "plus-one";
  plusOne.innerText = "+" + clickCost;

  const boxWidth = document.getElementById("tapBox").clientWidth;

  const randomX = Math.random() * (boxWidth - 50);

  plusOne.style.left = `${randomX}px`;
  plusOne.style.top = "0px";

  document.getElementById("tapBox").appendChild(plusOne);

  setTimeout(() => {
    plusOne.style.transform = "translateY(-30px)";
    plusOne.style.opacity = "0";
  }, 10);

  setTimeout(() => {
    plusOne.remove();
  }, 1000);

  sendTimer = setTimeout(() => {
    $.ajax({
      url: "/clicker",
      method: "post",
      dataType: "json",
      data: JSON.stringify({ telegram_id: userId, click_count: clickCount }),
      success: async function (data) {
        clickCount = 0;
        sendTimer = null;
      },
    });
  }, 500);
}

if (WebApp.platform != "tdesktop") {
  document
    .getElementById("tapBox")
    .addEventListener("touchstart", async function (event) {
      tapCount = event.touches.length;
      await clicker(tapCount);
    });
} else {
  document
    .getElementById("tapBox")
    .addEventListener("click", async function () {
      await clicker(1);
    });
}

tapBox.addEventListener("mousedown", () => {
  tapBox.style.transform = "scale(0.95)";
});

tapBox.addEventListener("mouseup", () => {
  tapBox.style.transform = "scale(1)";
});

tapBox.addEventListener("mouseleave", () => {
  tapBox.style.transform = "scale(1)";
});

tapBox.addEventListener("touchstart", () => {
  tapBox.style.transform = "scale(0.95)";
});

tapBox.addEventListener("touchend", () => {
  tapBox.style.transform = "scale(1)";
});
