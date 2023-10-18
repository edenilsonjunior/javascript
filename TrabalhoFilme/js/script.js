//api para a API
var api = 'ea17dfb0';

//lista com varios filmes aleatorios
var listaFilmes = ['The Hangover', 'Pride & Prejudice', 'Batman Begins', 'Avengers: Endgame', 'The Shawshank Redemption', 'Inception', 'The Matrix', 'Forrest Gump', 'The Dark Knight', 'Gladiator', 'The Godfather', 'Jurassic Park', 'Titanic', 'The Lion King', 'The Lord of the Rings: The Fellowship of the Ring', 'The Terminator', 'Die Hard', 'The Social Network', 'The Revenant', 'Interstellar', 'The Avengers'];

function exibirFilmes() {
    var cards = document.querySelectorAll(".card");

    //para cada elemento do array cards
    cards.forEach(function (card) {
        //imagem
        var img = card.querySelector(".imagem");
        //titulo
        var titulo = card.querySelector(".card-title");

        //adiciona o titulo ao link do filme.html
        var linkdescricao = card.querySelector('a');

        //escolher um filme aleatorio do array
        var indiceAleatorio = Math.floor(Math.random() * listaFilmes.length);
        var filmeAleatorio = listaFilmes[indiceAleatorio];

        //removeu o filme da lista, para nao repetir ele
        listaFilmes.splice(indiceAleatorio, 1);

        var link = `http://www.omdbapi.com/?t=${filmeAleatorio}&apikey=${api}`;

        fetch(link)
            .then((response) => response.json())
            .then((data) => {
                if (data.Response) {
                    img.src = data.Poster;
                    titulo.textContent = data.Title;
                    linkdescricao.setAttribute('href', 'filme.html?data-id=' + data.Title);
                    
                }
            })
            .catch((error) => {
                console.error('Erro');
            });
    });
}

window.onload = exibirFilmes();