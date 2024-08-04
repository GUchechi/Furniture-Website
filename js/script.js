let shoppingcart = document.querySelector(".cart-items-container");

document.querySelector("#cart-btn").onclick = () => {
  shoppingcart.classList.add("active");
};

document.querySelector("#close").onclick = () => {
  shoppingcart.classList.remove("active");
};
