const main = document.querySelector("#main");
const menu = document.querySelector("#menu_button");
const navOpen = document.querySelector("#nav_open");
const navClose = document.querySelector("#nav_close");
const navBlock = document.querySelector("#navigation_block");

const openNavigation = () => {
    navOpen.classList.add("navigation__mobile--hidden");
    navClose.classList.remove("navigation__mobile--hidden");
    navBlock.style.display = "block";
    main.style.filter = "brightness(0.5)";
}

const closeNavigation = () => {
    navOpen.classList.remove("navigation__mobile--hidden");
    navClose.classList.add("navigation__mobile--hidden");
    navBlock.style.display = "none";
    main.style.filter = "none";
}

const clickButton = () => {
    if (navOpen.classList.contains("navigation__mobile--hidden")) {
        closeNavigation();
    } else {
        openNavigation();
    }
}

menu.addEventListener('click', clickButton);
