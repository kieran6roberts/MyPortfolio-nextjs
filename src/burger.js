const homeBurger = document.querySelector(".nav__burger");
const sidebarNav = document.querySelector(".sidebar");
const sidebarBurger = document.querySelector(".sidebar__burger");

export const toggleSidebarHandler = event => {
    sidebarNav.classList.toggle("open");
    document.body.classList.toggle("overflow");
};

export const toggleBurgerHandler = event => {
    sidebarNav.classList.toggle("open");
    document.body.classList.toggle("overflow");
};

homeBurger.addEventListener("click", toggleBurgerHandler);
sidebarBurger.addEventListener("click", toggleSidebarHandler);


