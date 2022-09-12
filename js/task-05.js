const input = document.querySelector("#name-input");

const span = document.querySelector("#name-output");

input.addEventListener("input", (event) => {
  const value = event.target.value;
  if (value === "") {
    span.textContent = "Anonymous";
  } else {
    span.textContent = value;
  }
});
