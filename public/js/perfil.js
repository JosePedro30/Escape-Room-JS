import * as utilizador from "../../models/utilizador.js";

const admin = document.querySelector(".adminMenu")
verificarAdmin();

const modal = document.querySelector(".modal");
const modalContent = document.querySelector(".conteudo-modal");

const utilizadorLogado = utilizador.isLogged();

const nome = document.querySelector("nome");
const email = document.querySelector("email");
const dataNascimento = document.querySelector("idade");
const genero = document.querySelector("genero");
const niveis = document.querySelector("niveis");
const pontos = document.querySelector("pontos");
const picture = document.querySelector("picture");

utilizador.init();
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
admin.addEventListener("click", function () {
    const conteudoAdmin = document.querySelector(".conteudo-admin");
    conteudoAdmin.innerHTML = `
    <div class="funcoesadmin">
        <button type="button" id="utilizadores">Gerir Utilizadores</button>
        <button type="button" id="niveis">Gerir Níveis</button>
        <button type="button" id="perguntas">Gerir Perguntas</button>
    </div>
    <table class="tabela"></table>
    `;

    const btnUtilizadores = document.getElementById("utilizadores");
    btnUtilizadores.addEventListener("click", renderTableUtilizadores);

    const btnNiveis = document.getElementById("niveis");
    btnNiveis.addEventListener("click", renderTableNiveis);

    const btnPerguntas = document.getElementById("perguntas");
    btnPerguntas.addEventListener("click", renderTablePerguntas);
});

function renderTableUtilizadores() {
    const tabela = document.querySelector(".tabela");
    let template = `<thead><tr>
        <th>Nome</th>
        <th>Email</th>
        <th>Data de Nascimento</th>
        <th>Género</th>
        <th>Pontos</th>
        <th>Tipo</th>
        <th>Ações</th>
    </tr></thead><tbody>`;

    utilizador.getUtilizadores().forEach((utilizador) => {
        template += `
        <tr>
            <td>${utilizador.nome}</td>
            <td>${utilizador.email}</td>
            <td>${utilizador.dataNascimento}</td>
            <td>${utilizador.genero}</td>
            <td>${utilizador.pontos}</td>
            <td>${utilizador.tipo}</td>
            <td>
                <button type="button" id="eliminar">Eliminar</button>
            </td>
        </tr>
        `;
    });

    template += `
    <tr>
        <td colspan="7">
            <button type="button" id="adicionar" style="width: 100%">Adicionar</button>;
        </td>
    </tr>
    </tbody>`;

    tabela.innerHTML = template;

    const eliminar = document.querySelectorAll("#eliminar");
    eliminar.forEach((btnEliminar, index) => {
        btnEliminar.addEventListener("click", function () {
            utilizador.utilizadores.pop(index);
            localStorage.setItem("utilizadores", JSON.stringify(utilizador.utilizadores));
            renderTableUtilizadores();
        });
    });

    const adicionar = document.querySelector("adicionar");
    adicionar.addEventListener("click", function () {
        modalContent.innerHTML = `<span class="fechar">&times;</span>
        <form method="get">
        <div class="form-group">
            <input type="text" name="nomeUtilizador" id="novoNome" placeholder="Nome" required>
        </div>

        <div class="form-group">
            <input type="text" name="email" id="novoEmail" placeholder="Email" required>
        </div>

        <div class="form-group">
            <input type="date" name="dataNascimento" id="novaDataNascimento" placeholder="Data de Nascimento" required>
        </div>

        <div class="form-group">
            <select name="genero" id="novoGenero">
                <option value="#" disabled selected>Selecione o seu género</option>
                <option value="masculino">Masculino</option>
                <option value="feminino">Feminino</option>
            </select>
        </div>

        <div class="form-group">
            <input type="password" name="password" id="novaPassword" placeholder="Password" required>
        </div>

        <div class="form-check">
            <input class="form-check-group" type="radio" name="tipo" id="novoTipo" value="utilizador">
            <label class="form-check-label" for="novoTipo">Utilizador</label>
            
            <input class="form-check-group" type="radio" name="tipo" id="novoTipo" value="admin">
            <label class="form-check-label" for="novoTipo">Admin</label>
        </div>

        <div class="form-group">
            <button type="submit" id="adicionar">Adicionar Conta</button>
        </div>
    </form>`;

    modal.style.display = "flex";

    const btnAdicionar = document.querySelector(".form-group button");
    btnAdicionar.addEventListener("click", function (event) {
        event.preventDefault();
        const adicionarNome = document.querySelector("novoNome").value;
        const adicionarEmail = document.querySelector("novoEmail").value;
        const adicionarDataNascimento = document.querySelector("novaDataNascimento").value;
        const adicionarGenero = document.querySelector("novoGenero").value;
        const adicionarPassword = document.querySelector("novaPassword").value;
        const adicionarTipo = document.querySelector('input[name="tipo"]:checked').value;

        console.log(adicionarTipo);

        utilizador.criarUtilizador(utilizador.gerarId, adicionarNome, adicionarEmail, utilizador.calcIdade(adicionarDataNascimento), adicionarGenero, adicionarPassword, adicionarTipo);

        modal.style.display = "none";

        renderTableUtilizadores();
    });

    const fechar = document.querySelector(".fechar");
    fechar.addEventListener("click", () => (modal.style.display = "none"));
    });
}