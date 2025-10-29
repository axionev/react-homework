import React from 'react';

const Movie = ({ movie }) => {
  return (
    <div>
      <p>Name: {movie.name}</p>
      <p>Year: {movie.year}</p>
      <p>Main Actor: {movie.mainActor}</p>
      <p>Oscar: {movie.Oscar}</p>
      <p>IMDb: {movie.Imdb}</p>
      <p>Box Office: {movie.boxOffice}</p>
    </div>
  );
};

export default Movie;