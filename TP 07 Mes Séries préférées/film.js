let series = [];
let tabFav = [];
imdbnum = "";


// Se connécter a l'api
async function fetchSeries() {
    const apiKey = "efdc2275";
    const query = "star";
    const url = `http://www.omdbapi.com/?apikey=${apiKey}&s=${query}`;


//récupérer les données de l'api
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data.Search);

      //SI on a une rep renvoyer la rep vaire l'affichage
      if (data.Response === "True") {
        displaySearchResults(data.Search);
      } else {
        console.log("Aucune série trouvée !");
      }

    } catch (error) {
      console.error("Erreur :", error);
    }
    
  }
fetchSeries();

//fonction pour afficher dans le tbody
function displaySearchResults(series) {
    const tbody = document.getElementById('myTbody');
    tbody.innerHTML = '';
  
    series.forEach(serie => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>${serie.Title}</td>
        <td>${serie.Year}</td>
        <td><img src="${serie.Poster}" width="80" alt="${serie.Title}" /></td>
        <td class="align-middle">
          <button class="btn btn-outline-secondary" onclick="addToFavorites(serie)">
            <i class="fa fa-plus"></i>
          </button>
        </td>
      `;
      tbody.appendChild(tr);
    });
}

const imdb = (serie) => {
    const tbody = document.getElementById('myTbody');
    tbody.innerHTML = '';
    serie.forEach(serie => {
        imdbnum = serie.imdbID
        console.log(imdbnum)
    });
}


async function getIMDB(imdbID) {
    const apiKey = "efdc2275";
    const url = `http://www.omdbapi.com/?apikey=${apiKey}&i=${imdbID}`;
  
    try {
      const response = await fetch(url);
      const data = await response.json();
  
      if (data.Response === "True") {
        return data.imdbRating;
      } else {
        console.log("Erreur :", data.Error);
        return null;
      }
    } catch (error) {
      return null;
    }
  }
  const imdbID = "tt0076759";
  getIMDB(imdbID).then(rating => {
    if (rating !== null) {
      console.log(`La note IMDb est : ${rating}`);
    } else {
      console.log("Impossible de récupérer la note IMDb.");
    }
  });


