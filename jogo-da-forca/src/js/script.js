var palavras = ['amarelo', 'aviao', 'bolo', 'cama', 'doce', 'estojo', 'faca', 'geleia', 'noite', 'oculos', 'pao', 'umbigio'];
var numero = Math.floor(Math.random() * 12);

var palavra = palavras[numero];
var mensagem = [];

for (let index = 0; index < palavra.length; index++) {
    mensagem[index] = '_ ';
}

var tentativas = 0;
var acertou = false;
function conferirLetra() {
    console.log(palavra);
    var letra = document.querySelector('#campo').value;
    
    //zera o array mensagem para nao repetir os underlines.
    document.querySelector('#letras').textContent = '';

    for (let index = 0; index < palavra.length; index++) {
        if (letra == palavra[index]) {
            acertou = true;
            mensagem[index] = letra;
        }
    }

    for (let index = 0; index < palavra.length; index++) {
        document.querySelector('#letras').textContent += mensagem[index];
    }

    if (!acertou) {
        if (tentativas == 5) {
            document.querySelector('#aviso').textContent = "Voce perdeu!";
            document.querySelector('#imagem').src = "img/6.png";

        }else{
            document.querySelector('#aviso').textContent = "Voce errou!";

            tentativas++;
            document.querySelector('#imagem').src = "img/"+tentativas+".png";
            
        }

    }else{
        document.querySelector('#aviso').textContent = "Voce acertou!";
    }

    var saber = 0;
        for (let posicao = 0; posicao < palavra.length; posicao++) {
            if (mensagem[posicao] != '_ ') {
                saber+= 1;
            }
        }
        if (saber == palavra.length) {
            document.querySelector('#aviso').textContent = "Voce ganhou!";
        }
}


var botao = document.querySelector('#botao');
botao.addEventListener('click', conferirLetra);

for (let index = 0; index < palavra.length; index++) {
    
    document.querySelector('#letras').textContent += mensagem[index];
    
}