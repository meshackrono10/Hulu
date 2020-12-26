const API_KEY = `e28a3834ccab3c52d4b5e5210cd77ad3`;

export default {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-us`,
  fetchTopRated: `/discover/tv?api_key${API_KEY}&with_network=213`,
  fetchActionMovies: `/movie/top_rated?api_key=${API_KEY}&language=en-us`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchHerrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchMystery: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchSciFi: `/discover/movie?api_key=${API_KEY}&with_genres=99 `,
  fetchWestern: `/discover/movie?api_key=${API_KEY}&with_genres=99 `,
  fetchAnimation: `/discover/movie?api_key=${API_KEY}&with_genres=99 `,
  fetchTV: `/discover/movie?api_key=${API_KEY}&with_genres=99 `,
};
