const BASE_IMG_URL = "https://image.tmdb.org/t/p/w500/"
const ERROR_IMG_URL = "https://ciat.cgiar.org/wp-content/uploads/image-not-found.png"
const API_KEY = "1b5be75491b536d82aea66fdb66143df"
let pages = 1

const moviesGridEl = document.getElementById("movies-grid")
const movieCardEl = document.getElementById("movie-card")
const searchInputEl = document.getElementById("search-input")
const loaderEl = document.querySelector(".loader")
const modalEl = document.getElementById("modal-container")
const closeModalEl = document.getElementById("modal-close-container")

const showLoading = () => {
    loaderEl.classList.add('show')
}

const removeLoading = () => {
    loaderEl.classList.remove('show')
}

const openModal = async movieId => {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`)
    const openedMovieData = await response.json()

    const { title, poster_path } = openedMovieData
    const moviePoster = BASE_IMG_URL + poster_path

    modalEl.innerHTML += `
    <div id="modal">
        <div id="modal-close-container">
            <svg xmlns="http://www.w3.org/2000/svg" class="modal-close" onclick="closeModal();" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
        </div>
        <div id="modal-movie-title">${title}</div>
    </div>
    <img src="${poster_path === null ? ERROR_IMG_URL : moviePoster}" alt="${title} Poster">
    `

    modalEl.classList.add('show')
}

const closeModal = () => {
    modalEl.innerHTML = ""
    modalEl.classList.remove('show')
}

const renderMovies = movies => {
    movies.forEach(movie => {
        const moviePoster = BASE_IMG_URL + movie.poster_path

        moviesGridEl.innerHTML += `
        <div class="movie-card">
            <img src="${movie.poster_path === null ?  ERROR_IMG_URL : moviePoster}" class="movie-poster" onClick="openModal(${movie.id})" alt="${movie.original_title} Poster">
            <div class="movie-title">${movie.title}</div>
            <div id="votes-container">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                </svg>
                <div id="movie-votes">${movie.vote_count}</div>
            </div>
        </div>
        `
    })
    removeLoading()
}

const render404 = () => {
    moviesGridEl.innerHTML = ""
    moviesGridEl.innerHTML += `
    <div id="error-container">
        <div id="error-code">404</div>
        <div id="error-message">Aw Snap! Movie not found. :(</div>
    </div>
    `
}

searchInputEl.addEventListener("keyup", async e => {
    moviesGridEl.innerHTML = ""
    const searchInputVal = e.target.value
    if (searchInputVal === "") {
        fetchMovies()
    } else {
        fetchFilteredMovies(searchInputVal)
    }
})

window.addEventListener("scroll", () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement

    if (clientHeight + scrollTop >= scrollHeight - 5) {
        showLoading()
        pages += 1
        setTimeout(fetchMovies, 500)
    }
})

const fetchMovies = async () => {
    const response = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=1b5be75491b536d82aea66fdb66143df&page=${pages}`)
    if (!response.ok) render404()

    const data = await response.json()
    renderMovies(data.results)
}



const fetchFilteredMovies = async searchInputVal => {
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${searchInputVal}&page=${pages}&include_adult=false`)
    if (!response.ok) render404()
    const filteredData = await response.json()
    if (filteredData.results.length <= 0) render404()
    renderMovies(filteredData.results)
}

window.onload = async () => {
    await fetchMovies()
}
