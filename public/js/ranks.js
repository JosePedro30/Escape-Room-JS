import * as utilizador from '../../models/utilizador.js';

renderTable();

function renderTable() {
    const table = document.querySelector(".ranking");
    let position = 1;
    let template = `
        <tr>
            <th>Posição</th>
            <th>Nome</th>
            <th>Pontuação</th>
            <th>Tipo</th>
        </tr>`;
    const users = utilizador.getUsers();
    const sortedUsers = users.sort((a, b) => b.pontuacao - a.pontuacao);

    for (const user of sortedUsers) {
        template += `
            <tr>
                <td>${position}</td>
                <td>${user.nome}</td>
                <td>${user.pontuacao}</td>
                <td>${user.tipo}</td>
            </tr>`;
        position++;
    }

    table.innerHTML = template;
}