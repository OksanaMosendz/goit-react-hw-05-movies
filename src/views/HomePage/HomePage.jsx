import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { trendingToday } from '../../services/moviesAPI';

export const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    trendingToday().then(trendMovies => setMovies(trendMovies.results));
  }, [setMovies]);

  console.log(movies);
  console.log(useParams());

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
