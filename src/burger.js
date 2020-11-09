const homeBurger = document.querySelector(".nav__burger");
const sidebarNav = document.querySelector(".sidebar");
const sidebarBurger = document.querySelector(".sidebar__burger");

export const toggleSidebarHandler = () => {
    sidebarNav.classList.toggle("open");
    document.body.classList.toggle("overflow");
};

homeBurger.addEventListener("click", toggleSidebarHandler);
sidebarBurger.addEventListener("click", toggleSidebarHandler);


