import { trendingToday } from '../../services/moviesAPI';
import { useState, useEffect } from 'react';

export const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    trendingToday().then(data => setMovies(data.results));
  }, [setMovies]);
  console.log(movies);

  return (
    <div>
      <h1>Trending Today</h1>
      <ul>
        {movies.map(movie => (
          <li>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
};
