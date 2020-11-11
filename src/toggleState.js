import { toggleClassHandler } from "./toggleClassHandler.js";

//burger nav toggle
const homeBurger = document.querySelector(".nav__burger");
const sidebarNav = document.querySelector(".sidebar");
const sidebarBurger = sidebarNav.querySelector(".sidebar__burger");

//hero cta toggle
const heroBtn = document.querySelector(".hero__btn");
const aboutBtn = document.querySelector("#about-toggle");
const aboutSection = document.querySelector(".about");
const contactSection = document.querySelector(".contact");
const wrapper = document.querySelector(".wrapper");

//nav links toggle
const contactLink = document.querySelector("#link--contact");
const caseLink = document.querySelector("#link--case");
const desktopContactLink = document.querySelector("#nav-contact");

contactLink.addEventListener("click", () => {
    toggleClassHandler("open", sidebarNav,
                               document.body,
                               contactSection,
                               aboutSection,
                               wrapper
    );
    document.body.classList.toggle("hidden");
});

desktopContactLink.addEventListener("click", () => {
    toggleClassHandler("open", sidebarNav,
                               document.body,
                               contactSection,
                               aboutSection,
                               wrapper
    );
    document.body.classList.toggle("hidden");
});

caseLink.addEventListener("click", () => {
    toggleClassHandler("open", sidebarNav,
                               document.body
    );
});


homeBurger.addEventListener("click", () => {
    toggleClassHandler("open", sidebarNav, 
                               document.body
    );
});

sidebarBurger.addEventListener("click", () => {
    toggleClassHandler("open", sidebarNav, 
                               document.body
    );
});

heroBtn.addEventListener("click", () => {
    toggleClassHandler("open", sidebarNav,
                               document.body,
                               contactSection,
                               aboutSection,
                               wrapper
    );
    document.body.classList.toggle("hidden");
});

aboutBtn.addEventListener("click", () => {
    toggleClassHandler("open", sidebarNav,
                               document.body,
                               contactSection,
                               aboutSection,
                               wrapper
    );
    document.body.classList.toggle("hidden");
});