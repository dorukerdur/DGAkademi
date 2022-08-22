const API_KEY = 'api_key=c924ef35363db87a24b0e89513ddb067';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&' + API_KEY;
const IMG_URL = 'https://image.tmdb.org/t/p/w500';

const main1 = document.getElementById('main1');

getMovies(API_URL);

function getMovies(url) {

    fetch(url).then(res => res.json()).then(data => {
        console.log(data.results)
        showMovies(data.results);
    })
}


function showMovies(data) {
    main1.innerHTML = '';

    data.forEach(movie1 => {
        const {title, poster_path, vote_average} = movie1;
        const movieEl = document.createElement('div');
        movieEl.classList.add('movie1');
        movieEl.innerHTML = `
            <img src="${IMG_URL+poster_path}" alt="${title}">

            <div class="movie-info">
                <h3>${title}</h3>
                <span class="green">${vote_average}</span>
            </div>
   
        `
        main1.appendChild(movieEl);
    })
}
