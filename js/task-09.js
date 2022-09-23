function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyEl = document.querySelector("body");

const btn = document.querySelector(".change-color");

const spanEl = document.querySelector(".color");

btn.addEventListener("click", (event) => {
  const randomColor = getRandomHexColor();
  bodyEl.style.background = randomColor;
  spanEl.textContent = randomColor;
});
