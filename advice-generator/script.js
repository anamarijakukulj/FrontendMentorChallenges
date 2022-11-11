let adviceNumber = document.querySelector("#number");
let adviceText = document.querySelector("#advice");

const url = "https://api.adviceslip.com/advice";

const fetchAdvice = async () => {
  try {
    const response = await fetch(url);
    const jsonData = await response.json();
    adviceNumber.innerHTML = jsonData.slip.id;
    adviceText.innerHTML = `"${jsonData.slip.advice}"`;
  } catch {
    console.log("It`s not fetched");
  }
};

fetchAdvice();
