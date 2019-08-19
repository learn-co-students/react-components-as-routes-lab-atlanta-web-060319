import React from 'react';
import { movies } from '../data';

const Movies = () => {
  let movieDivs = movies.map(movie => {
    return <div><p>Title: {movie.title}</p> <p>Time: {movie.time}</p> <p>Genres:</p> <ul> {movie.genres.map(genre =>{
      return <li>{genre}</li>
    })} </ul> </div>
  })
  return (
    <div>
    <h1>Movies Page</h1>
        {movieDivs}
    </div>
  );
};

export default Movies;
