import { addStudyHandler, removeStudyHandler } from "./toggleCaseStudy.js";
import { toggleCaseStudyLinksHandler } from "./toggleCaseStudyLinks.js";
import { observerInfo, observerHeaders } from "./observers.js";
import "./toggleState.js";
import { tsParticles } from "tsparticles";
import { particlesConfig } from "./particlesConfig.js";
import ClipboardJS from "clipboard";
import "./scss/index.scss";

const caseInfoEls = document.querySelectorAll(".case__info");
const headerLrgEls = document.querySelectorAll(".case-header__background");
const headerSmEls = document.querySelectorAll(".case-header__primary");
const casesEl = document.querySelector(".cases");

observerHeaders.observe(casesEl);
caseInfoEls.forEach( el => observerInfo.observe(el));
headerLrgEls.forEach( el => observerHeaders.observe(el));
headerSmEls.forEach( el => observerHeaders.observe(el));

tsParticles.load("tsparticles", particlesConfig);
new ClipboardJS(".contact__info--copy");


