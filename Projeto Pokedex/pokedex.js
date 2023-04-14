const url = 'https://pokeapi.co/api/v2/pokemon/';
let currentPokemonId = 1; // número do pokemon atual
let currentPokemonData; // dados do pokemon atual

const informacoes = document.getElementById('informacoes');
const exibicao = document.getElementById('exibicao');
const nomePokemon = document.getElementById('nome-pokemon');
const voltarBtn = document.getElementById('voltar');
const proximoBtn = document.getElementById('proximo');
const pesquisaInput = document.getElementById('inputPesquisa');
const pesquisaBtn = document.getElementById('pesquisaBtn');
const cancelarBtn = document.getElementById('cancelarBtn');
const ligarDesligarBtn = document.querySelector('#btnLigarDesligar button');
const corpoPokedex = document.getElementById('corpoPokedex');
const circulo = document.getElementById("circulo");

function getInformation(id) {
  fetch(url + id)
    .then(response => response.json())
    .then(data => {
      currentPokemonData = data;
      exibirPokemon();
    })
    .catch(err => console.error(err));
}

function exibirPokemon() {
  informacoes.innerHTML = `
    <p><strong>Tipo:</strong> ${currentPokemonData.types.map(type => type.type.name).join(', ')}</p>
    <p><strong>Habilidades:</strong> ${currentPokemonData.abilities.map(ability => ability.ability.name).join(', ')}</p>
    <p><strong>Peso:</strong> ${currentPokemonData.weight / 10} kg</p>
    <p><strong>Altura:</strong> ${currentPokemonData.height / 10} m</p>
  `;
  exibicao.innerHTML = `
    <img id="pokemon-img" src="${currentPokemonData.sprites.front_default}" alt="${currentPokemonData.name}">
  `;
  nomePokemon.innerHTML = `
  <h2>${currentPokemonData.name}</h2>
  `;
}

function proximoPokemon() {
  currentPokemonId++;
  if (currentPokemonId > 898) {
    currentPokemonId = 1;
  }
  getInformation(currentPokemonId);
}

function voltarPokemon() {
  currentPokemonId--;
  if (currentPokemonId < 1) {
    currentPokemonId = 898;
  }
  getInformation(currentPokemonId);
}

function pesquisarPokemon() {
  const pesquisa = pesquisaInput.value.toLowerCase().trim();
  if (!pesquisa) {
    return;
  }
  fetch(url + pesquisa)
    .then(response => response.json())
    .then(data => {
      currentPokemonData = data;
      currentPokemonId = data.id;
      exibirPokemon();
    })
    .catch(err => console.error(err));
  pesquisaInput.value = '';
}

function cancelarPesquisa() {
  pesquisaInput.value = '';
  currentPokemonId = 1;
  getInformation(currentPokemonId);
}

function ligarDesligar() {
  corpoPokedex.classList.toggle('corpoPokedex-desligado');
  if (corpoPokedex.classList.contains('corpoPokedex-desligado')) {
    currentPokemonId = 1;
    informacoes.innerHTML = '';
    exibicao.innerHTML = '';
    nomePokemon.innerHTML = '';
    document.getElementById('circulo').style.backgroundColor = 'red';
    document.getElementById('informacoes').style.backgroundColor = 'black'
    document.getElementById('exibicao').style.backgroundColor = 'black';
    document.getElementById('nome-pokemon').style.backgroundColor = 'black';
  } else {
    getInformation(currentPokemonId);
    document.getElementById('circulo').style.backgroundColor = 'chartreuse';
    document.getElementById('informacoes').style.backgroundColor = 'lightblue'
    document.getElementById('exibicao').style.backgroundColor = 'white';
    document.getElementById('nome-pokemon').style.backgroundColor = 'white';
  }
}

voltarBtn.addEventListener('click', voltarPokemon);
proximoBtn.addEventListener('click', proximoPokemon);
pesquisaBtn.addEventListener('click', pesquisarPokemon);
cancelarBtn.addEventListener('click', cancelarPesquisa);
ligarDesligarBtn.addEventListener('click', ligarDesligar);