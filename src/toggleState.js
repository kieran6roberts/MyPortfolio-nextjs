import { toggleClassHandler } from "./toggleClassHandler.js";
import { focusTrapHandler } from "./focusTrap.js";
import { studyEls } from "./toggleCaseStudy.js";

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

//modal
const modal = document.querySelector(".modal");
const tabIndexCheckArr = [sidebarNav, wrapper, ...studyEls];

contactLink.addEventListener("click", () => {
    const toggleClassArr = [sidebarNav, aboutSection, contactSection, wrapper, modal];
    toggleClassHandler("open", toggleClassArr);
    document.body.classList.toggle("hidden");
    focusTrapHandler(tabIndexCheckArr);
});

desktopContactLink.addEventListener("click", () => {
    const toggleClassArr = [document.body, aboutSection, contactSection, wrapper, modal];
    toggleClassHandler("open", toggleClassArr);
    document.body.classList.toggle("hidden");
    focusTrapHandler(tabIndexCheckArr);
});

caseLink.addEventListener("click", () => {
    toggleClassHandler("open", [document.body, sidebarNav]);
    focusTrapHandler(tabIndexCheckArr);
});


homeBurger.addEventListener("click", () => {
    toggleClassHandler("open", [sidebarNav, document.body]);
    focusTrapHandler(tabIndexCheckArr);
});

homeBurger.addEventListener("keyup", event => {
    if (event.keyCode === 13) {
        toggleClassHandler("open", [sidebarNav, document.body]);
        focusTrapHandler(tabIndexCheckArr);
    }
});

sidebarBurger.addEventListener("click", () => {
    toggleClassHandler("open", [sidebarNav, document.body]);
    focusTrapHandler(tabIndexCheckArr);
});

sidebarBurger.addEventListener("keyup", event => {
    if (event.keyCode === 13) {
        toggleClassHandler("open", [sidebarNav, document.body]);
        focusTrapHandler(tabIndexCheckArr);
    }
});

heroBtn.addEventListener("click", () => {
    const toggleClassArr = [document.body, aboutSection, contactSection, wrapper, modal];
    toggleClassHandler("open", toggleClassArr);
    document.body.classList.toggle("hidden");
    focusTrapHandler(tabIndexCheckArr);
});

aboutBtn.addEventListener("click", () => {
    const toggleClassArr = [document.body, aboutSection, contactSection, wrapper, modal];
    toggleClassHandler("open", toggleClassArr);
    document.body.classList.toggle("hidden");
    focusTrapHandler(tabIndexCheckArr);
});