import toggleElementTabIndex from "./toggleElementTabIndex";

const findModalTabs = arr => {
  const openModal = arr.find(element => element.classList.contains("open"));
  toggleElementTabIndex(arr, "-1");
  openModal.querySelectorAll(".fg-el").forEach( element => {
    element.setAttribute("tabindex", "1");
  })
};

export default findModalTabs;