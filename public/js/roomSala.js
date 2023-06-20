import * as room from '../../models/room.js';
import * as tempo from '../../models/temporizador.js';
import * as utilizador from '../../models/utilizador.js';

room.init();
const rooms = room.rooms;

renderCards();

function renderCards() {
    let html = "";
    
    for (const room of rooms) {
        html += `
        <div class="card">
            <img src="${room.foto}" alt="sala" />
            <div class="card-info">
                <h2>${room.nome}</h2>
                <p>${room.descricao}</p>
                <button id="${room.id}" class="btn btn-primary">Entrar</button>
            </div>
        </div>`;
    }

    const container = document.querySelector(".container");
    container.innerHTML = html;

}