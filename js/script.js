let shoppingcart = document.querySelector(".cart-items-container");

document.querySelector("#cart-btn").onclick = () => {
  shoppingcart.classList.add("active");
};

document.querySelector("#close").onclick = () => {
  shoppingcart.classList.remove("active");
};

// account form
let accountForm = document.querySelector(".account-form");

document.querySelector("#account-btn").onclick = () => {
  accountForm.classList.add("active");
};

document.querySelector("#close-form").onclick = () => {
  accountForm.classList.remove("active");
};
