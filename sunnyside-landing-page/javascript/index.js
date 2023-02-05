const button = document.querySelector("#mobile-menu");
const navigation = document.querySelector("#mobile-navigation");

const openNavigation = () => {
    navigation.style.display = "block";
    button.style.opacity = "0.5";
}

const closeNavigation = () => {
    navigation.style.display = "none";
    button.style.opacity = "1";
}

const clickButton = () => {
    if(navigation.style.display = "block") {
        closeNavigation();
    } 

    if(navigation.style.display = "none") {
        openNavigation();
    }
}

button.addEventListener("click", clickButton);
