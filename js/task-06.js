const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("blur", (event) => {
  inputEl.classList.remove("invalid");
  inputEl.classList.remove("valid");
  const value = event.target.value;
  const max = event.target.getAttribute("data-length");
  if (value.length == max) {
    inputEl.classList.add("valid");
  } else {
    inputEl.classList.add("invalid");
  }
});
