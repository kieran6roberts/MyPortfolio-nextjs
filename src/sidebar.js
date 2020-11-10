import { toggleSidebarHandler } from "./burger.js";
import { toggleAboutHandler } from "./heroBtn.js";

const contactLink = document.querySelector("#link--contact");
const caseLink = document.querySelector("#link--case");
const desktopContactLink = document.querySelector("#nav-contact");

export const toggleContactLink = () => {
    toggleSidebarHandler();
    toggleAboutHandler();
};

export const toggleCaseLink = () => {
    toggleSidebarHandler();
};

contactLink.addEventListener("click", toggleContactLink);
caseLink.addEventListener("click", toggleCaseLink);
desktopContactLink.addEventListener("click", toggleContactLink);