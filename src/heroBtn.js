const heroBtn = document.querySelector(".hero__btn");
const aboutBtn = document.querySelector("#about-toggle");
const aboutSection = document.querySelector(".about");
const contactSection = document.querySelector(".contact");
const wrapper = document.querySelector(".wrapper");

export const toggleAboutHandler = () => {
    contactSection.classList.toggle("open");
    aboutSection.classList.toggle("open");
    wrapper.classList.toggle("open");
    document.body.classList.toggle("hidden");
};

heroBtn.addEventListener("click", toggleAboutHandler);
aboutBtn.addEventListener("click", toggleAboutHandler);