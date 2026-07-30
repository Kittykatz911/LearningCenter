const navBar = document.getElementById("menuWrapper")!;
const menuButton = document.getElementById("menuButton");
const defaultWidth = navBar.style.width;
const nightModeButton = document.getElementById("darkmode");

menuButton?.addEventListener("click", () => {
    const menuArrow = document.getElementById("menuIcon")!;
    const pagesWrapper = document.getElementById("pages-wrapper")!;
    const links = pagesWrapper.querySelectorAll("a");
    const pageContent = document.querySelector<HTMLElement>(".content")!;

    if (navBar.style.width === "190px") {
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

        //remove hr
        const hr = menuButton?.parentElement?.querySelector("#menu-divider");
        hr?.remove();
    }
    else {
        navBar.style.width = "190px";
        pageContent.style.paddingLeft = "190px";
        menuArrow.textContent = "arrow_back_ios";
        menuArrow.style.paddingLeft = "10px";

        pagesWrapper.style.width = "190px";
        pagesWrapper.style.height = "300px";
        links.forEach((link) => {
            link.style.display = "block";
            link.style.opacity = "1";
        });

        // add hr divider:
        const hr = document.createElement("hr");
        hr.id = "menu-divider";
        document.getElementById("menuOptions")!.insertBefore(hr, document.getElementById("signOn_button"));
    }
});
const categories = document.querySelectorAll<HTMLElement>(".page-links");

categories?.forEach((category) => {
    category.addEventListener("click", (mouseEvent) => {
        const target = mouseEvent.target as HTMLElement;
        if (target.classList.contains("drop")) {

            // reset background if dropdown category is not selected
            categories?.forEach((cat) => {
                if (cat !== target.parentElement) {
                    cat.style.backgroundColor = "";
                }
            });

            document.querySelectorAll<HTMLElement>(".sublinks")?.forEach((sublink) => {
                sublink.style.display = "none";
                sublink.style.backgroundColor = "";
            });

            // prevent page from loading
            mouseEvent.preventDefault();

            //Services options
            if (target.parentElement?.classList.contains("services")) {
                const serviceOptions = document.getElementById("service-options");

                //change background of services container (parent) if not already white:
                if (target.parentElement!.style.backgroundColor === "white") {
                    target.parentElement!.style.backgroundColor = "";
                }
                else {
                    target.parentElement!.style.backgroundColor = "white";
                }

                //reveal the service options:
                if (target.parentElement!.style.backgroundColor === "white") {
                    serviceOptions!.style.display = "block";
                    serviceOptions!.style.backgroundColor = "white";
                }
                else {
                    serviceOptions!.style.display = "none";
                    serviceOptions!.style.backgroundColor = "";
                }
            }

            //Assessment and Progress options
            else if (target.parentElement?.classList.contains("aaps")) {
                const aapOptions = document.getElementById("aap-options");
                
                //change background of services container (parent) if not already white:
                if (target.parentElement!.style.backgroundColor === "white") {
                    target.parentElement!.style.backgroundColor = "";
                }
                else {
                    target.parentElement!.style.backgroundColor = "white";
                }

                //reveal the service options:
                if (target.parentElement!.style.backgroundColor === "white") {
                    aapOptions!.style.display = "block";
                    aapOptions!.style.backgroundColor = "white";
                }
                else {
                    aapOptions!.style.display = "none";
                    aapOptions!.style.backgroundColor = "";
                }
            }
                
            //Booking options
            else if (target.parentElement?.classList.contains("bookings")) {
                const bookingOptions = document.getElementById("booking-options");
                
                //change background of services container (parent) if not already white:
                if (target.parentElement!.style.backgroundColor === "white") {
                    target.parentElement!.style.backgroundColor = "";
                }
                else {
                    target.parentElement!.style.backgroundColor = "white";
                }

                //reveal the service options:
                if (target.parentElement!.style.backgroundColor === "white") {
                    bookingOptions!.style.display = "block";
                    bookingOptions!.style.backgroundColor = "white";
                }
                else {
                    bookingOptions!.style.display = "none";
                    bookingOptions!.style.backgroundColor = "";
                }
            }
            
            //Lesson options
            else if (target.parentElement?.classList.contains("lessonry")) {
                const lessons = document.getElementById("lessons");

                //change background of services container (parent) if not already white:
                if (target.parentElement!.style.backgroundColor === "white") {
                    target.parentElement!.style.backgroundColor = "";
                }
                else {
                    target.parentElement!.style.backgroundColor = "white";
                }

                //reveal the service options:
                if (target.parentElement!.style.backgroundColor === "white") {
                    lessons!.style.display = "block";
                    lessons!.style.backgroundColor = "white";
                }
                else {
                    lessons!.style.display = "none";
                    lessons!.style.backgroundColor = "";
                }
            }
                
            //Mentor options
            else if (target.parentElement?.classList.contains("mentors")) {
                const mentors = document.getElementById("mentors-options");

                //change background of services container (parent) if not already white:
                if (target.parentElement!.style.backgroundColor === "white") {
                    target.parentElement!.style.backgroundColor = "";
                }
                else {
                    target.parentElement!.style.backgroundColor = "white";
                }

                //reveal the service options:
                if (target.parentElement!.style.backgroundColor === "white") {
                    mentors!.style.display = "block";
                    mentors!.style.backgroundColor = "white";
                }
                else {
                    mentors!.style.display = "none";
                    mentors!.style.backgroundColor = "";
                }
            }
                
            //Professional Development options
            else if (target.parentElement?.classList.contains("professional-development")) {
                const developmentLinks = document.getElementById("development-options");

                //change background of services container (parent) if not already white:
                if (target.parentElement!.style.backgroundColor === "white") {
                    target.parentElement!.style.backgroundColor = "";
                }
                else {
                    target.parentElement!.style.backgroundColor = "white";
                }

                //reveal the service options:
                if (target.parentElement!.style.backgroundColor === "white") {
                    developmentLinks!.style.display = "block";
                    developmentLinks!.style.backgroundColor = "white";
                }
                else {
                    developmentLinks!.style.display = "none";
                    developmentLinks!.style.backgroundColor = "";
                }
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
