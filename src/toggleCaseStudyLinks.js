const studyBtns = [...document.querySelectorAll(".case-study__btn")];

export const toggleCaseStudyLinksHandler = ({ currentTarget }) => {
    const btnElId = currentTarget.id;
    const listEl = currentTarget.parentElement.parentElement;
    const listSiblingEl = listEl.nextElementSibling;
    const infoEl = listSiblingEl.querySelector(`.${btnElId}`);
    if (infoEl.classList.contains("show")) {
        return;
    }
    else {
        const caseInfoEls = listSiblingEl.querySelectorAll(".case-info");
        caseInfoEls.forEach( el => el.classList.remove("show"));
        infoEl.classList.add("show");
    }
};

studyBtns.forEach(link => link.addEventListener("click", toggleCaseStudyLinksHandler));