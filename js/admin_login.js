const loginForm = document.querySelector(".login__form");
const loginEmail = document.querySelector(".login__email");
const loginRassword = document.querySelector(".login__password");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  if(loginEmail.value.trim() && loginRassword.value.trim()) {
    const formData = new FormData(loginForm);

    fetch("https://shfe-diplom.neto-server.ru/login", {
      method: "POST",
      body: formData
    })
    .then(response => response.json())
    .then(function(data) {
      console.log(data);

      if(data.success === true) {
        document.location="./admin-index.html";
      } else {
        alert("Неверный логин/пароль!");
      }
    })
  }
})