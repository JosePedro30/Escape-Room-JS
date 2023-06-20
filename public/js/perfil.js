import * as utilizador from "../../models/utilizador.js";

const admin = document.querySelector(".adminMenu")
verificarAdmin();

const modal = document.querySelector(".modal");
const modalContent = document.querySelector(".conteudo-modal");

const utilizadorLogado = JSON.parse(localStorage.getItem("utilizadorLogado"));

const nome = document.querySelector("nome");
const email = document.querySelector("email");
const dataNascimento = document.querySelector("idade");
const genero = document.querySelector("genero");
const niveis = document.querySelector("niveis");
const pontos = document.querySelector("pontos");
const picture = document.querySelector("picture");

utilizador.admin();
mostrarPerfil();

function mostrarPerfil() {
    if (utilizadorLogado) {
        const Perfil = utilizador.getLoggedUser();
        nome.innerHTML = "Nome: " + Perfil.nome;
        email.innerHTML = "Email: " + Perfil.email;
        dataNascimento.innerHTML = "Idade: " + Perfil.dataNascimento;
        genero.innerHTML = "Género: " + Perfil.genero;
        niveis.innerHTML = "Níveis: " + Perfil.niveis;
        pontos.innerHTML = "Pontos: " + Perfil.pontos;
        picture.src = Perfil.picture;
    }
}

function verificarAdmin() {
    if (utilizador.getLoggedUser().tipo === "utilizador") {
        admin.style.display = "none";
    }
    admin.style.display = "block";
}

// Botão Editar Perfil
const btnEditar = document.querySelector(".editPerfil");
btnEditar.addEventListener("click", function () {
    conteudoModal.innerHTML = `
    <h2>Editar Perfil</h2>
    <form action="">
        <label for="nome">Nome:</label>
        <input type="text" id="nome" value="${utilizadorLogado.nome}">

        <label for="email">Email:</label>
        <input type="text" id="email" value="${utilizadorLogado.email}">

        <label for="dataNascimento">Data de Nascimento:</label>
        <input type="date" id="dataNascimento" value="${utilizadorLogado.dataNascimento}">

        <label for="genero">Género:</label>
        <input type="text" id="genero" value="${utilizadorLogado.genero}">

        <label for="password">Password:</label>
        <input type="password" id="password" value="${utilizadorLogado.password}">

        <input type="submit" value="Editar" id="editar">
    </form>
    `;
    modal.style.display = "flex";

    const btnEditar = document.querySelector("#editar");
    btnEditar.addEventListener("click", function () {
        const nome = document.querySelector("#nome").value;
        const email = document.querySelector("#email").value;
        const dataNascimento = document.querySelector("#dataNascimento").value;
        const genero = document.querySelector("#genero").value;
        const password = document.querySelector("#password").value;

        utilizador.editarPerfil(nome, email, dataNascimento, genero, password);

        mostrarPerfil();
        modal.style.display = "none";
    });
});

// Botão Admin