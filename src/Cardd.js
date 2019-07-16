import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import PlayIcon from "./PlayIcon";
import ImagePlaceHolder from "./ImagePlaceHolder";
import Label from "./Label";
import LikeIcon from "./LikeIcon";

const propTypes = {
  children: PropTypes.node
};
class Card extends React.Component {
	constructor(props) {
		super(props);
		this.goItempage = this.goItempage.bind(this)
		this.onMouseEnter = this.onMouseEnter.bind(this)
		this.onMouseLeave = this.onMouseLeave.bind(this)
		this.state = {
			hover: false,
			zoom: false,
		};
		this.hoverTimeOut = null
  }

	activeZoom() {
		// do something for hover/hover sibling item if you want.
		const { poster, onEnter, zoomEffect } = this.props;

		if (!this.zoom || typeof window === "undefined" ) {
			return;
		}

		const wrapperEl = this.poster
		const zoomEl = this.zoom;
		const elRect = wrapperEl.getBoundingClientRect();
    let hasPositionChanged = false;

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
    
    if (elRect.top < 250 && zoomEffect === 'zoom') {
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
			onEnter()
		}, 400)

  }
  
  onZoomOut() {
    if(!this.state.zoom) return;
    console.log("onZoomOut");
  }

	inactiveZoom(){
		const zoomEl = this.zoom;
		setTimeout(() => {
			zoomEl.classList.remove("left", "right", "center", "bottom");
		}, 400);
	};

	onMouseEnter() {
		const { hover } = this.state
    const { viewport, isDesktop, hasQuickView } = this.props;

		// if (viewport.width < 960 || !isDesktop || !hasQuickView ) return

		// cleanup all zoom effect
		clearTimeout(this.hoverTimeOut);

    // set hover active, and detect position then addClass
    // 如果state.hover已經是true就不要再setState跟呼叫callback了
    if(!hover) {
      this.setState({
        hover: true
      }, this.activeZoom)
    }
	}

	onMouseLeave() {
		const { onLeave, viewport, isDesktop, hasQuickView } = this.props;

		// if (viewport.width < 960 || !isDesktop || !hasQuickView ) return

		clearTimeout(this.hoverTimeOut);

		onLeave()

		// $(zoomEl).parents('.slick-track').find('.slick-slide').css('transform', 'translate3d(0,0,0)')

		this.setState({
			zoom: false,
		});

		setTimeout(() => {
			if (this.poster) {
				this.setState({
					hover: false,
				}, this.inactiveZoom);
			}
		}, 400)
	}

	goItempage() {
    console.log('goItempage');
	}

	onOpenPlayer(videoType = 'movie') {
    console.log('onOpenPlayer');
	}

	render() {
			const { isOffTheShelt, hover, zoom} = this.state
			const { title, playicon, labelText, src } = this.props;

			const wrapperClass = classNames(
        'movie-card', 
        { 'zoom': zoom },
        { 'off-the-shelt': isOffTheShelt }
      );

			const precover =
			"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARAAAACZAQMAAAGqC8dkAAAAA1BMVEUAAACnej3aAAAAAXRSTlMAQObYZgAAABxJREFUWMPtwTEBAAAAwqD1T20MH6AAAAAAAPgbFa4AARwCsQoAAAAASUVORK5CYII=";

      const cardContentClass = classNames('movie-card-content',
        { 'movie-card-content-small': true }
      );

      const cardContentTitleClass = classNames('movie-card-content-title'
      );

			const zoomClass = classNames('movie-card-zoom',
				{'hover': hover}
      );
      
      const cardContentActionClass = classNames('movie-card-contain-action'
      );
      
			return (
        <div
          onMouseOver={this.onMouseEnter}
          onMouseLeave={this.onMouseLeave}
          className={wrapperClass}
          ref={ref => (this.poster = ref)}
        >
          {/* first view object */}
          <div
            className="movie-card-inner"
            style={{
              opacity: zoom ? 0 : 1
            }}
          >
            <div
              onClick={this.goItempage}
              ref={ref => (this.coverWrapper = ref)}
              className="movie-card-image-wrapper"
            >
              <img
                className="movie-card-image-placeholader"
                src={precover}
                alt="ImagePlaceHolder"
              />
              <ImagePlaceHolder />
              <img
                alt="poster"
                ref={ref => (this.cover = ref)}
                className="movie-card-image"
                src={src}
                onLoad={() => {
                  if (this.cover) {
                    this.cover.style.opacity = 1;
                  }
                }}
              />
              {playicon && <PlayIcon />}
            </div>

            <div className={cardContentClass} onClick={this.goItempage}>
              <div className={cardContentTitleClass}>{title}</div>
              <div className={classNames("tags-wrapper")}>
                <Label text={labelText} />
              </div>
            </div>

            {<div className="movie-card-shadow-layer" />}
          </div>

          {/* zoom object */}
          
            <div className={zoomClass} ref={ref => (this.zoom = ref)}>
              {
                <div
                  className="movie-card-with-video"
                  style={{ background: "#3a3a3a" }}
                >
                  <div
                    onClick={this.goItempage}
                    className="movie-card-image-wrapper"
                  >
                    <img
                      alt="placeHolder"
                      className="movie-card-image-placeholader"
                      src={precover}
                    />
                    <ImagePlaceHolder />
                    <img
                      alt="poster"
                      ref={ref => (this.zoomCover = ref)}
                      className="movie-card-image"
                      src={src}
                      onLoad={() => {
                        if (this.cover) {
                          this.zoomCover.style.opacity = 1;
                        }
                      }}
                    />
                  </div>

                  <div className="movie-card-content movie-card-content-slide">
                    <div className="movie-card-contain-top">
                      <div
                        onClick={this.goItempage}
                        className="movie-card-contain-head"
                      >
                        {title}
                      </div>
                      <div className={cardContentActionClass}>
                        <LikeIcon />
                      </div>
                    </div>
                  </div>
                </div>
              }
            </div>
          
        </div>
      );
	}
}

Card.defaultProps = {
	hasQuickView: true,
  isIgnoreOffTheShelt: false,
	zoomEffect: 'slide', // slide
	onEnter: () => {},
	onLeave: () => {}
}

export default Card;
