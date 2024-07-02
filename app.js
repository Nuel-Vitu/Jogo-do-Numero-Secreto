let numerosSorteados = [];
let limite = 10;
exibirMensagensIniciais();

let numero = geradorNumero();
let tentativas = 1;

function exibirTexto(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, "Brazilian Portuguese Female")
}

 function exibirMensagensIniciais(){
    exibirTexto('h1', 'Jogo do número secreto');
    exibirTexto('p', `Escolha um número de 1 a ${limite}:`);
 }



function verificarChute(){
    let chute = document.querySelector('input').value;
    if (chute == numero){
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        exibirTexto('h1', 'Acertou!');
        exibirTexto('p', `Você descobriu o número secreto após ${tentativas} ${palavraTentativa}.`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{ 
        if (chute > numero){
        exibirTexto('p', 'O número secreto é menor.');
    } else{
        exibirTexto('p', 'O número secreto é maior.');
    }
    tentativas++;
    limparCampo();
}
}

function limparCampo() {
    chute = document.querySelector('input')
    chute.value = '';
}

function reiniciarJogo(){
    numero = geradorNumero();
    limparCampo();
    tentativas = 1;
    exibirMensagensIniciais();
    document.getElementById('reiniciar').setAttribute('disabled', true);
    
}

function geradorNumero() {
    let numeroEscolhido = parseInt(Math.random() * 10 +1);
    let quantidade = numerosSorteados.length;

    if (quantidade == limite){
        numerosSorteados = [];
    }

    if(numerosSorteados.includes(numeroEscolhido)){
        return geradorNumero;
    } else {
        console.log(numerosSorteados);
        numerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}