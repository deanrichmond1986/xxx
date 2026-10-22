function BackButton(){
    openPage(currentPage)
    WebApp.BackButton.hide();
}

WebApp.BackButton.onClick(() => {
    BackButton();
});

function openPage(page, callback = "") {
    WebApp.BackButton.onClick(null);
    const pages = ["work", "perks", "rating", "balance", "referals"];

    WebApp.BackButton.hide();
    try {
        WebApp.HapticFeedback.impactOccurred('light');
    } catch {}


    const menuList = document.querySelectorAll(".menu__button");
    menuList.forEach((btn) => {
        btn.classList.remove("menu__button_current");
    });

    pages.forEach((p) => {
        const pageElement = document.querySelector(`.${p}`);
        if (p !== page) {
            pageElement.classList.remove("visible");
            pageElement.style.display = "none";
        }
    });

    const showPage = (selector, menuIndex, display) => {
        menuList[menuIndex].classList.add("menu__button_current");
        const pageElement = document.querySelector(selector);
        pageElement.style.display = display;
        setTimeout(() => {
            pageElement.classList.add("visible");
        }, 10);
    };

    switch (page) {
        case "work":
            showPage(".work", 0, "flex");
            break;
        case "perks":
            showPage(".perks", 1, "flex");
            break;
        case "rating":
            showPage(".rating", 2, "flex");
            break;
        case "balance":
            showPage(".balance", 3, "block");
            break;
        case "referals":
            document.querySelector(".referals").style.display = "block";
            currentPage = callback;
            WebApp.BackButton.show();
            break;
    }
}

document.querySelector(".start-btn").addEventListener("click", () => {
    try {
        WebApp.HapticFeedback.impactOccurred('light');
    } catch {}
    document.querySelector("#start-page").setAttribute("hidden", true);
    document.querySelector("#main-page").removeAttribute("hidden");
    openPage("work");
});
