const inputEl = document.querySelector("#font-size-control");

const spanEl = document.querySelector("#text");

inputEl.addEventListener("input", (event) => {
  const value = event.target.value;
  spanEl.style.fontSize = value + "px";
});
