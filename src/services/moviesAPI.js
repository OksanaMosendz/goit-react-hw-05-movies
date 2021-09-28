const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = 'api_key=99de36a55cf863d0d94a04b9c8134a56';

export const fetchTrendingMoviesToday = () =>
  fetch(`${BASE_URL}/trending/movie/day?${API_KEY}`).then(resp => resp.json());

export const fetchMovieById = movieId =>
  fetch(`${BASE_URL}/movie/${movieId}?${API_KEY}`).then(resp => resp.json());

export const fetchMovieCast = movieId =>
  fetch(`${BASE_URL}/movie/${movieId}/credits?${API_KEY}`).then(resp => resp.json());

export const fetchMovieReviews = movieId =>
  fetch(`${BASE_URL}/movie/${movieId}/reviews?${API_KEY}`).then(resp => resp.json());

export const searchMovieByWord = searchWord =>
  fetch(`${BASE_URL}search/movie?${API_KEY}&query=${searchWord}`).then(resp => resp.json());
