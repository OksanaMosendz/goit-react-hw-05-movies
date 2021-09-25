import { useState } from 'react';
import { useParams } from 'react-router';
import { fetchMovieById } from '../../services/moviesAPI';

export const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});

  fetchMovieById(movieId).then(fetchedMovie => {
    setMovie(fetchedMovie);
  });

  return (
    <div>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />

      <div>
        <h1>{movie.title}</h1>

        <h2>Overview</h2>
        <p>{movie.overview}</p>

        <h3>Genres</h3>
        <ul>
          {movie.genres.map(genre => (
            <li key={genre.id}>{genre.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
