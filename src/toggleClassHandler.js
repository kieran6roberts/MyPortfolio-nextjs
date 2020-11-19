export const toggleClassHandler = (className = "", elementArr) => {
   const isArgHtmlEl = elementArr.every(isArgDomElement);
   if (elementArr.length === 0 || !isArgHtmlEl) return;
   else elementArr.forEach( el => el.classList.toggle(`${className}`));
};

const isArgDomElement = arg => arg instanceof HTMLElement;