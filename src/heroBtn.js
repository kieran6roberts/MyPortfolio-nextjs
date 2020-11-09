const heroBtn = document.querySelector(".hero__btn");
const aboutBtn = document.querySelector(".about__toggle");
const aboutSection = document.querySelector(".about");
const contactSection = document.querySelector(".contact");
const wrapper = document.querySelector(".wrapper");

export const toggleAboutHandler = () => {
    contactSection.classList.toggle("open");
    aboutSection.classList.toggle("open");
    document.body.classList.toggle("overflow");

    wrapper.classList.toggle("open");


};

heroBtn.addEventListener("click", toggleAboutHandler);
aboutBtn.addEventListener("click", toggleAboutHandler);