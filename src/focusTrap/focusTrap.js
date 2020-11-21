import findModalTabs from "./findModalTabs.js";
import toggleElementTabIndex from "./toggleElementTabIndex.js";

const backgroundEls = document.querySelectorAll(".bg-el");
const foregroundEls = document.querySelectorAll(".fg-el");
const allTabEls = [...backgroundEls, ...foregroundEls];

export const focusTrapHandler = arr => {
  if (document.body.classList.contains("open") || document.body.classList.contains("hidden")) {
    toggleElementTabIndex(allTabEls, "-1");
    findModalTabs(arr);
  } else {
    toggleElementTabIndex(foregroundEls, "-1");
    toggleElementTabIndex(backgroundEls, "1");
  }
};

export default focusTrapHandler;