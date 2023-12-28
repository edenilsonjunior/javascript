# Jogo da Cobrinha em JavaScript

Este é o jogo da cobrinha implementado em JavaScript, utilizando programação orientada a objetos.


<div align="center">
    <img src="https://github.com/edenilsonjunior/javascript/assets/110670578/7ac0640b-794d-4b39-95f7-a7480bb3419a" alt="jogadagif">
</div>


## Autores 

- [Edenilson Garcia](https://github.com/edenilsonjunior)
- [Henrique Bispo](https://github.com/RICKBISPO)


## Funcionalidades

- **Cobrinha Movível:** A cobrinha pode ser controlada pelas setas do teclado (cima, baixo, esquerda, direita).
- **Alimentos:** Alimentos aparecem aleatoriamente no campo de jogo, e ao serem consumidos pela cobrinha, aumentam o tamanho dela.
- **Contagem de Pontos:** Cada vez que a cobrinha consome um alimento, o jogador ganha pontos, e a pontuação total é exibida na tela.
- **Fim de Jogo:** O jogo termina se a cobrinha colidir consigo mesma ou com as bordas do campo.


## Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript (Orientado a Objetos)


## Estrutura de Arquivos

- `index.html`: Arquivo HTML principal.
- `style.css`: Estilos para a aparência do jogo.
- `main.js`: Arquivo JavaScript principal que inicializa o jogo.
- `snake.js`: Classe que representa a cobrinha e suas funcionalidades.
- `Game.js`: Classe que representa a cobrinha e suas funcionalidades.
- `Food.js`: Classe que representa os alimentos no jogo.


## Como Jogar

1. Clone ou faça o download do repositório.
2. Certifique-se de ter o Node.js e o npm (gerenciador de pacotes do Node.js) instalados em seu sistema. [site oficial do Node.js](https://nodejs.org/).

3. Abra um terminal e instale o `http-server` globalmente em seu sistema com o seguinte comando:

    ```bash
    npm install --global http-server
    ```

4. Navegue até o diretório que contém o projeto do jogo da cobrinha.

5. Inicie o servidor com o comando:

    ```bash
    http-server
    ```

6. O `http-server` irá imprimir uma mensagem informando o endereço onde o servidor está rodando. Provavelmente será algo como `http://localhost:8080`. Abra este endereço em seu navegador.
7. Agora você deve ser capaz de ver e jogar o jogo da cobrinha em seu navegador.
