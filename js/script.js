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

let registerbtn = document.querySelector(".account-form .register-btn");
let loginbtn = document.querySelector(".account-form .login-btn");

registerbtn.onclick = () => {
  registerbtn.classList.add("active");
  loginbtn.classList.remove("active");
  document.querySelector(".account-form .login-form").classList.remove("active");
  document.querySelector(".account-form .register-form").classList.add("active");
};

loginbtn.onclick = () => {
    registerbtn.classList.remove("active");
    loginbtn.classList.add("active");
    document.querySelector(".account-form .login-form").classList.add("active");
    document.querySelector(".account-form .register-form").classList.remove("active");
  };
