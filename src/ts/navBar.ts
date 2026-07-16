const navBar = document.getElementById("menuWrapper")!;
const menuButton = document.getElementById("menuButton");
const defaultWidth = navBar.style.width;
const nightModeButton = document.getElementById("darkmode");

menuButton?.addEventListener("click", () => {
    const menuArrow = document.getElementById("menuIcon")!;
    const pagesWrapper = document.getElementById("pages-wrapper")!;
    const links = pagesWrapper.querySelectorAll("a");
    const pageContent = document.querySelector<HTMLElement>(".content")!;

    if (navBar.style.width === "170px") {
        navBar.style.width = defaultWidth;
        pageContent.style.paddingLeft = "70px";
        menuArrow.textContent = "menu";
        menuArrow.style.paddingLeft = "";

        pagesWrapper.style.width = "";
        pagesWrapper.style.height = "";
        links.forEach((link) => {
            link.style.display = "none";
            link.style.backgroundColor = "";
            link.style.opacity = "0";
        });
        pagesWrapper.querySelector("hr")!.style.display = "none";
    }
    else {
        navBar.style.width = "170px";
        pageContent.style.paddingLeft = "190px";
        menuArrow.textContent = "arrow_back_ios";
        menuArrow.style.paddingLeft = "10px";

        pagesWrapper.style.width = "170px";
        pagesWrapper.style.height = "350px";
        links.forEach((link) => {
            link.style.display = "block";
            link.style.opacity = "1";
        });
        pagesWrapper.querySelector("hr")!.style.display = "block";
    }
});
const categories = document.querySelectorAll<HTMLElement>(".page-links");

categories?.forEach((category) => {
    category.addEventListener("click", (mouseEvent) => {
        const target = mouseEvent.target as HTMLElement;
        if (target.classList.contains("drop")) {

            categories?.forEach((cat) => {
                if (cat !== target.parentElement) {
                    cat.style.backgroundColor = "";
                }
            });
            // then make the dropdown content visible
            mouseEvent.preventDefault();
            if (target.parentElement?.classList.contains("services")) {
                const serviceOptions = document.getElementById("service-options");
                if (serviceOptions!.style.display === "block") {
                    serviceOptions!.style.display = "none";

                    target.parentElement!.style.backgroundColor = "";
                    serviceOptions!.style.backgroundColor = "";
                }
                else {
                    serviceOptions!.style.display = "block";
                    serviceOptions!.style.backgroundColor = "white";

                    target.parentElement!.style.backgroundColor = "white";
                }

            }
            else if (target.parentElement?.classList.contains("aaps")) {
                target.parentElement!.style.backgroundColor = "white";
            }
            else if (target.parentElement?.classList.contains("bookings")) {
                target.parentElement!.style.backgroundColor = "white";
            }
            else if (target.parentElement?.classList.contains("lessonry")) {
                target.parentElement!.style.backgroundColor = "white";
            }
            else if (target.parentElement?.classList.contains("mentors")) {
                target.parentElement!.style.backgroundColor = "white";
            }
            else if (target.parentElement?.classList.contains("professional-development")) {
                target.parentElement!.style.backgroundColor = "white";
            }

        }
    });
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
