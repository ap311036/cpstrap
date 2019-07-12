import React from "react";
import PropTypes from "prop-types";
import PlayIcon from "./PlayIcon";
import Label from "./Label";
const propTypes = {
  children: PropTypes.node
};
const Card = ({ src, title, children, playicon, labelText }) => {
  return (
    <div className="movie-card">
      <div className="movie-card-inner">
        <img
          className="movie-card-placeholder"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARAAAACZAQMAAAGqC8dkAAAAA1BMVEUAAACnej3aAAAAAXRSTlMAQObYZgAAABxJREFUWMPtwTEBAAAAwqD1T20MH6AAAAAAAPgbFa4AARwCsQoAAAAASUVORK5CYII="
          alt="placeholder"
        />
        <div className="movie-card-image-placeholder" />
        <img className="movie-card-image" src={src} alt="poster" />
        {playicon && <PlayIcon />}
      </div>
      <div className="movie-card-content">
        <div className="movie-card-content-title">{title}</div>
        {labelText && <Label text={labelText} />}
      </div>
      <div className="movie-card-zoom">
        {children && children}
      </div>
    </div>
  );
};

Card.defaultProps = {
  onClick: () => {}
};

Card.propTypes = propTypes;

export default Card;
