//RELÓGIO
// obtém a referência para o elemento de relógio
let relogio = document.getElementById('relogio');

function updateTime() {
	// cria um objeto de data
	let now = new Date();

	// obtém as horas, minutos e segundos
	let hours = now.getHours();
	let minutes = now.getMinutes();
	let seconds = now.getSeconds();

	// formata as horas, minutos e segundos
	hours = hours < 10 ? '0' + hours : hours;
	minutes = minutes < 10 ? '0' + minutes : minutes;
	seconds = seconds < 10 ? '0' + seconds : seconds;

	// atualiza o conteúdo do relógio digital
	relogio.textContent = hours + ':' + minutes + ':' + seconds;
}

// chama a função updateTime a cada segundo
setInterval(updateTime, 1000);


//CALENDÁRIO
// Obtém a data atual
let dataAtual = new Date();

// Define as variáveis para o ano, mês e dia atual
let anoAtual = dataAtual.getFullYear();
let mesAtual = dataAtual.getMonth();
let diaAtual = dataAtual.getDate();

// Obtém o número de dias no mês atual
let diasMes = new Date(anoAtual, mesAtual + 1, 0).getDate();

// Obtém a tabela e o corpo da tabela para o calendário
let tabelaCalendario = document.querySelector('#calendario table');
let corpoTabelaCalendario = document.querySelector('#calendario table tbody');

// Obtém a linha do cabeçalho da tabela
let linhaCabecalho = tabelaCalendario.querySelector('thead tr');

// Define o texto do cabeçalho da tabela
document.querySelector('#mes-ano').textContent = obterNomeMes(mesAtual) + ' ' + anoAtual;

// Cria as células para cada dia do mês e adiciona à tabela
let dia = 1;
for (let i = 0; i < 6; i++) {
  // Cria uma nova linha para a tabela
  let novaLinha = document.createElement('tr');

  // Cria as células para cada dia da semana
  for (let j = 0; j < 7; j++) {
    // Cria uma nova célula
    let novaCelula = document.createElement('td');

    // Verifica se a célula é para um dia do mês atual
    if (i === 0 && j < new Date(anoAtual, mesAtual, 1).getDay()) {
      // Se a célula está antes do primeiro dia do mês, não exibe nada
    } else if (dia <= diasMes) {
      // Define o texto da célula
      novaCelula.textContent = dia;

      // Adiciona a classe "dia-atual" se o dia for o dia atual
      if (dia === diaAtual && mesAtual === dataAtual.getMonth() && anoAtual === dataAtual.getFullYear()) {
        novaCelula.classList.add('dia-atual');
      }

      // Incrementa o dia atual
      dia++;
    } else {
      // Se a célula está depois do último dia do mês, não exibe nada
    }

    // Adiciona a célula à nova linha
    novaLinha.appendChild(novaCelula);
  }

  // Adiciona a nova linha ao corpo da tabela
  corpoTabelaCalendario.appendChild(novaLinha);
}

// Função auxiliar para obter o nome do mês
function obterNomeMes(mes) {
  let nomesMeses = [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
  ];

  return nomesMeses[mes];
}


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

//FUNCÇÕES PARA ABRIR OS APPS
function abrirAgenda() {
  const appAgenda = document.getElementById ("lista-tarefas");
  appAgenda.style.display = "block";
}

function abrirPrevisaoTempo() {
  const appPrevisaoTempo = document.getElementById ("weather-form");
  appPrevisaoTempo.style.display = "block";
}

function abrirGeradorSenhas() {
  const appGeradorDeSenhas = document.getElementById ("geradorDeSenhas");
  appGeradorDeSenhas.style.display = "block";
}

function abrirCronometro() {
  const cronometro = document.getElementById("cronometro");
  cronometro.style.display = "block";
}

function abrirMp3() {
  const cronometro = document.getElementById("mp3");
  cronometro.style.display = "block";
}

//FUNÇÕES PARA FECHAR OS APPS
function fecharApps() {
  const listaTarefas = document.getElementById("lista-tarefas");
  const previsaoTempo = document.getElementById("weather-form");
  const geradorDeSenhas = document.getElementById("geradorDeSenhas");
  const cronometro = document.getElementById("cronometro");
 
  previsaoTempo.style.display = "none";
  listaTarefas.style.display = "none";
  geradorDeSenhas.style.display = "none";
  cronometro.style.display = "none";
}

