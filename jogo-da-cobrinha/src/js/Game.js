import Food from './Food.js';
import Snake from './Snake.js';

class Game {
    // Construtor da classe Game
    constructor(linhas, colunas, tamanho) {
        this.scoreCount = 0;
        this.score = document.getElementById("score-points");
        this.linhas = linhas;
        this.colunas = colunas;
        this.tamanho = tamanho;

        // cria um atributo que refere-se ao tabuleiro
        this.tabuleiro = document.getElementById("tabuleiro");
        this.tabuleiro.height = this.linhas * this.tamanho;
        this.tabuleiro.width = this.colunas * this.tamanho;

        // Cria um contexto 2D para desenhar no tabuleiro
        this.context = this.tabuleiro.getContext("2d");

        // Instancia a Snake e a Food
        this.snake = new Snake(this.tamanho);
        this.food = new Food(this.linhas, this.colunas, this.tamanho);

        // Game over como falso
        this.gameOver = false;

        // Inicia o jogo
        this.start();
    }

    // Método para iniciar o jogo
    start() {
        this.colocarComida();

        // Adiciona um evento para 'keyup'
        // o bind é necessário para manter o contexto do this
        document.addEventListener("keyup", this.mudarDirecao.bind(this));
        setInterval(this.update.bind(this), 100);
    }

    // Método para atualizar o estado do jogo
    update() {

        if (this.gameOver) {
            return;
        }

        // Limpa o tabuleiro
        this.context.fillStyle = "black";
        this.context.fillRect(0, 0, this.tabuleiro.width, this.tabuleiro.height);

        // Desenha a comida no tabuleiro
        this.food.desenhar(this.context);

        // Verifica se a cobra colidiu com a comida
        if (this.snake.colisaoFood(this.food)) {
            this.snake.eat(this.food);
            // Coloca uma nova comida no tabuleiro
            this.colocarComida();
            this.scoreCount += 10;
            this.score.textContent = this.scoreCount;
        }

        // Move a cobra e depois exibe ela
        this.snake.move();
        this.snake.desenhar(this.context);

        // Verifica se houve colisão com a borda ou com a própria cobra
        if (this.snake.colisaoBorda(this.tabuleiro) || this.snake.colisaoCobra()) {
            this.gameOver = true;
            // Exibe um alerta de Game Over
            alert("Game Over");
            window.location.reload(true);
        }
    }

    // Método para mudar a direção da cobra
    mudarDirecao(e) {
        this.snake.mudarDirecao(e.code);
    }

    // Método para colocar a comida no tabuleiro
    colocarComida() {
        this.food.gerarAleatorio();
        // Enquanto food estiver no mesmo lugar da cobra
        while (this.snake.colisaoFood(this.food)) {
            this.food.gerarAleatorio();
        }
    }
}

export default Game;
