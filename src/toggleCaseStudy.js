import { toggleClassHandler } from "./toggleClassHandler.js";

const caseBtns = [...document.querySelectorAll(".case__btn")];
const studyWrapper = document.querySelector(".case-studies");
const studyBtns = [...document.querySelectorAll(".case-toggle")];
const studyEls = [...document.querySelectorAll(".case-study")];
const modal = document.querySelector(".modal");

const queryParent = targetEl => {
    const parentId = targetEl.parentElement.id;
    return document.querySelector(`.${parentId}`);
};

export const addStudyHandler = ({ currentTarget }) => {
    document.body.classList.toggle("hidden");
    const studyEl = queryParent(currentTarget);
    toggleClassHandler("open", modal, studyWrapper, studyEl);
};

export const removeStudyHandler = () => {
    document.body.classList.toggle("hidden");
    toggleClassHandler("open", modal, studyWrapper);
    studyEls.forEach( el => el.classList.remove("open"));
};

caseBtns.forEach(btn => btn.addEventListener("click", addStudyHandler));
studyBtns.forEach(btn => btn.addEventListener("click", removeStudyHandler));
