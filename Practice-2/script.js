const input = document.getElementById("textInput");
const counter = document.getElementById("counter");
const submitBtn = document.getElementById("submitBtn");

const maxLength = 20;

input.addEventListener("input", () => {
  const currentLength = input.value.length;

  counter.textContent = currentLength;

  if (currentLength > maxLength) {
    counter.style.color = "red";
    submitBtn.disabled = true;
  } else {
    counter.style.color = "black";
    submitBtn.disabled = false;
  }
});