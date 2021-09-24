const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = 'api_key=99de36a55cf863d0d94a04b9c8134a56';

export const trendingToday = () =>
  fetch(`${BASE_URL}/trending/movie/day?${API_KEY}`).then(resp => resp.json());
