// Função para calcular o IMC
function calcularIMC() {
    const pesoInput = document.getElementById('peso');
    const alturaInput = document.getElementById('altura');
    const mensagemElement = document.querySelector('.mensagem');

    // Verifica se os campos de peso e altura estão preenchidos
    if (pesoInput.value === '' || alturaInput.value === '') {
        mensagemElement.innerText = 'Por favor, preencha todos os campos.';
        return;
    }

    const peso = parseFloat(pesoInput.value);
    const altura = parseFloat(alturaInput.value.replace(',', '.'));

    // Verifica se os valores inseridos são numéricos
    if (isNaN(peso) || isNaN(altura)) {
        mensagemElement.innerText = 'Por favor, insira valores numéricos válidos.';
        return;
    }

    // Calcula o IMC
    const imc = peso / (altura * altura);

    // Define a mensagem com base no IMC calculado
    let mensagem = '';


    if (imc < 18.5) {
        mensagem = 'Você está abaixo do peso';
        smile.style.display="none";
        indif.style.display="block";
        happy.style.display="none";
        surprise.style.display="none";
        sad.style.display="none";
        crazy.style.display="none";
        homerCrazy.style.display="none";
    } else if (imc < 24.9) {
        mensagem = 'Parabéns! Seu peso está adequado.';
        smile.style.display="none";
        indif.style.display="none";
        happy.style.display="block";
        surprise.style.display="none";
        sad.style.display="none";
        crazy.style.display="none";
        homerCrazy.style.display="none";
    } else if (imc < 29.9) {
        mensagem = 'Você está com obrepeso';
        smile.style.display="none";
        indif.style.display="none";
        happy.style.display="none";
        surprise.style.display="block";
        sad.style.display="none";
        crazy.style.display="none";
        homerCrazy.style.display="none";
    } else if (imc < 34.9) {
        mensagem = 'Obesidade grau 1';
        smile.style.display="none";
        indif.style.display="none";
        happy.style.display="none";
        surprise.style.display="none";
        sad.style.display="block";
        crazy.style.display="none";
        homerCrazy.style.display="none";
    } else if (imc < 39.9) {
        mensagem = 'Obesidade grau 2';
        smile.style.display="none";
        indif.style.display="none";
        happy.style.display="none";
        surprise.style.display="none";
        sad.style.display="none";
        crazy.style.display="block";
        homerCrazy.style.display="none";
    } else {
        mensagem = 'Obesidade grau 3';
        smile.style.display="none";
        indif.style.display="none";
        happy.style.display="none";
        surprise.style.display="none";
        sad.style.display="none";
        crazy.style.display="none";
        homerCrazy.style.display="block";
    }

    // Exibe a mensagem
    mensagemElement.innerText = `Seu IMC é ${imc.toFixed(2)} - ${mensagem}`;
}

// Chama a função calcularIMC quando o botão "Calcular IMC" é clicado
const calcularButton = document.querySelector('input[type="submit"]');
calcularButton.addEventListener('click', calcularIMC);

resetar.addEventListener('click', () => {
    const pesoInput = document.getElementById('peso').value= '';
    const alturaInput = document.getElementById('altura').value= '';
    const mensagemElement = document.querySelector('.mensagem').innerText= '';
    smile.style.display="block";
    indif.style.display="none";
    happy.style.display="none";
    surprise.style.display="none";
    sad.style.display="none";
    crazy.style.display="none";
    homerCrazy.style.display="none";
})