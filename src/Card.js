import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import PlayIcon from "./PlayIcon";
import Label from "./Label";
import ImagePlaceHolder from "./ImagePlaceHolder";
const propTypes = {
  children: PropTypes.node
};
class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false,
      zoom: false
    };
    this._onMouseEnterHandler = this._onMouseEnterHandler.bind(this);
    this._onMouseLeaveHandler = this._onMouseLeaveHandler.bind(this);
    this.goItempage = this.goItempage.bind(this);
    this.hoverTimeOut = null;
  }
  _onMouseEnterHandler() {
    const { hover } = this.state;

    clearTimeout(this.hoverTimeOut);

    if (!hover) {
      console.log("onEnter");
      this.setState(
        {
          hover: true
        },
        this.activeZoom
      );
    }
  }
  _onMouseLeaveHandler() {

    clearTimeout(this.hoverTimeOut);

    this.setState({
      zoom: false
    });

    setTimeout(() => {
      if (this.poster) {
        console.log("onLeave");
        this.setState(
          {
            hover: false
          },
          this.inactiveZoom
        );
      }
    }, 400);
  }
  inactiveZoom() {
    const zoomEl = this.zoom;
    setTimeout(() => {
      zoomEl.classList.remove("left", "right", "center", "bottom");
    }, 400);
  }
  activeZoom() {
    // do something for hover/hover sibling item if you want.
    const { zoomEffect, onEnter, videoId } = this.props;

    if (!this.zoom || typeof window === "undefined") {
      return;
    }

    const wrapperEl = this.poster;
    const zoomEl = this.zoom;
    const elRect = wrapperEl.getBoundingClientRect();
    let hasPositionChanged = false;
    // let target = wrapperEl.parentNode.parentNode.parentNode;
    // console.log(target.offsetWidth);
    if (
      elRect.left < 0 ||
      elRect.left + window.innerWidth * 0.04 > window.innerWidth
    ) {
      return;
    }

    if (elRect.right + elRect.width > window.innerWidth) {
      hasPositionChanged = true;
      zoomEl.classList.add("right");
    }

    if (elRect.left < 120) {
      hasPositionChanged = true;
      zoomEl.classList.add("left");
    }

    if (elRect.top < 250 && zoomEffect === "zoom") {
      hasPositionChanged = true;
      zoomEl.classList.add("top");
    }

    if (!hasPositionChanged) {
      zoomEl.classList.add("center");
    }

    this.hoverTimeOut = setTimeout(() => {
      if (wrapperEl) {
        this.setState({ zoom: true }, () => this.onZoomOut());
      }
      onEnter(videoId);
    }, 400);
  }
  onZoomOut() {
    console.log("onZoomOut");
  }
  goItempage() {
    console.log("goItempage");
  }
  render() {
    const { src, title, labelText, children, playicon } = this.props;
    const { zoom, hover } = this.state;
    const wrapperClass = classNames("movie-card", { zoom: zoom });
    const zoomClass = classNames("movie-card-zoom", { hover: hover });
    return (
      <div
        onMouseOver={this._onMouseEnterHandler}
        onMouseLeave={this._onMouseLeaveHandler}
        className={wrapperClass}
        ref={ref => (this.poster = ref)}
      >
        <div className="movie-card-inner">
          <div
            onClick={this.goItempage}
            ref={ref => (this.coverWrapper = ref)}
            className="card-image-wrapper"
          >
            <img
              className="movie-card-placeholder"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARAAAACZAQMAAAGqC8dkAAAAA1BMVEUAAACnej3aAAAAAXRSTlMAQObYZgAAABxJREFUWMPtwTEBAAAAwqD1T20MH6AAAAAAAPgbFa4AARwCsQoAAAAASUVORK5CYII="
              alt="placeholder"
            />
            <ImagePlaceHolder />
            <img className="movie-card-image" src={src} alt="poster" />
            {playicon && <PlayIcon />}
          </div>
          <div className="movie-card-content">
            <div className="movie-card-content-title">{title}</div>
            {labelText && <Label text={labelText} />}
          </div>
        </div>
        {
          <div className={zoomClass} ref={ref => (this.zoom = ref)}>
            {hover && children && children}
          </div>
        }
      </div>
    );
  }
}

Card.defaultProps = {
  onClick: () => {},
  onEnter: () => {},
  playicon: false,
  children: <div />
};

Card.propTypes = propTypes;

export default Card;
