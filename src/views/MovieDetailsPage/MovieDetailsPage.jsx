import React, { lazy, Suspense, useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  useParams,
  Link,
  useRouteMatch,
  Route,
  Switch,
  useLocation,
  useHistory,
} from 'react-router-dom';
import css from './MovieDetailsPage.module.css';
import { fetchMovieById } from '../../services/moviesAPI';
const Reviews = lazy(() => import('../Reviews/Reviews'));
const Cast = lazy(() => import('../Cast/Cast'));

export default function MovieDetailsPage() {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  const { url, path } = useRouteMatch();
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    fetchMovieById(movieId).then(setMovie);
  }, [movieId]);

  const onGoBack = () => history.push(location?.state?.from ?? '/');

  return (
    <>
      {movie && (
        <button type="button" onClick={onGoBack}>
          Go back
        </button>
      )}
      <Router>
        {movie && (
          <>
            <div className={css.MovieMainInfo}>
              <img
                className={css.MoviePoster}
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
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
            <hr />
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
            <hr />
          </>
        )}

        <Switch>
          <Suspense fallback="Loading">
            <Route path={`${path}/cast`} component={Cast} />
            <Route path={`${path}/reviews`} component={Reviews} />
          </Suspense>
        </Switch>
      </Router>
    </>
  );
}
