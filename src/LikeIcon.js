/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import Tooltip from "rc-tooltip";

class LikeIcon extends Component {
  render() {
    // eslint-disable-next-line jsx-a11y/anchor-has-content
    const { fill, overlay, onClick, placement } = this.props;
    return (
      <Tooltip placement={placement} overlay={overlay}>
        {fill ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            viewBox="0 0 36 36"
            onClick={onClick()}
          >
            <g fill="none" fillRule="evenodd">
              <circle cx="18" cy="18" r="18" opacity=".15" />
              <path
                fill="#FFF"
                d="M7.022 18.998A7.063 7.063 0 0 1 5 14.033C5 10.15 8.104 7 11.933 7c2.61 0 4.884 1.463 6.067 3.626C19.183 8.463 21.456 7 24.067 7 27.896 7 31 10.149 31 14.033a7.063 7.063 0 0 1-2.022 4.965L18 30 7.022 18.998z"
              />
            </g>
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            viewBox="0 0 36 36"
            onClick={onClick()}
          >
            <g fill="none" fillRule="evenodd">
              <circle cx="18" cy="18" r="18" opacity=".15" />
              <path
                stroke="#FFF"
                strokeWidth="2"
                d="M7.022 18.998A7.063 7.063 0 0 1 5 14.033C5 10.15 8.104 7 11.933 7c2.61 0 4.884 1.463 6.067 3.626C19.183 8.463 21.456 7 24.067 7 27.896 7 31 10.149 31 14.033a7.063 7.063 0 0 1-2.022 4.965L18 30 7.022 18.998z"
              />
            </g>
          </svg>
        )}
      </Tooltip>
    );
  }
}

LikeIcon.defaultProps = {
  onClick: () => {},
  fill: false,
  overlay: "Tooltip",
  placement: "bottomRight"
};

export default LikeIcon;
