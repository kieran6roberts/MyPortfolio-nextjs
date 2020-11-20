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
  const openModal = arr.find(element => element.classList.contains("open"));
  toggleElementTabIndex(arr, "-1");
  openModal.querySelectorAll(".fg-el").forEach( element => {
    element.setAttribute("tabindex", "1");
  })
};