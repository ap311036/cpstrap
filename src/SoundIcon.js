/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import classNames from "classnames";

const SoundIcon = props => {
  // eslint-disable-next-line jsx-a11y/anchor-has-content
  const { muted, className, onClick } = props;
  const classes = classNames(className, "sound-icon", {
    muted: muted
  });
  return <div className={classes} onClick={onClick()} />;
};

SoundIcon.defaultProps = {
  onClick: () => {},
  muted: false
};

export default SoundIcon;
