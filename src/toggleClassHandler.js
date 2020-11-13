export const toggleClassHandler = (className, ...elements) => {
    const isArgHtmlEl = [...elements].every(isArgDomElement);
    if (typeof className !== "string" || [...elements].length === 0 || !isArgHtmlEl) {
        return;
    } else {
        [...elements].forEach( el => el.classList.toggle(`${className}`));
    } 
};

const isArgDomElement = arg => arg instanceof HTMLElement;