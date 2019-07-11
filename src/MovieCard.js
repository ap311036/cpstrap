import React from "react";

const MovieCard = ({src, type}) => {
  return (
    <div className="movie-card">
    card
    </div>
  );
};

MovieCard.defaultProps = {
  onClick: () => {}
};

export default MovieCard;

      // <div className="movie-card-inner">
      //   <img
      //     className="movie-card-placeholder"
      //     src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARAAAACZAQMAAAGqC8dkAAAAA1BMVEUAAACnej3aAAAAAXRSTlMAQObYZgAAABxJREFUWMPtwTEBAAAAwqD1T20MH6AAAAAAAPgbFa4AARwCsQoAAAAASUVORK5CYII="
      //     alt="placeholder"
      //   />
      //   <div className="movie-card-image-placeholder" />
      //   <img
      //     className="movie-card-image"
      //     src="https://dkfhw9rzsr80z.cloudfront.net/PTS-TW-D0001-01-0001/artworks/posters/PTS-TW-D0001-01-0001-E272.jpg"
      //     alt="poster"
      //   />
      // </div>
      // <div className="movie-card-content">
      //   1.第一集
      // </div>
      // <div className="movie-card-zoom" style={{ display: "none" }}>
      //   zoom
      // </div>