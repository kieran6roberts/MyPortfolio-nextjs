export const toggleClassHandler = (className, ...elements) => {
    if (typeof className !== "string" || [...elements].length === 0) {
        throw new Error("missing args in class toggle");
    } else {
        [...elements].forEach( el => el.classList.toggle(`${className}`));
    }
    
};