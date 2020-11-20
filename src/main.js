import "./toggleCaseStudy.js";
import "./toggleCaseStudyLinks.js";
import "./toggleState.js";
import { focusTrapHandler } from "./focusTrap.js";
import { showObserver, 
  delayObserver, 
  caseInfoEls as showEl,
  observeArr as delayEl  } from "./observers.js";
import ClipboardJS from "clipboard";
import "./scss/index.scss";

const init = () => {
  focusTrapHandler();
  showObserver(showEl);
  delayObserver(delayEl);
  new ClipboardJS(".contact__info--copy");
};

window.addEventListener("DOMContentLoaded", init);



