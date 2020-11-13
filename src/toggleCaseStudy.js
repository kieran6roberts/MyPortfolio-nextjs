import { toggleClassHandler } from "./toggleClassHandler.js";

//toggle case studies
const caseBtns = [...document.querySelectorAll(".case__btn")];
const studyWrapper = document.querySelector(".case-studies");
const studyBtns = [...document.querySelectorAll(".case-toggle")];
const studyEls = [...document.querySelectorAll(".case-study")];
const modal = document.querySelector(".modal");

export const addStudyHandler = ({ currentTarget }) => {
    toggleClassHandler("open", modal, studyWrapper);
    document.body.classList.toggle("hidden");
    const parentElId = currentTarget.parentElement.id;
    const studyEl = document.querySelector(`.${parentElId}`);
    studyEl.classList.add("open");
};

export const removeStudyHandler = () => {
    modal.classList.toggle("open");
    studyWrapper.classList.toggle("open");
    document.body.classList.toggle("hidden");
    studyEls.forEach( el => el.classList.remove("open"));
};

caseBtns.forEach(btn => btn.addEventListener("click", addStudyHandler));
studyBtns.forEach(btn => btn.addEventListener("click", removeStudyHandler));
