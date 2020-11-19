import { toggleClassHandler } from "./toggleClassHandler";

const backgroundEls = document.querySelectorAll(".bg-el");
const foregroundEls = document.querySelectorAll(".fg-el");
const AllTabEls = [...backgroundEls, ...foregroundEls];

export const focusTrapHandler = arr => {
  if (document.body.classList.contains("open") || document.body.classList.contains("hidden")) {
    toggleElementTabIndex(AllTabEls, "-1");
    findModalTabs(arr);
  } else {
    toggleElementTabIndex(foregroundEls, "-1");
    toggleElementTabIndex(backgroundEls, "1");
  }
};

const toggleElementTabIndex = (arr, value = "0") => {
  arr.forEach( element => element.setAttribute("tabindex", value));
};
  
const findModalTabs = arr => {
  toggleElementTabIndex(arr, "-1");
  const openModal = arr.find(element => element.classList.contains("open"));
  console.log(openModal);
  openModal.querySelectorAll(".fg-el").forEach( element => {
    element.setAttribute("tabindex", "1");
  })
};