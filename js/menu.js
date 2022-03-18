const slideMenu = document.querySelector(".mobile-menu");
const btnMenuBars = document.getElementById("btn-menu-bars");
const btnMenuTimes = document.getElementById("btn-menu-times");

btnMenuBars.addEventListener("click", ()=> {
    btnMenuBars.classList.add("hidden");
    btnMenuTimes.classList.remove("hidden");
    slideMenu.classList.add("visible");
});

btnMenuTimes.addEventListener("click", ()=> {
    btnMenuTimes.classList.add("hidden");
    btnMenuBars.classList.remove("hidden");
    slideMenu.classList.remove("visible");
})

// Menu Desktop

const btnMenuDesktop = document.getElementById("btn-menu-desktop");

btnMenuDesktop.addEventListener("click", ()=> {
    const menuDesktop = document.getElementById("menu-desktop");
    const btnMenuContainer = document.querySelector(".btn-menu-container");

    menuDesktop.classList.toggle("visible");
    btnMenuContainer.classList.toggle("hide-background");
})