import React, { useState, useEffect } from 'react';
import MovieList from '@/components/MovieList/MovieList';
import MovieDetails from '@/components/MovieDetails/MovieDetails';
import Loading from '@/components/Loading/Loading';

// added the handleFavorite function to the MovieDetails component. the component didnt revieved the prop needed to toggle the favorite status of the movie.

function App() {
  const initialFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
  const [favorites, setFavorites] = useState(initialFavorites);
  const [selectedMovie, setSelectedMovie] = useState(null);


  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const handleFavorite = (movie) => {
    if (favorites.some(fav => fav.episode_id === movie.episode_id)) {
      setFavorites(favorites.filter(fav => fav.episode_id !== movie.episode_id));
    } else {
      setFavorites([...favorites, movie]);
    }
  };

  function handleMovieSelect(movie) {
    setSelectedMovie(movie);
  }


  return (
    <>

<div className="app-container">
          <div className='header'>
            <MovieDetails movie={selectedMovie} favorites={favorites} onFavoriteToggle={handleFavorite} />
          </div> 
          <div className="thumbnails">
            <MovieList onMovieSelect={handleMovieSelect}   />
          </div>

    </div>
  </>
  );

}

export default App;