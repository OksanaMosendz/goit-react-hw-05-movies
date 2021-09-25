const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = 'api_key=99de36a55cf863d0d94a04b9c8134a56';

export const fetchTrendingMoviesToday = () =>
  fetch(`${BASE_URL}/trending/movie/day?${API_KEY}`).then(resp => resp.json());

export const fetchMovieById = movieId =>
  fetch(`${BASE_URL}/movie/${movieId}?${API_KEY}`).then(resp => resp.json());
