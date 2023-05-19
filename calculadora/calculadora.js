//CALCULADORA
// Selecionando os elementos HTML necessários
const tela = document.querySelector("#resultado");
const botoes = document.querySelectorAll(".botoes button");

// Inicializando a variável que armazenará o valor atual da operação
let valorAtual = "";

// Função para atualizar a tela da calculadora
function atualizarTela(valor) {
  tela.value = valor;
}

// Percorrendo todos os botões e adicionando um evento de clique
botoes.forEach((botao) => {
  botao.addEventListener("click", () => {
    // Obtendo o valor do botão clicado
    const valorBotao = botao.innerText;

    // Verificando qual botão foi clicado e realizando a operação correspondente
    if (valorBotao === "C") {
      valorAtual = "";
      atualizarTela("");
    } else if (valorBotao === "=") {
      atualizarTela(eval(valorAtual));
    } else {
      valorAtual += valorBotao;
      atualizarTela(valorAtual);
    }
  });
});
