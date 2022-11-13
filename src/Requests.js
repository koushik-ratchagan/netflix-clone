const API_KEY = "ad78602d93858fee7f725622b9b68397";


const request ={

    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOrginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_generes=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_generes=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_generes=27`,
    fetchRomanceMovies: `/discover/tv?api_key=${API_KEY}&with_genres=18`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_generes=99`,


}

export default request

//https://api.themoviedb.org/3/discover/movie?api_key=ad78602d93858fee7f725622b9b68397&with_generes=10749 