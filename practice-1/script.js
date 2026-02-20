const colors = ['#FF5733', '#33FF57', '#3357FF', '#F333FF'];

const button = document.getElementById("btn");
const colorSpan = document.getElementById("colorCode");

button.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * colors.length);
  const randomColor = colors[randomIndex];

  document.body.style.backgroundColor = randomColor;
  colorSpan.textContent = randomColor;
});