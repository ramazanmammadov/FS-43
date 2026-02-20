const products = [
  { id: 1, name: "Keyboard", price: 50 },
  { id: 2, name: "Mouse", price: 30 },
  { id: 3, name: "Monitor", price: 300 },
  { id: 4, name: "Headphones", price: 80 },
];

const productList = document.getElementById("productList");
const calculateBtn = document.getElementById("calculateBtn");
const totalSpan = document.getElementById("total");


products.forEach(product => {
  const wrapper = document.createElement("div");
  wrapper.classList.add("product-item");

  wrapper.innerHTML = `
    <label>
      <input type="checkbox" value="${product.id}" />
      ${product.name} - $${product.price}
    </label>
  `;

  productList.appendChild(wrapper);
});


calculateBtn.addEventListener("click", () => {
  const checkboxes = document.querySelectorAll(
    "#productList input[type='checkbox']:checked"
  );

  const selectedIds = Array.from(checkboxes).map(cb => Number(cb.value));

  const total = products
    .filter(product => selectedIds.includes(product.id))
    .reduce((sum, product) => sum + product.price, 0);

  totalSpan.textContent = total;
});