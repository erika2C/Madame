const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-pergunta");
const caixaAlternativas = document.querySelector(".caixa-alternativa");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "É possível uma música ajudar a combater o Racismo? ",
        alternativas: [
            {
                texto: "Sim.",
                afirmação: "A música sempre foi um dos recursos mais utilizados para denunciar o racismo"
            },
            {
                texto: "Não.",
                afirmação: "A música acaba piorando o Racismo"
            }
        ]
    },
    {
        enunciado: "Os cantores discriminam seus fãs?E se Sim eles se Responsabilizam por isso? ",
        alternativas: [
            {
                texto: "Não.",
                afirmação: "Os cantores demonstra respeito ao seus fãs"
            },
            {
                texto: "Sim.",
                afirmação: "Eles não demonstra Respeito aos seus fãs"
            }
        ]
    },
    {
        enunciado: "As pessoas ajuda ou dá auxílio no resgates aos animais extintos? ",
        alternativas: [
            {
                texto: "Sim.",
                afirmação: "Muitas pessoas ajudam no resgate, tanto doando como se voluntariando"
            },
            {
                texto: "Não.",
                afirmação: "Muitas pessoas ajudam na extinção deles por meio do abuso animal"
            }
        ]
    }
];

let atual = 0;
let perguntaAtul;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[Atual];
    caixaPerguntas.textContent = perguntaAtul.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtul.alternativa) {
    const botaoAlternativas = document.createElement("button");
    botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
    caixaAlternativas.appendChild(botaoAlternativas);
    }
}
