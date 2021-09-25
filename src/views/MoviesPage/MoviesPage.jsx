import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { searchMovieByWord } from '../../services/moviesAPI';

export const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [searchWord, setSearchWord] = useState('');

  useEffect(() => {
    if (searchWord) {
      searchMovieByWord(searchWord).then(movies => setMovies(movies.results));
    } else return;
  }, [searchWord]);

  const onHandleSubmitForm = e => {
    e.preventDefault();
    setSearchWord(inputValue);
    setInputValue('');
  };

  return (
    <>
      <form onSubmit={onHandleSubmitForm}>
        <input
          type="text"
          onChange={e => setInputValue(e.target.value)}
          value={inputValue}
          autoComplete="off"
        />
        <button type="submit">Search</button>
      </form>

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
