import React, { useState, useEffect } from 'react';
import { useParams, Link, useRouteMatch, Route } from 'react-router-dom';
import { fetchMovieById } from '../../services/moviesAPI';
import { Reviews } from '../Reviews/Reviews';
import { Cast } from '../Cast/Cast';

export const MovieDetailsPage = () => {
  const [movie, setMovie] = useState({});
  const { movieId } = useParams();
  const { url } = useRouteMatch();
  console.log(url);
  useEffect(() => {
    fetchMovieById(movieId).then(setMovie);
  }, [movieId]);

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
            {/* // ) : (
            //   <img
            //     src={`https://i2.wp.com/rollingfilmfestival.com/wp-content/uploads/2021/01/no-poster-available.png?resize=1080%2C1526&ssl=1}`}
            //     alt={movie.title}
            //   />
            // )} */}

            <div>
              <h1>{movie.title}</h1>
              <p>User Score: {movie.vote_average * 10}%</p>
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

          <Route path="/movies/:movieId/cast">
            <Cast />
          </Route>
          <Route path="/movies/:movieId/reviews">
            <Reviews />
          </Route>
        </>
      )}
    </>
  );
};
