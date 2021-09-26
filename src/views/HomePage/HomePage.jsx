import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchTrendingMoviesToday } from '../../services/moviesAPI';
import css from './HomePage.module.css';
export const HomePage = () => {
  const [movies, setMovies] = useState(null);
  const location = useLocation();
  useEffect(() => {
    fetchTrendingMoviesToday().then(trendMovies =>
      setMovies(trendMovies.results),
    );
  }, [setMovies]);

  return (
    <>
      <h1 className={css.PageTitle}>Trending Today</h1>
      {movies && (
        <ul className={css.MovieList}>
          {movies.map(movie => (
            <li className={css.MovieCard} key={movie.id}>
              <Link
                className={css.MovieLink}
                to={{
                  pathname: `/movies/${movie.id}`,
                  state: { from: location },
                }}
              >
                {movie.poster_path ? (
                  <img
                    className={css.MoviePoster}
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                  />
                ) : (
                  <img
                    className={css.MoviePoster}
                    src={`https://lh3.googleusercontent.com/proxy/BoIwbraF8BKH_b_c63bLH0S9C5PL2mZ1ADqVonMeN2hse_9Y591n7hvfCDinBuccTq410-NLw7ZKM_PAr1o7Re4-I611tnDBzvLVVL0Q8N-RhB7M_gOkfX9Ct8a8YEIzsmi37J8etPppZiHKG8_89g`}
                    alt={movie.title}
                  />
                )}
                <p className={css.MovieTitle}>{movie.title}</p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
