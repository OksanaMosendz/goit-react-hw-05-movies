import React, { useState, useEffect } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import { searchMovieByWord } from '../../services/moviesAPI';
import css from './MoviesPage.module.css';
import queryString from 'query-string';

export const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [searchWord, setSearchWord] = useState('');
  const location = useLocation();
  const history = useHistory();
  const queryParams = queryString.parse(location.search);
  const { query } = queryParams;
  useEffect(() => {
    if (query) {
      searchMovieByWord(query).then(movies => setMovies(movies.results));
    } else return;
  }, [query]);

  useEffect(() => {
    if (searchWord) {
      searchMovieByWord(searchWord).then(movies => setMovies(movies.results));
    } else return;
  }, [searchWord]);

  const onHandleSubmitForm = e => {
    e.preventDefault();
    if (inputValue) {
      setSearchWord(inputValue);
      history.push({
        // pathname: location.pathname,
        search: `query=${inputValue}`,
      });
      setInputValue('');
    } else return;
  };

  return (
    <>
      <form className={css.Form} onSubmit={onHandleSubmitForm}>
        <input
          className={css.Input}
          type="text"
          onChange={e => setInputValue(e.target.value)}
          value={inputValue}
          autoComplete="off"
          autoFocus
        />
        <button type="submit">Search</button>
      </form>

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
