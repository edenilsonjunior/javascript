const buscarParametro = new URLSearchParams(window.location.search);
const tituloFilme = buscarParametro.get("data-id");

if (tituloFilme) {
    const api = 'ea17dfb0';
    const link = `http://www.omdbapi.com/?t=${tituloFilme}&apikey=${api}`;

    fetch(link)
        .then(response => response.json())
        .then(data => {
            if (data.Response) {
                document.getElementById("movie-poster").src = data.Poster;
                document.getElementById("movie-title").textContent = data.Title;
                document.getElementById("movie-plot").textContent = data.Plot;
                document.getElementById("movie-type").textContent = data.Type;
                document.getElementById("movie-type").textContent = data.Type;
                document.getElementById("movie-lanc").textContent = data.Released;
                document.getElementById("movie-genre").textContent = data.Genre;
                document.getElementById("movie-actors").textContent = data.Actors;
                document.getElementById("movie-language").textContent = data.Language;
                document.getElementById("movie-awards").textContent = data.Awards;
            }
        })
        .catch(error => console.error('Erro'));
}
