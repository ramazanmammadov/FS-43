const colors = ['#FF5733', '#33FF57', '#3357FF', '#F333FF'];

const btn = document.getElementById("btn");
const span = document.getElementById("colorCode");

btn.onclick = function () {
  const index = Math.floor(Math.random() * 4);
  const color = colors[index];

  document.body.style.backgroundColor = color;
  span.innerText = color;
};