/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const ShareIcon = ({onClick, type}) => {
  return (
    // eslint-disable-next-line jsx-a11y/anchor-has-content
    <a
      className={`shareIcon shareIcon-${type}`}
      target="_blank"
      onClick={() => onClick()}
    />
  );
};

ShareIcon.defaultProps = {
  type: 'facebook',
  onClick: () => {}
};

export default ShareIcon;
