import { addStudyHandler, removeStudyHandler }from "./toggleCaseStudy.js";
import { toggleCaseStudyLinksHandler } from "./toggleCaseStudyLinks.js";
import { showObserver, 
  delayObserver, 
  caseInfoEls as showEl,
  observeArr as delayEl  } from "./observers.js";
import "./toggleState.js";
import { tsParticles } from "tsparticles";
import { particlesConfig } from "./particlesConfig.js";
import ClipboardJS from "clipboard";
import "./scss/index.scss";

const init = () => {
  showObserver(showEl);
  delayObserver(delayEl);
  tsParticles.load("tsparticles", particlesConfig);
  new ClipboardJS(".contact__info--copy");
};

window.addEventListener("DOMContentLoaded", init);



