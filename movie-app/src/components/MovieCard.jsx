import React from "react";

const MovieCard = ({ movie }) => {
   return (
      <div className="movie">
         <div className="movie-image">
            <img alt='' src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/400'} />
         </div>
         <div className="movie-info">
            <p>{movie.Type}</p>
            <p>{movie.Title}</p>
            <p>{movie.Year}</p>
         </div>
      </div>
   )
}

export default MovieCard;