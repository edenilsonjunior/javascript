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

    // Gera uma posicao aleatoria para a Food
    gerarAleatorio() {
        this.horizontal = Math.floor(Math.random() * this.colunas) * this.tamanho;
        this.vertical = Math.floor(Math.random() * this.linhas) * this.tamanho;
    }

    // Retorna a posicao da Food
    getPosicao() {
        return [this.horizontal, this.vertical];
    }

    // Desenha a Food na tela atraves do contexto
    desenhar(context) {
        context.fillStyle = "red";
        context.fillRect(this.horizontal, this.vertical, this.tamanho, this.tamanho);
    }
}

export default Food;