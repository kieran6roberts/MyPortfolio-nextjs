import { toggleClassHandler } from "./toggleClassHandler.js";

const casesEl = document.querySelector(".cases");
const headerLrgEls = casesEl.querySelectorAll(".case-header__background");
const headerSmEls = casesEl.querySelectorAll(".case-header__primary");
const caseInfoEls = [...casesEl.querySelectorAll(".case__info")];

const observeArr = [...headerLrgEls, ...headerSmEls, casesEl];

const intersectionHandler = (entries, observer) => {
  entries.forEach( entry => {
    if (entry.isIntersecting) {
      toggleClassHandler("show", entry.target);
      observer.unobserve(entry.target);
    }
  });
};

const createObserver = (handler, options = {}) => {
  try {
    const observer = new IntersectionObserver(handler, options);
    return function initObserver(element) {
      if (Array.isArray(element)) {
        return element.forEach( el => observer.observe(el));
      } else {
        return observer.observe(element);
      }
    };
  } catch(err) {
    throw new Error(err);
  }
};

const showObserver = createObserver(intersectionHandler, {});
const delayObserver = createObserver(intersectionHandler, {
  threshold: 0.1
});

export {
  showObserver,
  delayObserver,
  observeArr,
  caseInfoEls
};

const errorHandler = () => {};

