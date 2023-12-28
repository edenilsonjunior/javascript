//api para a API
var api = 'ea17dfb0';

//lista com varios filmes aleatorios
var listaFilmes = [
    'The Hangover',
    'Pride & Prejudice',
    'Batman Begins',
    'The Shawshank Redemption',
    'Inception',
    'The Matrix',
    'Forrest Gump',
    'The Dark Knight',
    'Gladiator',
    'The Godfather',
    'Jurassic Park',
    'Titanic',
    'The Lion King',
    'The Lord of the Rings: The Fellowship of the Ring',
    'The Terminator',
    'Die Hard',
    'The Social Network',
    'The Revenant',
    'Interstellar',
    'Iron Man',
    'The Incredible Hulk',
    'Iron Man 2',
    'Thor',
    'Captain America: The First Avenger',
    'The Avengers',
    'Iron Man 3',
    'Thor: The Dark World',
    'Captain America: The Winter Soldier',
    'Guardians of the Galaxy',
    'Avengers: Age of Ultron',
    'Ant-Man',
    'Captain America: Civil War',
    'Doctor Strange',
    'Guardians of the Galaxy Vol. 2',
    'Spider-Man: Homecoming',
    'Thor: Ragnarok',
    'Black Panther',
    'Avengers: Infinity War',
    'Ant-Man and The Wasp',
    'Captain Marvel',
    'Avengers: Endgame',
    'Spider-Man: Far From Home',
    'Black Widow',
    'Man of Steel',
    'Batman v Superman: Dawn of Justice',
    'Suicide Squad',
    'Wonder Woman',
    'Justice League',
    'Aquaman',
    'Shazam!',
    'Wonder Woman 1984',
    "Zack Snyder's Justice League",
    'The Suicide Squad',
    'The Godfather: Part II',
    'Pulp Fiction',
    'The Shining',
    'Goodfellas',
    'The Matrix Reloaded',
    'The Matrix Revolutions',
    'Forrest Gump',
    'The Dark Knight Rises',
    'Gladiator',
    'Jurassic Park',
    'Titanic',
    'The Lion King',
    'The Lord of the Rings: The Two Towers',
    'The Lord of the Rings: The Return of the King',
    'Die Hard 2',
    'Die Hard with a Vengeance',
    'Live Free or Die Hard',
    'The Social Network',
    'Inglourious Basterds',
    'Django Unchained',
    'The Hateful Eight',
    'Dunkirk',
    'Inception',
    'The Departed',
    'The Pianist',
    'American Beauty',
    'A Beautiful Mind',
    'Gladiator',
    'No Country for Old Men',
    'There Will Be Blood',
    'The Shape of Water',
    'The Revenant',
    'Interstellar',
    'Blade Runner 2049'
];

function exibirFilmes() {
    var cards = document.querySelectorAll(".card");

    //para cada elemento do array cards
    cards.forEach(function (card) {

        var img = card.querySelector(".imagem");
        var titulo = card.querySelector(".card-title");
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