//AGENDA
// Seleciona os elementos do formulário
const form = document.querySelector('form');
const atividadeInput = document.querySelector('#atividade');
const dataAgendarInput = document.querySelector('#agendar-data');
const dataPrazoInput = document.querySelector('#data-prazo');
// Seleciona a tabela e o tbody onde serão adicionadas as linhas
const tabela = document.querySelector('#tabela');
const tbody = tabela.querySelector('tbody');
// Seleciona os botões "Salvar" e "Cancelar"
const salvarBtn = document.querySelector('#salvar');
const cancelarBtn = document.querySelector('#cancelar');

// Adiciona um evento de clique no botão "Salvar"
salvarBtn.addEventListener('click', function() {

  // Obtém os valores dos inputs
  const atividadeInput = document.querySelector('#atividade').value;
  const dataAgendarInput = document.querySelector('#agendar-data').value;
  const dataPrazoInput = document.querySelector('#data-prazo').value;

  // Verifica se todos os campos foram preenchidos
  if (atividadeInput) {

    // Cria uma nova linha na tabela
    const novaLinha = document.createElement('tr');
    const dataAgdObj = new Date(dataAgendarInput);
    const dataPrazoObj = new Date(dataPrazoInput);

    // Adiciona as células na nova linha
    novaLinha.innerHTML = `
    <td>${atividadeInput}</td>
    <td>${dataAgdObj.toLocaleDateString('pt-BR')}</td>
    <td>${dataPrazoObj.toLocaleDateString('pt-BR')}</td>
    <td>
      <button class="editar-btn">
      <i class="fa-sharp fa-solid fa-file-pen"></i>
      </button>
      <button class="excluir-btn">
      <i class="fa-solid fa-trash"></i>
      </button>
    </td>
    `;

    // Adiciona a nova linha no corpo da tabela
    tbody.appendChild(novaLinha);

    // Limpa os valores dos inputs
    document.querySelector('#atividade').value = '';
    document.querySelector('#agendar-data').value = '';
    document.querySelector('#data-prazo').value = '';

    // Salva os valores no localStorage
    localStorage.setItem('agenda', JSON.stringify({
      atividadeInput,
      dataAgendarInput,
      dataPrazoInput,
    }));

  } else {
    alert('Preencha todos os campos!');
  }
});

// Adiciona um evento de clique no botão "Cancelar"
cancelarBtn.addEventListener('click', function() {

  // Limpa os valores dos inputs
  document.querySelector('#atividade').value = '';
  document.querySelector('#agendar-data').value = '';
  document.querySelector('#data-prazo').value = '';
});

// Adiciona um evento de clique nas células de editar e excluir
tabela.addEventListener('click', function(event) {
  if (event.target.classList.contains('fa-file-pen')) {
    // Seleciona a linha correspondente ao botão de editar
    const linha = event.target.closest('tr');

    // Seleciona as células da linha
    const celulas = linha.querySelectorAll('td');

    // Preenche os valores dos inputs com as informações da linha
    document.querySelector('#atividade').value = celulas[0].textContent;
    document.querySelector('#agendar-data').value = celulas[1].textContent;
    document.querySelector('#data-prazo').value = celulas[2].textContent;

    // Remove a linha correspondente
    linha.remove();
  } else if (event.target.classList.contains('fa-trash')) {
    // Seleciona a linha correspondente ao botão de excluir
    const linha = event.target.closest('tr');

    // Remove a linha correspondente
    linha.remove();
  }
});

//PREVISÃO DO TEMPO
//chave da API https://www.weatherapi.com/
const apiKey = "ae17e3a672a643549e8233852231004";

const formWeather = document.getElementById("weather-form");
const cityInput = document.getElementById("city-input");
const localTime = document.getElementById("localtime")
const submitButton = document.getElementById("submit-button");
const weatherInfo = document.getElementById("weather-info");
const cityName = document.getElementById("city-name");
const temperature = document.getElementById("temperature");
const description = document.getElementById("description");
const humidity = document.getElementById("humidity");
const windSpeed = document.getElementById("wind-speed");
const weatherIcon = document.getElementById("weather-icon");

