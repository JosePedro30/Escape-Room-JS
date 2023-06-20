import * as utilizador from "../../models/utilizador.js";

utilizador.admin();
navBar();

function navBar() {
    // Ao iniciar sessão o botão de registar desaparece e aparece o de logout
    let logOut = `<a href="../../views/register.html">Sign In</a>`;
    if (utilizador.isLogged()) {
        logOut = `<a href = "#" id="logout">Logout</a>`;
    }

    // Ao iniciar sessão o botão de login desaparece e aparece o de perfil que redireciona para a página de perfil
    let perfil = `<a href="../../views/login.html">Login</a>`;
    if (utilizador.isLogged()) {
        perfil = `<a href="../../views/perfil.html">Perfil</a>`;
    }

    // LogOut
    const logOutBtn = document.getElementById("logout");
    if (logOutBtn) {
        logOutBtn.addEventListener("click", function (event) {
            event.preventDefault();
            utilizador.logout();
            window.location = "../../index.html";
        });
    }
}

// let logOut = `<a href="../../views/register.html">Sign In</a>`;

// if (utilizador.isLogged()) {
   // logOut = `<a href = "#" id="logout">Logout</a>`;
// }

// let perfil = `<a href="../../views/login.html">Login</a>`;

// if (utilizador.isLogged()) {
   //  perfil = `<a href="../../views/perfil.html">Perfil</a>`;
//}

// const logOutBtn = document.getElementById("logout");
// if (logOutBtn) {
 //   logOutBtn.addEventListener("click", function (event) {
  //      event.preventDefault();
    //    utilizador.logout();
   //     window.location = "../../index.html";
