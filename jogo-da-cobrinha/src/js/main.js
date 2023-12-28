import Game from './Game.js';

// Uso
window.onload = function () {

    // cria o jogo
    const linhas = 20;
    const colunas = 20;
    const tamanhoBloco = 25;

    // instancia o jogo
    const game = new Game(linhas, colunas, tamanhoBloco);
};