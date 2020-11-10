export const toggleClassHandler = (className, ...elements) => {
    [...elements].forEach( el => el.classList.toggle(`${className}`));
};