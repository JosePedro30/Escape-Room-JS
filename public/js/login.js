import * as utilizador from "../../models/utilizador.js";

utilizador.init();

// Login
// Ao fazer login tem que obdecer à navbar.js
function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (utilizador.login(email, password)) {
        alert("Login efetuado com sucesso!");
        window.location = "../../index.html";
    } else {
        alert("Email ou password incorretos!");
    }

    // Obdecer à navbar.js
    navBar();
}

// Evento
document.getElementById("login").addEventListener("submit", function (event) {
    event.preventDefault();
    login();
});