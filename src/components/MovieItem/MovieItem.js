import React from 'react';

// Error: the onMovieSelect function call is missing the movie argument. the function needs to get the movie argument in order to know which movie is being choosen.

function MovieItem({ movie, onMovieSelect }) {
  return (
    <div key={movie.episode_id} 
     onClick={() => onMovieSelect(movie)} 
     className='thumbnail'
     style={{ backgroundImage: `url(/${movie.episode_id}.jpg)`
     }}>
   <p className='movie-title'>{movie.title}</p>
</div>

  );
}

export default MovieItem;