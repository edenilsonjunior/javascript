class Snake {
    constructor(tamanho) {
        this.tamanho = tamanho;
        this.corpo = [[5 * tamanho, 5 * tamanho]];
        this.direction = { horizontal: 0, vertical: 0 };
    }

    move() {
        for (let i = this.corpo.length - 1; i > 0; i--) {
            this.corpo[i] = [...this.corpo[i - 1]];
        }
        this.corpo[0][0] += this.direction.horizontal * this.tamanho;
        this.corpo[0][1] += this.direction.vertical * this.tamanho;
    }
  
    desenhar(context) {
        context.fillStyle = "lime";
        this.corpo.forEach((indice) => {
            context.fillRect(indice[0], indice[1], this.tamanho, this.tamanho);
        });
    }

    colisaoFood(food) {
        return this.corpo[0][0] === food.horizontal && this.corpo[0][1] === food.vertical;
    }

    colisaoBorda(tabuleiro) {
        const head = this.corpo[0];
        return head[0] < 0 || head[0] >= tabuleiro.width || head[1] < 0 || head[1] >= tabuleiro.height;
    }

    colisaoCobra() {
        const head = this.corpo[0];

        // Percorre cada segmento do corpo (exceto a cabeça)
        this.corpo.slice(1).forEach((segmento) => {
            if (segmento[0] === head[0] && segmento[1] === head[1]) {
                return true;
            }
        });
    
        return false;
    }

    eat(food) {
        this.corpo.push([food.getPosicao()]);
    }

    mudarDirecao(keyCode) {
        switch (keyCode) {
            case "ArrowUp":
                if (this.direction.vertical !== 1) {
                    this.direction = { horizontal: 0, vertical: -1 };
                }
                break;
            case "ArrowDown":
                if (this.direction.vertical !== -1) {
                    this.direction = { horizontal: 0, vertical: 1 };
                }
                break;
            case "ArrowLeft":
                if (this.direction.horizontal !== 1) {
                    this.direction = { horizontal: -1, vertical: 0 };
                }
                break;
            case "ArrowRight":
                if (this.direction.horizontal !== -1) {
                    this.direction = { horizontal: 1, vertical: 0 };
                }
                break;
        }
    }
}

export default Snake;