formWeather.addEventListener("submit", function (event) {
  event.preventDefault();
  const city = cityInput.value.trim();

  // Define a URL de requisição para a API do WeatherAPI
  const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&lang=pt`;
  
  // Faz uma requisição para a API do WeatherAPI
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      // Atualiza as informações na página
      console.log(data)
      console.log(data.current.condition["text"])
      cityName.innerText = data.location.name + ", " + data.location.region + " - " + data.location.country;
      localTime.innerText = `Data/Hora: ${data.location.localtime}`;
      temperature.innerText = `Temperatura: ${data.current.temp_c}°C`;
      description.innerText = `Descrição: ${data.current.condition["text"]}`;
      humidity.innerText = `Umidade: ${data.current.humidity}%`;
      windSpeed.innerText = `Velocidade do Vento: ${data.current.wind_kph}km/h`;
      weatherIcon.className = `fas ${getWeatherIcon(data.current.condition.code)}`;
      weatherInfo.style.display = "block";
    })

    .catch((error) => {
      console.log(error);
      cityName.innerText = "Não foi possível encontrar a cidade.";
      temperature.innerText = "";
      description.innerText = "";
      humidity.innerText = "";
      windSpeed.innerText = "";
      weatherIcon.className = "";
      weatherInfo.style.display = "none";
    });
});

// retorna as condições do clima fornecidos pela API
function getWeatherIcon(conditionCode) {
  switch (conditionCode) {
    case 1000:
      return "fa-sun";
    case 1003:
      return "fa-cloud-sun";
    case 1006:
    case 1009:
      return "fa-cloud";
    case 1030:
    case 1135:
    case 1147:
      return "fa-smog";
    case 1063:
    case 1180:
    case 1183:
    case 1186:
    case 1189:
    case 1192:
    case 1195:
    case 1198:
    case 1201:
    case 1204:
    case 1240:
    case 1243:
      return "fa-cloud-showers-heavy";
    case 1066:
    case 1210:
    case 1213:
    case 1216:
    case 1219:
    case 1222:
    case 1225:
    case 1237:
      return "fa-snowflake";
    case 1072:
    case 1150:
    case 1153:
    case 1168:
    case 1171:
    case 1198:
    case 1249:
    case 1252:
    case 1255:
    case 1258:
    case 1261:
      return "fa-bolt";
    default:
      return "fa-question";
  }
}

//Ação para o botão de Reset
const resetButton = document.getElementById("reset-button");

resetButton.addEventListener("click", function() {
  cityName.innerText = "";
  temperature.innerText = "";
  description.innerText = "";
  humidity.innerText = "";
  windSpeed.innerText = "";
  weatherIcon.className = "";
  weatherInfo.style.display = "none";
  cityInput.value = "";
});

//GERADOR DE SENHAS
// Selecione o formulário
const formGerador = document.querySelector('#geradorDeSenhas');

// Adicione um evento de envio ao formulário
formGerador.addEventListener('submit', function(e) {
  e.preventDefault(); // Evita o envio padrão do formulário

  // Obtenha as informações do formulário
  const comprimento = parseInt(document.querySelector('#comprimento').value);
  const tipo = document.querySelector('#tipo').value;
  const complexidade = document.querySelector('#complexidade').value;

  // Gere a senha com base nas informações do formulário
  const senhaGerada = gerarSenha(comprimento, tipo, complexidade);

  // Exiba a senha gerada no campo de senha
  const senhaGeradaInput = document.querySelector('#senha-gerada');
  senhaGeradaInput.value = senhaGerada;

  // Ative o botão de copiar senha
  const copiarSenhaButton = document.querySelector('#copiar-senha');
  copiarSenhaButton.disabled = false;
});

// Adicione um evento de clique ao botão de copiar senha
const copiarSenhaButton = document.querySelector('#copiar-senha');
copiarSenhaButton.addEventListener('click', function() {
  // Selecione o campo de senha gerada
  const senhaGeradaInput = document.querySelector('#senha-gerada');

  // Se o campo de senha gerada não estiver vazio, copie a senha para a área de transferência
  if (senhaGeradaInput.value) {
    senhaGeradaInput.select();
    document.execCommand('copy');
  }
});

// Defina a função para gerar senhas aleatórias com base nas informações do formulário
function gerarSenha(comprimento, tipo, complexidade) {
  // Crie uma lista de caracteres com base no tipo selecionado
  let caracteres = '';
  switch (tipo) {
    case 'letras':
      caracteres = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
      break;
    case 'numeros':
      caracteres = '0123456789';
      break;
    case 'alfanumerico':
    default:
      caracteres = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
      break;
  }

  // Crie uma lista de caracteres especiais com base na complexidade selecionada
  let caracteresEspeciais = '';
  switch (complexidade) {
    case 'media':
      caracteresEspeciais = '!@#$%&*?';
      break;
    case 'alta':
      caracteresEspeciais = '!@#$%&*?^+-_';
      break;
    case 'baixa':
    default:
      break;
  }

  // Adicione os caracteres especiais à lista de caracteres
  caracteres += caracteresEspeciais;

  // Gere a senha aleatória
  let senha = '';
  for (let i = 0; i < comprimento; i++) {
    senha += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
  }

  return senha;
}

// Copiar senha gerada para a área de transferência
document.getElementById("copiar-senha").addEventListener("click", function(event) {
  event.preventDefault(); // Impede a submissão do formulário
  var senhaGerada = document.getElementById("senha-gerada").value;
  navigator.clipboard.writeText(senhaGerada).then(function() {
    alert("Senha copiada para a área de transferência!");
  }, function() {
    alert("Não foi possível copiar a senha para a área de transferência.");
  });
});

//CRONOMETRO
let minutos = 0;
let segundos = 0;
let intervalo;

const iniciarCronometro = () => {
    intervalo = setInterval(() => {
        segundos++;

        if (segundos === 60) {
            minutos++;
            segundos = 0;
        }

        document.getElementById('tempoMinutos').innerHTML = formatarTempo(minutos);
        document.getElementById('tempoSegundos').innerHTML = formatarTempo(segundos);
    }, 1000);
}

const pararCronometro = () => {
    clearInterval(intervalo);
}

const reiniciarCronometro = () => {
    pararCronometro();
    minutos = 0;
    segundos = 0;
    document.getElementById('tempoMinutos').innerHTML = formatarTempo(minutos);
    document.getElementById('tempoSegundos').innerHTML = formatarTempo(segundos);
}

const formatarTempo = (tempo) => {
    return tempo < 10 ? `0${tempo}` : tempo;
}

document.getElementById('iniciarCronometro').addEventListener('click', iniciarCronometro);
document.getElementById('pararCronometro').addEventListener('click', pararCronometro);
document.getElementById('reiniciarCronometro').addEventListener('click', reiniciarCronometro);

//REPRODUTOR DE MUSICA
const mp3Player = document.querySelector('#mp3');
const fecharMp3 = document.querySelector('#fecharMp3');
const headerMp3 = document.querySelector('.headerMp3');
const arquivoMusica = document.querySelector('#arquivoMusica');
const botaoAdicionar = document.querySelector('button[type="submit"]');
const musicList = document.querySelector('#musicList');
const audioPlayer = document.querySelector('#audioPlayer');

fecharMp3.addEventListener('click', function() {
  mp3Player.style.display = 'none';
});

headerMp3.addEventListener('mousedown', function(e) {
  // Obtém a posição do mouse em relação ao elemento
  const x = e.clientX - mp3Player.offsetLeft;
  const y = e.clientY - mp3Player.offsetTop;
  
  function mouseMoveHandler(e) {
    mp3Player.style.left = (e.clientX - x) + 'px';
    mp3Player.style.top = (e.clientY - y) + 'px';
  }

  document.addEventListener('mousemove', mouseMoveHandler);

  function mouseUpHandler() {
    document.removeEventListener('mousemove', mouseMoveHandler);
    document.removeEventListener('mouseup', mouseUpHandler);
  }

  document.addEventListener('mouseup', mouseUpHandler);
});

arquivoMusica.addEventListener('change', function() {
  musicList.innerHTML = '';

  for (let i = 0; i < arquivoMusica.files.length; i++) {
    const musica = arquivoMusica.files[i];
    const li = document.createElement('li');
    const link = document.createElement('a');
    link.textContent = musica.name;
    link.href = '#';
    link.addEventListener('click', function() {
      audioPlayer.src = URL.createObjectURL(musica);
      audioPlayer.play();
    });
    li.appendChild(link);
    musicList.appendChild(li);
  }
});

botaoAdicionar.addEventListener('click', function(e) {
  e.preventDefault();
  arquivoMusica.click();
});

const limparListaBtn = document.getElementById("limparLista");
limparListaBtn.addEventListener("click", () => {
  musicList.innerHTML = '';
  audioPlayer.src = "";
  URL.revokeObjectURL(audioPlayer.src);
});