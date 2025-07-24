// NavBar for Small Screens
const bar = document.getElementById("bar");
const close = document.getElementById("close");
const navBar = document.getElementById("navbar");

if (bar) {
    bar.addEventListener("click", () => {
        navBar.style.visibility = "visible";
    });
};

if (bar) {
    close.addEventListener("click", () => {
        navBar.style.visibility = "hidden";
    });
};

// Theme changer
let modeIcon = document.querySelector(".mode-icon");
modeIcon.addEventListener("click", () => {
    const body = document.body;
    const mode = document.querySelector(".mode-icon");

    if (body.classList.contains("light-theme")) {
        body.classList.replace("light-theme", "dark-theme");

        if(mode.classList.contains("fa-sun")) {
            mode.classList.replace("fa-sun", "fa-moon");
        } else {
            mode.classList.add("fa-moon");
        };
    } else if (body.classList.contains("dark-theme")) {
        body.classList.replace("dark-theme", "light-theme");

        if(mode.classList.contains("fa-moon")) {
            mode.classList.replace("fa-moon", "fa-sun");
        } else {
            mode.classList.add("fa-sun");
        };
    }
})
