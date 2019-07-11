import React from "react";

const MovieCard = ({src, type}) => {
  return (
    <div className="movie-card">
      <div className="movie-card-inner">
        <div className="movie-card-image-placeholder" />
        <img
          src="https://dkfhw9rzsr80z.cloudfront.net/PTS-TW-D0001-01-0001/artworks/posters/PTS-TW-D0001-01-0001-E272.jpg"
          alt="poster"
        />
      </div>
      <div className="movie-card-zoom">zoom</div>
    </div>
  );
};

MovieCard.defaultProps = {
  onClick: () => {}
};

export default MovieCard;
