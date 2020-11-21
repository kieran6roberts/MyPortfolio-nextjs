const toggleElementTabIndex = (arr, value = "0") => {
  arr.forEach( element => element.setAttribute("tabindex", value));
};

export default toggleElementTabIndex;