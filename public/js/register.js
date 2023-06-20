import * as utilizador from "../../models/utilizador.js";

utilizador.init();

// Registar utilizador
function registar() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const genero = document.getElementById("genero").value;
    const idade = document.getElementById("dataNascimento").value;
    const password = document.getElementById("password").value;
    const confirmaPassword = document.getElementById("confirmar-password").value;

    if (password !== confirmaPassword) {
        alert("As passwords não coincidem!");
        return;
    }

    if (utilizador.utilizadores.find((utilizador) => utilizador.email === email)) {
        alert("O email já existe!");
        return;
    }

    utilizador.criarUtilizador(utilizador.gerarId(), name, email, genero, utilizador.calcIdade(idade), password);

    alert("Utilizador registado com sucesso!");

    // Ao registar, redireciona para a página de login
    window.location = "../../views/login.html";
}

// Evento
document.getElementById("registar").addEventListener("submit", function (event) {
    event.preventDefault();
    registar();
});