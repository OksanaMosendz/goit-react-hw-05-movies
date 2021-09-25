import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchTrendingMoviesToday } from '../../services/moviesAPI';

export const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchTrendingMoviesToday().then(trendMovies =>
      setMovies(trendMovies.results),
    );
  }, [setMovies]);

  return (
    <>
      <h1>Trending Today</h1>
      {movies && (
        <ul>
          {movies.map(movie => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
