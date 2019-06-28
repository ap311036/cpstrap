import React from "react";

const PlayIcon = ({ t, onClick, type }) => {
  return (
    <div className="play-icon" onClick={() => onClick()}>
      <div className="play-icon-media" />
      {type === "trailer" && (
        <div className="play-icon-label">
          {t ? t(`poster-movie.quick-view.button.@trailer`) : "試播片"}
        </div>
      )}
      {type === "preview" && (
        <div className="play-icon-label">
          {t ? t(`item-layout.video-intro.button.@preview`) : "預告片"}
        </div>
      )}
    </div>
  );
};

PlayIcon.defaultProps = {
  type: "", // trailer, preview,
  onClick: () => {}
};

export default PlayIcon;
