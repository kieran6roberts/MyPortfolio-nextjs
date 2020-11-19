const studyBtns = [...document.querySelectorAll(".case-study__btn")];

export const toggleCaseStudyLinksHandler = ({ currentTarget }) => {
    const [infoSiblingEl, infoEl ] = queryAncestorSibling(currentTarget);

    if (infoEl.classList.contains("show")) {
        return;
    } else {
        const caseInfoEls = infoSiblingEl.querySelectorAll(".case-info");
        caseInfoEls.forEach( el => el.classList.remove("show"));
        infoEl.classList.add("show");
    }
};

const queryAncestorSibling = targetEl => {
    const ancestorSibling = targetEl.parentElement.parentElement.nextElementSibling;
    const ancestorQueryEl = ancestorSibling.querySelector(`.${targetEl.id}`);
    return [ancestorSibling, ancestorQueryEl];
};

studyBtns.forEach(link => link.addEventListener("click", toggleCaseStudyLinksHandler));