const span = document.querySelector("#value");
let counterValue = 0;

const buttonPlus = document.querySelector("[data-action='increment']");

buttonPlus.addEventListener("click", () => {
  counterValue = counterValue + 1;
  span.textContent = counterValue;
});

const buttonMinus = document.querySelector("[data-action='decrement']");

buttonMinus.addEventListener("click", () => {
  counterValue = counterValue - 1;
  span.textContent = counterValue;
});
