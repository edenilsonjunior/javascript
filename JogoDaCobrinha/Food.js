class Food {

    constructor(linhas, colunas, tamanho) {
        this.linhas = linhas;
        this.colunas = colunas;
        this.tamanho = tamanho;

        this.horizontal = 0;
        this.vertical = 0;

        // Chama gerarAleatorio() que escolhe uma posicao aleatoria para exibir a Food
        this.gerarAleatorio();
    }

    gerarAleatorio() {
        this.horizontal = Math.floor(Math.random() * this.colunas) * this.tamanho;
        this.vertical = Math.floor(Math.random() * this.linhas) * this.tamanho;
    }

    getPosicao() {
        return [this.horizontal, this.vertical];
    }

    desenhar(context) {
        context.fillStyle = "red";
        context.fillRect(this.horizontal, this.vertical, this.tamanho, this.tamanho);
    }
}

export default Food;