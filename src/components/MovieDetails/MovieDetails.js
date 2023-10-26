import React from 'react';
import { useState } from 'react';


function MovieDetails({ movie, onFavoriteToggle, favorites }) {
  
  if (!movie) {
    return (
      <div className="header-placeholder">
        <h1>Welcome To The Star Wars Gallery</h1>
      </div>
    );
  }

    const isFavorite = favorites.some(fav => fav.episode_id === movie.episode_id);

    return (
      <div className="header-content">
        <img className="big-image" 
             src={`/${movie.episode_id}.jpg`}
             alt={movie.title} />
        <div className="overlay-content">
          <h1>
            {movie.title}
          </h1>
          <button onClick={() => onFavoriteToggle(movie)}>
            {isFavorite ? "☆" : "★"}
          </button>
        </div>
      </div>
    );
}

export default MovieDetails;
