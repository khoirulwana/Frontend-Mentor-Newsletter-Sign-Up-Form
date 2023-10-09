const mainContainerEl = document.getElementById("main-container");
const leftEl = document.getElementById("left");
const rightEl = document.getElementById("right");

const userEmailEl = document.getElementById("user-email");
const errorMessageEl = document.getElementById("error-message");
const emailInputEl = document.getElementById("email");
const submitButtonEl = document.getElementById("submit-button");

const subscribedMessageEl = document.getElementById("subscribed-message");
const dismissButtonEl = document.getElementById("dismiss-button");

function formSuccess(email) {
  subscribedMessageEl.classList.add("active");
  mainContainerEl.classList.add("success");
  leftEl.style.display = "none";
  rightEl.style.display = "none";
  userEmailEl.innerText = email;
  emailInputEl.value = "";
  errorMessageEl.classList.remove("active");
}

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

submitButtonEl.addEventListener("click", (e) => {
  e.preventDefault();
  const email = emailInputEl.value.trim();

  if (validateEmail(email)) {
    formSuccess(email);
  } else {
    errorMessageEl.classList.add("active");
    emailInputEl.classList.add("active");
  }
});

dismissButtonEl.addEventListener("click", () => {
  subscribedMessageEl.classList.remove("active");
  mainContainerEl.classList.remove("success");
  leftEl.style.display = "block";
  rightEl.style.display = "block";
});
