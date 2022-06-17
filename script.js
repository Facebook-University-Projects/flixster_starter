const BASE_IMG_URL = "https://image.tmdb.org/t/p/w500/"
const API_KEY = "1b5be75491b536d82aea66fdb66143df"
const PAGES = 1

const moviesGridEl = document.getElementById("movies-grid")
const searchInputEl = document.getElementById("search-input")
const loadMoreBtnEl = document. getElementById("load-more-movies-btn-container")

const renderMovies = movies => {
    movies.forEach(movie => {
        moviesGridEl.innerHTML += `
        <div class="movie-card">
            <img src="${BASE_IMG_URL + movie.poster_path}" class="movie-poster" alt="${movie.original_title} Poster">
            <div class="movie-title">${movie.title}</div>
            <div class="movie-votes">${movie.vote_count}</div>
        </div>
        `
    })
}

const render404 = () => {
    moviesGridEl.innerHTML = ""
    loadMoreBtnEl.innerHTML = ""
    moviesGridEl.innerHTML += `
    <div id="error-container">NOT FOUND</div>
    `
}

searchInputEl.addEventListener("keyup", async e => {
    const searchInputVal = e.target.value
    if (searchInputVal === "") {
        fetchMovies()
    } else {
        fetchFilteredMovies(searchInputVal)
    }
})

const fetchMovies = async () => {
    moviesGridEl.innerHTML = ""
    const response = await fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=1b5be75491b536d82aea66fdb66143df&page=1")
    const data = await response.json()
    renderMovies(data.results)
}

const loadMore = () => {

}

const fetchFilteredMovies = async searchInputVal => {
    moviesGridEl.innerHTML = ""
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${searchInputVal}&page=${PAGES}&include_adult=false`)
    const filteredData = await response.json()
    console.log(filteredData.results.length)
    if (filteredData.results.length <= 0) render404()
    renderMovies(filteredData.results)
}

window.onload = async () => {
    await fetchMovies()
}
