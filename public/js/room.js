import * as room from '../../models/room.js';

room.init();

const rooms = room.rooms.filter((item) => item.id === room.id);

const h2 = document.querySelector(".container-top h2");
h2.innerHTML = rooms[0].nome;

renderSala();

function renderSala() {
    let imagemContainer = document.querySelector(".imagem-container");
    let imagem = `<img src="${rooms[0].foto}" alt="sala1" usemap="#sala1" class="img-sala1"/>`;

    imagem += `<map name="sala1">`;

    for (const item of rooms[0].objetos) {
        imagem += `<area shape="rect" coords="${item.coords}" href="${item.href}" alt="${item.alt}">`;
    }

    imagem += `</map>`;
    imagemContainer.innerHTML = imagem;
}