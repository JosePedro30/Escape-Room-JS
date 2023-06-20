import * as Question from './questoes.js';
import { gerarId } from './utilizador';

Question.init();

export class Room {
    id = 0;
    nome = "";
    descricao = "";
    foto = "";
    icon = "";
    niveis = [];

    constructor(id, nome, descricao, foto, icon, niveis) {
        this.id = id;
        this.nome = nome;
        this.descricao = descricao;
        this.foto = foto;
        (this.icon = icon), (this.niveis = niveis);
    }
}

export let rooms = [];

export function init() {
    rooms = localStorage.rooms ? JSON.parse(localStorage.rooms) : [
        {
            id: 1,
            nome: "Nível 1 - Fácil",
            descricao: "Primeiro nível, com questões fáceis para quem está a começar.",
            foto: "../public/img/sala1.jpg",
            icon: "../public/img/icon-sala1.png",
            niveis: [
                {
                    id: 1,
                    nome: "Nível 1 - Fácil",
                    questoes: [
                        Question.questoes[1],
                        Question.questoes[2],
                        Question.questoes[3],
                        Question.questoes[4],
                        Question.questoes[5],
                    ],
                    coordenadas: "900, 400, 1000, 500",
                },
            ],
        },
        {
            id: 2,
            nome: "Nível 2 - Médio",
            descricao: "Segundo nível, com questões médias para quem já tem alguma experiência.",
            foto: "../public/img/sala2.jpg",
            icon: "../public/img/icon-sala2.png",
            niveis: [
                {
                    id: 2,
                    nome: "Nível 2 - Médio",
                    questoes: [
                        Question.questoes[6],
                        Question.questoes[7],
                        Question.questoes[8],
                        Question.questoes[9],
                        Question.questoes[10],
                    ],
                },
            ],
        },
        {
            id: 3,
            nome: "Nível 3 - Difícil",
            descricao: "Terceiro nível, com questões difíceis para quem já tem muita experiência.",
            foto: "../public/img/sala3.jpg",
            icon: "../public/img/icon-sala3.png",
            niveis: [
                {
                    id: 3,
                    nome: "Nível 3 - Difícil",
                    questoes: [
                        Question.questoes[11],
                        Question.questoes[12],
                        Question.questoes[13],
                        Question.questoes[14],
                        Question.questoes[15],
                    ],
                },
            ],
        },
    ];

    localStorage.setItem("rooms", JSON.stringify(rooms));
}