export const toggleClassHandler = (className = "", ...elements) => {
    const isArgHtmlEl = [...elements].every(isArgDomElement);
    
    if ([...elements].length === 0 || !isArgHtmlEl) return;
    else [...elements].forEach( el => el.classList.toggle(`${className}`));
};

const isArgDomElement = arg => arg instanceof HTMLElement;