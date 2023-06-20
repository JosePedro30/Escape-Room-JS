// Classe Utilizador
export class Utilizador {
    id = 0;
    nome = "";
    email = "";
    password = "";
    dataNascimento = "";
    genero = "";
    picture = "";
    tipo = "";
    pontos = 0;

    constructor(id, nome, email, password, dataNascimento, genero) {
        this.id = id;
        this.nome = nome;
        this.email = email;
        this.password = password;
        this.dataNascimento = dataNascimento;
        this.genero = genero;
        this.tipo = "utilizador";
        this.picture = "../public/img/utilizador.png";
    }

    // Métodos
    alterarPassword(password) {
        this.antigaPassword = password;
    }
}

// LocalStorage - Utilizadores (Array)
export let utilizadores = []

// LocalStorage - Admin
export function admin() {
    utilizadores = localStorage.utilizadores ? JSON.parse(localStorage.utilizadores) : [
        {
            id: 1,
            nome: "admin",
            email: "admin@email.com",
            password: "admin",
            dataNascimento: calcIdade("12-05-2003"),
            genero: "Masculino",
            tipo: "admin",
            picture: "../public/img/utilizador.png",
            pontos: 100,
        },
        {
            id: 2,
            nome: "utilizador",
            email: "utilizador@email.com",
            password: "utilizador",
            dataNascimento: calcIdade("13-04-1978"),
            genero: "Masculino",
            tipo: "utilizador",
            picture: "../public/img/utilizador.png",
            pontos: 0,
        }
    ];

    localStorage.setItem("utilizadores", JSON.stringify(utilizadores));
}

export function gerarId(id) {
    id = utilizadores.length + 1;
    return id;
}

// Criar Utilizador
export function criarUtilizador(id, nome, email, password, dataNascimento, genero, tipo = "admin") {
    if (tipo !== "admin") {
        tipo = "utilizador";
    }
    utilizadores.push(new Utilizador(gerarId(id), nome, email, password, dataNascimento, genero, tipo));
    localStorage.utilizador = JSON.stringify(utilizador);
}

// Login
export function login(email, password) {
    let username = utilizadores.find(
        (utilizador) => utilizador.email === email && utilizador.password === password
    );
    if (username) {
        sessionStorage.setItem("utilizador", JSON.stringify(username));
        return true;
    }
    return false;
}

// Logout
export function logout() {
    sessionStorage.removeItem("utilizador");
}

// Calcular Idade
export function calcIdade(dataNascimento) {
    const dataAtual = new Date();
    const dataNasc = new Date(dataNascimento);
    let idade = dataAtual.getFullYear() - dataNasc.getFullYear();

    const mes = dataAtual.getMonth();
    const mesNasc = dataNasc.getMonth();
    const dia = dataAtual.getDate()
    const diaNasc = dataNasc.getDate();

    if (mes < mesNasc || (mes === mesNasc && dia < diaNasc)) {
        idade--;
    }

    return idade;
}

// Apagar Utilizador
export function apagarUtilizador(name) {
    utilizadores = utilizadores.filter((utilizador) => utilizador.nome !== name);
    localStorage.utilizadores = JSON.stringify(utilizadores);
}

// Verifica se o utilizador está logado
export function isLogged() {
    return localStorage.getItem("utilizador") ? true : false;
}

// Retorna o utilizador logado
export function getLoggedUser() {
    return JSON.parse(localStorage.getItem("utilizador"));
}

export function exportaUtilizadores() {
    return utilizadores;
}