//CALCULADORA
// Obtém a referência para o elemento de resultado
const resultado = document.getElementById('resultado');

// Obtém as referências para os botões
const botao1 = document.getElementById('botao1');
const botao2 = document.getElementById('botao2');
const botao3 = document.getElementById('botao3');
const botao4 = document.getElementById('botao4');
const botao5 = document.getElementById('botao5');
const botao6 = document.getElementById('botao6');
const botao7 = document.getElementById('botao7');
const botao8 = document.getElementById('botao8');
const botao9 = document.getElementById('botao9');
const botao0 = document.getElementById('botao0');
const botaoSoma = document.getElementById('botaoSoma');
const botaoSubtracao = document.getElementById('botaoSubtracao');
const botaoMultiplicacao = document.getElementById('botaoMultiplicacao');
const botaoDivisao = document.getElementById('botaoDivisao');
const botaoPorcentagem = document.getElementById('botaoPorcentagem');
const botaoLimpar = document.getElementById('botaoLimpar');
const botaoIgual = document.getElementById('botaoIgual');

// Variáveis para armazenar os operandos e operador
let operando1 = '';
let operando2 = '';
let operador = '';

// Função para limpar a calculadora
function limparCalculadora() {
    resultado.value = '';
    operando1 = '';
    operando2 = '';
    operador = '';
}

// Função para atualizar o valor do resultado
function atualizarResultado(valor) {
    resultado.value = valor;
}

// Adiciona os listeners de evento aos botões numéricos
botao0.addEventListener('click', function () {
    resultado.value += '0';
});

botao1.addEventListener('click', function () {
    resultado.value += '1';
});

botao2.addEventListener('click', function () {
    resultado.value += '2';
});

botao3.addEventListener('click', function () {
    resultado.value += '3';
});

botao4.addEventListener('click', function () {
    resultado.value += '4';
});

botao5.addEventListener('click', function () {
    resultado.value += '5';
});

botao6.addEventListener('click', function () {
    resultado.value += '6';
});

botao7.addEventListener('click', function () {
    resultado.value += '7';
});

botao8.addEventListener('click', function () {
    resultado.value += '8';
});

botao9.addEventListener('click', function () {
    resultado.value += '9';
});

// Adiciona os listeners de evento aos botões de operação
botaoSoma.addEventListener('click', function () {
    operando1 = parseFloat(resultado.value);
    operador = '+';
    resultado.value = '';
});

botaoSubtracao.addEventListener('click', function () {
    operando1 = parseFloat(resultado.value);
    operador = '-';
    resultado.value = '';
});

botaoMultiplicacao.addEventListener('click', function () {
    operando1 = parseFloat(resultado.value);
    operador = '*';
    resultado.value = '';
});

botaoDivisao.addEventListener('click', function () {
    operando1 = parseFloat(resultado.value);
    operador = '/';
    resultado.value ='';
});

botaoPorcentagem.addEventListener('click', function () {
    operando1 = parseFloat(resultado.value);
    operador = '%';
    resultado.value = '';
});

botaoLimpar.addEventListener('click', function () {
    limparCalculadora();
});

botaoIgual.addEventListener('click', function () {
    operando2 = parseFloat(resultado.value);
    let resultadoFinal;

    // Realiza a operação matemática com base no operador selecionado
    switch (operador) {
        case '+':
            resultadoFinal = operando1 + operando2;
            break;
        case '-':
            resultadoFinal = operando1 - operando2;
            break;
        case '*':
            resultadoFinal = operando1 * operando2;
            break;
        case '/':
            resultadoFinal = operando1 / operando2;
            break;
        case '%':
            resultadoFinal = (operando1 / 100) * operando2;
            break;
        default:
            return;
    }

    // Atualiza o valor do resultado com o resultado final
    atualizarResultado(resultadoFinal);

    // Limpa as variáveis de operando e operador
    operando1 = '';
    operando2 = '';
    operador = '';
});
