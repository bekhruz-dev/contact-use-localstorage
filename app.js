let sendButton = document.getElementById("send");
let resetButton = document.getElementById("reset");
let form = document.getElementById("form");

form.addEventListener("click", (e) => {
  e.preventDefault();
});

resetButton.addEventListener("click", () => {
  let name = document.getElementById("name");
  let email = document.getElementById("email");
  let message = document.getElementById("message");

  name.value = "";
  email.value = "";
  message.value = "";
});

sendButton.addEventListener("click", () => {
  let name = document.getElementById("name");
  let email = document.getElementById("email");
  let message = document.getElementById("message");

  name = name.value;
  email = email.value;
  message = message.value;

  localStorage.setItem("name", name);
  localStorage.setItem("email", email);
  localStorage.setItem("message", message);
});
