import React, { useState, useEffect } from 'react';
import { useParams, Link, useRouteMatch, Route } from 'react-router-dom';
import { fetchMovieById } from '../../services/moviesAPI';
import { Cast } from '../Cast/Cast';
import { Reviews } from '../Reviews/Reviews';

export const MovieDetailsPage = () => {
  const [movie, setMovie] = useState({});
  const { movieId } = useParams();
  const { url, path } = useRouteMatch();
  useEffect(() => {
    fetchMovieById(movieId).then(setMovie);
  }, [movieId]);

  console.log(movie);
  console.log(useRouteMatch());

  return (
    <>
      {movie && (
        <>
          <Link to="/">
            <button>Go back</button>
          </Link>

          <div>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />

            <div>
              <h1>{movie.title}</h1>
              <p></p>
              <h2>Overview</h2>
              <p>{movie.overview}</p>

              <h2>Genres</h2>

              {movie.genres && (
                <ul>
                  {movie.genres.map(genre => (
                    <li key={genre.id}>{genre.name}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          <div>
            <h2>Additional information</h2>
            <ul>
              <li>
                <Link to={`${url}/cast`}>Cast</Link>
              </li>
              <li>
                <Link to={`${url}/reviews`}>Reviews</Link>
              </li>
            </ul>
          </div>

          <Route path={`${path}/cast`} exact component={Cast} />
          <Route path={`${path}/reviews`} exact component={Reviews} />
        </>
      )}
    </>
  );
};
