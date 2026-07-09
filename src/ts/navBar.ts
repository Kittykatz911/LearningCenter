const navBar = document.getElementById("menuWrapper")!;
const menuButton = document.getElementById("menuButton");
const defaultWidth = navBar.style.width;
const nightModeButton = document.getElementById("darkmode");

menuButton?.addEventListener("click", () => {
    const menuArrow = document.getElementById("menuIcon")!;
    if (navBar.style.width === "170px") {
        navBar.style.width = defaultWidth;
        menuArrow.textContent = "arrow_forward_ios";
        menuArrow.style.paddingLeft = "";
    }
    else {
        navBar.style.width = "170px";
        menuArrow.textContent = "arrow_back_ios";
        menuArrow.style.paddingLeft = "10px";
    }
});

nightModeButton?.addEventListener("click", () => {
    const icon = document.getElementById("nightModeIcon");
    if (icon && icon.textContent === "nightlight") {
        icon.textContent = "light_mode";
    }
    else if (icon && icon.textContent === "light_mode") {
        icon.textContent = "nightlight";
    }
});
