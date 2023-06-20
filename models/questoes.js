export class Question {
    id = "";
    nome = "";
    imagem = "";
    respostas = [];
    respostaCerta = "";
    resolvidas = 0;

    constructor(id, nome, imagem, respostas, respostaCerta, resolvidas = 0) {
        this.id = id;
        this.nome = nome;
        this.respostas = respostas;
        this.respostaCerta = respostaCerta;
        this.resolvidas = resolvidas;
    }
}

export let questoes = [];

export function init() {
    questoes = localStorage.questoes ? JSON.parse(localStorage.questoes) : [
        // Nivel 1
        {
            id: 1,
            nome: "What is a correct syntax to output 'Hello World' in Python?",
            respostas: ["print('Hello World')", "echo 'Hello World'", "echo ('Hello World');", "p('Hello World')"],
            respostaCerta: 0,
            resolvidas: 0,
        },
        {
            id: 2,
            nome: "How do you insert COMMENTS in Python code?",
            respostas: ["#This is a comment", "//This is a comment", "/*This is a comment*/"],
            respostaCerta: 0,
            resolvidas: 0,
        },
        {
            id: 3,
            nome: "Which one is NOT a legal variable name?",
            respostas: ["my_var", "my-var", "myVar", "MYVAR"],
            respostaCerta: 1,
            resolvidas: 0,
        },
        {
            id: 4,
            nome: "How do you create a variable with the numeric value 5?",
            respostas: ["x = 5", "x = int(5)", "Both the other answers are correct"],
            respostaCerta: 2,
            resolvidas: 0,
        },
        {
            id: 5,
            nome: "What is the correct file extension for Python files?",
            respostas: [".pyt", ".pyth", ".pt", ".py"],
            respostaCerta: 3,
            resolvidas: 0,
        },
        // Nivel 2
        {
            id: 6,
            nome: "What is a correct syntax to return the first character in a string?", 
            respostas: ["x = 'Hello'[0]", "x ='Hello'.sub(0,1)", "x = sub('Hello',0,1)"],
            respostaCerta: 0,
            resolvidas: 0,
        },
        {
            id: 7,
            nome: "Which method can be used to remove any whitespace from both the beginning and the end of a string?",
            respostas: ["len()", "ptrim()", "trim()", "strip()"],
            respostaCerta: 3,
            resolvidas: 0,
        },
        {
            id: 8,
            nome: "Which method can be used to return a string in upper case letters?",
            respostas: ["toUpperCase()", "upperCase()", "uppercase()", "upper()"],
            respostaCerta: 3,
            resolvidas: 0,
        },
        {
            id: 9,
            nome: "Which method can be used to replace parts of a string?",
            respostas: ["replaceString()", "replace()", "switch()", "replace()"],
            respostaCerta: 3,
            resolvidas: 0,
        },
        {
            id: 10,
            nome: "Which of these collections defines a LIST?",
            respostas: ["{'apple', 'banana', 'cherry'}",('apple', 'banana', 'cherry'), ['apple', 'banana', 'cherry']],
            respostaCerta: 2,
            resolvidas: 0,
        },
        // Nivel 3
        {
            id: 11,
            nome: "Which of these collections defines a TUPLE?",
            respostas: ["{'apple', 'banana', 'cherry'}",('apple', 'banana', 'cherry'), ['apple', 'banana', 'cherry']],
            respostaCerta: 1,
            resolvidas: 0,
        },
        {
            id: 12,
            nome: "Which of these collections defines a SET?",
            respostas: ["{'apple', 'banana', 'cherry'}",('apple', 'banana', 'cherry'), ['apple', 'banana', 'cherry']],
            respostaCerta: 0,
            resolvidas: 0,
        },
        {
            id: 13,
            nome: "Which of these collections defines a DICTIONARY?",
            respostas: ["{'apple', 'banana', 'cherry'}",('apple', 'banana', 'cherry'), ['apple', 'banana', 'cherry']],
            respostaCerta: 2,
            resolvidas: 0,
        },
        {
            id: 14,
            nome: "Which collection is ordered, changeable, and allows duplicate members?",
            respostas: ["Tuple", "Set", "Dictionary", "List"],
            respostaCerta: 3,
            resolvidas: 0,
        },
        {
            id: 15,
            nome: "Which collection does not allow duplicate members?",
            respostas: ["Tuple", "Set", "Dictionary", "List"],
            respostaCerta: 1,
            resolvidas: 0,
        },
    ];
    localStorage.setItem("questoes", JSON.stringify(questoes));
}