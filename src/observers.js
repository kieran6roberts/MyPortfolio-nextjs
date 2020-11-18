import { toggleClassHandler } from "./toggleClassHandler.js";

const intersectionHandler = (entries, observer) => {
  entries.forEach( entry => {
    if (entry.isIntersecting) {
      toggleClassHandler("show", entry.target);
      observer.unobserve(entry.target);
    }
  });
};

const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.1
};

export const observerInfo = new IntersectionObserver(intersectionHandler, {});
export const observerHeaders = new IntersectionObserver(intersectionHandler, options);