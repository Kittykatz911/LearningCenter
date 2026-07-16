const navBar = document.getElementById("menuWrapper")!;
const menuButton = document.getElementById("menuButton");
const defaultWidth = navBar.style.width;
const nightModeButton = document.getElementById("darkmode");

menuButton?.addEventListener("click", () => {
    const menuArrow = document.getElementById("menuIcon")!;
    const pagesWrapper = document.getElementById("pages-wrapper")!;
    const links = pagesWrapper.querySelectorAll("a");

    if (navBar.style.width === "170px") {
        navBar.style.width = defaultWidth;
        menuArrow.textContent = "arrow_forward_ios";
        menuArrow.style.paddingLeft = "";

        pagesWrapper.style.width = "";
        pagesWrapper.style.height = "";
        links.forEach((link) => {
            link.style.display = "none";
            link.style.opacity = "0";
        });
        pagesWrapper.querySelector("hr")!.style.display = "none";
    }
    else {
        navBar.style.width = "170px";
        menuArrow.textContent = "arrow_back_ios";
        menuArrow.style.paddingLeft = "10px";

        pagesWrapper.style.width = "170px";
        pagesWrapper.style.height = "280px";
        links.forEach((link) => {
            link.style.display = "block";
            link.style.opacity = "1";
        });
        pagesWrapper.querySelector("hr")!.style.display = "block";
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
