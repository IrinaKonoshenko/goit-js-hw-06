const form = document.querySelector(".login-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const { email, password } = event.target.elements;
  if (email.value.length === 0 || password.value.length === 0) {
    alert("Fill in all fields of the form");
  } else {
    const formValue = {
      email: email.value,
      password: password.value,
    };

    console.log(formValue);

    event.target.reset();
  }
});
