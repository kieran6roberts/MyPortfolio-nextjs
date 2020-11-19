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

const tabElements = [sidebarNav, wrapper, ...studyEls];

const clickHandler = classElements => {
    const check = classElements.some(element => element === aboutSection);
    if (check) document.body.classList.toggle("hidden");
    toggleClassHandler("open", classElements);
    focusTrapHandler(tabElements);
};

const toggleSidebarElements = [sidebarNav, document.body];
const toggleContactElements = [document.body, aboutSection, contactSection, wrapper, modal];
const toggleAboutElements = [sidebarNav, aboutSection, contactSection, wrapper, modal];

contactLink.addEventListener("click", () => clickHandler(toggleAboutElements));
desktopContactLink.addEventListener("click", () => clickHandler(toggleContactElements));
caseLink.addEventListener("click", () => clickHandler(toggleSidebarElements));
homeBurger.addEventListener("click", () => clickHandler(toggleSidebarElements));
homeBurger.addEventListener("keyup", event => event.keyCode === 13 && clickHandler(toggleSidebarElements));
sidebarBurger.addEventListener("click", () => clickHandler(toggleSidebarElements));
sidebarBurger.addEventListener("keyup", event => event.keyCode === 13 && clickHandler(toggleSidebarElements));
heroBtn.addEventListener("click", () => clickHandler(toggleContactElements));
aboutBtn.addEventListener("click", () => clickHandler(toggleContactElements));
aboutBtn.addEventListener("keyup", event => event.keyCode === 13 && clickHandler(toggleContactElements));