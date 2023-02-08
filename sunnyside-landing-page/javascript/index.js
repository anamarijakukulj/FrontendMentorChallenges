const button = document.querySelector("#mobile-menu");
const navigation = document.querySelector("#mobile-navigation");

const openNavigation = () => {
  navigation.classList.add("nav__open");
  button.classList.add("opacity");
};

const closeNavigation = () => {
  navigation.classList.remove("nav__open");
  button.classList.remove("opacity");
};

const clickButton = () => {
  if (navigation.classList.contains("nav__open")) {
    closeNavigation();
  } else {
    openNavigation();
  }
};

button.addEventListener("click", clickButton);
