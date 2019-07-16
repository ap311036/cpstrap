import React from "react";
import Slider from "react-slick";

class Slick extends React.Component {
  render(){
    const { title, children, settings, className} = this.props;
    return (
      <div className={className}>
        <span className="slick-title">{title}</span>
        <Slider {...settings}>{children}</Slider>
      </div>
    );
  }
};

const settings = {
  draggable: false,
  infinite: false,
  centerMode: false,
  variableWidth: false,
  mobileFirst: true,
  slidesToShow: 2,
  slidesToScroll: 2,
  responsive: [
    {
      breakpoint: 2000,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 6
      }
    },
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 5
      }
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    }
  ]
};

Slick.defaultProps = {
  settings: settings
};

export default Slick;
