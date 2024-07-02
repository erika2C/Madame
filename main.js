const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-pergunta");
const caixaAlternativas = document.querySelector(".caixa-alternativa");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado = "É possível uma música ajudar a combater o Racismo? ",
        alternativas: [
            {
                texto: "Sim.",
                afirmação: "afirmção"
            },
            {
                texto: "Não.",
                afirmação: "afirmação"
            }
        ]
    },
    {
        enunciado = "Os cantores demonstra Discrimina seus fãs?E se Sim eles se Responsabilizam por isso? ",
        alternativas: [
            {
                texto: "Não.",
                afirmação: "afirmção"
            },
            {
                texto: "Sim.",
                afirmação: "afirmação"
            }
        ]
    },
    {
        enunciado = "As pessoas ajuda ou dá auxílio no resgates aos animais extintos? ",
        alternativas: [
            {
                texto: "Sim.",
                afirmação: "afirmção"
            },
            {
                texto: "Não.",
                afirmação: "afirmação"
            }
        ]
    }
]
