const featureNav = document.querySelector("#feature");
const companyNav = document.querySelector("#company");
const featureDrop = document.querySelector("#featureDrop");
const companyDrop = document.querySelector("#companyDrop");
const arrowUp = document.querySelectorAll(".arrow_up");
const arrowDown = document.querySelectorAll(".arrow_down");

const openFeature = (drop, num) => {
  drop.classList.add("active");
  arrowDown[num].style.display = "none";
  arrowUp[num].style.display = "inline";
};

const controlDrop = (drop, num) => {
  if (drop.classList.contains("active")) {
    drop.classList.remove("active");
    arrowDown[num].style.display = "inline";
    arrowUp[num].style.display = "none";
  } else {
    openFeature(drop, num);
  }
};

const controlFeature = () => {
  controlDrop(featureDrop, 0);
};

const controlCompany = () => {
  controlDrop(companyDrop, 1);
};

featureNav.addEventListener("click", controlFeature);
companyNav.addEventListener("click", controlCompany);

featureNav.addEventListener("hover", controlFeature);
companyNav.addEventListener("hover", controlCompany);
