// cria a tela, os botoes, o igual(=) e o botao de limpar
const tela = document.querySelector("#telinha");
const botoes = document.querySelectorAll(".acao");
const igual = document.querySelector("#igual");
const clear = document.querySelector("#limpar")

// cria os digitos, o operacao, define porcentagem e certo como false
let digito1 = '';
let digito2 = '';
let operacao = '';
let porcentagem = false;
let certo = false;

// para cada item da variavel botoes, ele chama a funcao inserir para cada acao
botoes.forEach(function (botao) {

    botao.addEventListener("click", () => {
        inserir(botao.value); // passar o valor de cada button
    });

});

igual.addEventListener("click", () => {

    // se a operacao for diferente de null && o digito2 for diferente de null
    if ((operacao != '') && (digito2 != '')) {

        // passa os numeros para float
        digito1 = parseFloat(digito1);
        digito2 = parseFloat(digito2);

        // if para verificar se a conta é sobre porcentagem
        // para operacao == '-' ou '+', ele faz a seguinte conta:
        if (porcentagem && (operacao == '-' || operacao == '+')) {

            digito2 = digito1 * (digito2 / 100);
        }
        // para operacao == 'X' ou '/', ele faz a seguinte conta:
        else if (porcentagem && (operacao == 'X' || operacao == '/')) {

            digito2 = digito2 / 100;
        }

        // apos verificar se possue porcentagem ou nao, ele faz um switch
        // para saber qual operacao deve ser feita

        switch (operacao) {
            // em cada operacao, após exibir o resultado, ele passa o resultado
            // para digito1, para continuar contas futuras.
            // utiliza o toFixed para limitar o numero de casas decimais.

            case "/":
                tela.textContent = parseFloat((digito1 / digito2).toFixed(6));
                digito1 = parseFloat(digito1 / digito2);
                break;
            case "X":
                tela.textContent = parseFloat((digito1 * digito2).toFixed(6));
                digito1 = digito1 * digito2;
                break;
            case "+":
                tela.textContent = parseFloat((digito1 + digito2).toFixed(6));
                digito1 = digito1 + digito2;
                break;
            case "-":
                tela.textContent = parseFloat((digito1 - digito2).toFixed(6));
                digito1 = digito1 - digito2;
                break;
            default:
                tela.textContent = 'err';
                break;
        }
        // ao final reseta a variavel de operacao, e como digito2 nao importa mais,
        // ele é resetado tbm e porcentagem = false, para resetar.
        operacao = '';
        digito2 = '';
        porcentagem = false;

    } // caso nao tenha digito2 e operacao e digito1 for != null, 
    // ele só ira mostrar o digito1
    else if (digito1 != '' && digito1 != '.') {

        // converte para float, depois limita as casas decimais, depois
        // converte dnv para float para eliminar 0 desnecessarios.
        // Ex: 3.00200 vira 3.002
        tela.textContent = parseFloat(parseFloat(digito1).toFixed(6));

    } else {
        // exibe 0 por default
        tela.textContent = 0;
    }

});

function inserir(x) {

    // utiliza o .includes(x) para verificar se NAO é algum das operacoes.
    // por isso o uso do "!"
    if (!["/", "+", "-", "X", "raiz", "porcent"].includes(x)) {

        // serve tanto para armazenar o digito1, tanto para ver se o primeiro digito
        // é um numero negativo
        if (digito1 == '' || operacao == '') {

            // a variavel certo confere se o primeiro numero digitado foi uma operacao
            if (certo) {
                // se operacao for negativo, ele deixa o numero negativo e mostra na tela
                // se for positivo ele só soma o numero ao digito1
                if (operacao == '-') {
                    digito1 += x;
                    digito1 = -digito1;
                    tela.textContent = digito1;
                } else {
                    digito1 += x;
                    tela.textContent = digito1;
                }
                certo = false; 
            } 
            else {
                // adiciona parte decimal caso o botao clicado seja o ','
                // só adiciona a parte decimal caso ainda nao possua ponto
                if ((x == "ponto") && !(digito1.includes("."))) {
                    digito1 += '.';
                } 
                // se nao for ponto, nem negativo, ele só adiciona o valor a digito1
                else if (x != "ponto") {
                    digito1 += x;
                    tela.textContent = digito1;
                }
            }
        } //se digito1 && operador ja tiverem sido estabelecidos, adiciona o digito2
        else {
            if ((x == "ponto") && !(digito2.includes("."))) {
                digito2 += '.';
                tela.textContent = digito2;
            } else if (x != "ponto") {
                digito2 += x;
                tela.textContent = digito2;
            }

        }
    }

    //se x é igual a raiz e o digito1 for diferente de null
    // ele faz a raiz quadrada
    else if ((x == "raiz") && (digito1 != '')) {
        digito1 = Math.sqrt(parseFloat(digito1));
        tela.textContent = parseFloat(digito1.toFixed(6));
    }

    //se x é igual a porcentagem, ele verifica se o digito2 nao é null,
    // entao ele atualiza porcentagem como true
    else if ((x == "porcent")) {

        if (digito2 != '') {
            porcentagem = true;
        } else {
            tela.textContent = 0;
        }
    }

    // verifica se o x é uma operacao de mais ou menos && digito1 é null
    // nesse caso, evitar erros quando a primeira coisa digitada é um '+' ou '-'
    else if (((x == '-') || (x == '+')) && (digito1 == '')) {
        certo = true;
        operacao = x;
    }

    // se nada disso acontecer e x for um dos operadores,
    // ele atribui x a operacao
    else if (x == '/' || x == '+' || x == 'X' || x == '-') {
        operacao = x;
    }

}

//limpa os digitos, a operacao, mostra 0 na tela e porcentagem = false.
clear.addEventListener("click", () => {
    digito1 = '';
    digito2 = '';
    operacao = '';
    tela.textContent = '0';
    porcentagem = false;
})
