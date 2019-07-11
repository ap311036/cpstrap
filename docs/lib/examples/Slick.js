import React from 'react';
import { Slick } from 'cpstrap';

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

const data = [
  "https://dkfhw9rzsr80z.cloudfront.net/PTS-TW-D0001-01-0001/artworks/posters/PTS-TW-D0001-01-0001-E272.jpg",
  "https://dkfhw9rzsr80z.cloudfront.net/PTS-TW-D0001-01-0002/artworks/posters/PTS-TW-D0001-01-0002-E272.jpg",
  "https://dkfhw9rzsr80z.cloudfront.net/PTS-TW-D0001-01-0003/artworks/posters/PTS-TW-D0001-01-0003-E272.jpg",
  "https://dkfhw9rzsr80z.cloudfront.net/PTS-TW-D0001-01-0004/artworks/posters/PTS-TW-D0001-01-0004-E272.jpg",
  "https://dkfhw9rzsr80z.cloudfront.net/PTS-TW-D0001-01-0005/artworks/posters/PTS-TW-D0001-01-0005-E272.jpg",
  "https://dkfhw9rzsr80z.cloudfront.net/PTS-TW-D0001-01-0006/artworks/posters/PTS-TW-D0001-01-0006-E272.jpg",
  "https://dkfhw9rzsr80z.cloudfront.net/PTS-TW-D0001-01-0007/artworks/posters/PTS-TW-D0001-01-0007-E272.jpg",
  "https://dkfhw9rzsr80z.cloudfront.net/PTS-TW-D0001-01-0008/artworks/posters/PTS-TW-D0001-01-0008-E272.jpg",
  "https://dkfhw9rzsr80z.cloudfront.net/PTS-TW-D0001-01-0009/artworks/posters/PTS-TW-D0001-01-0009-E272.jpg",
  "https://dkfhw9rzsr80z.cloudfront.net/PTS-TW-D0001-01-0010/artworks/posters/PTS-TW-D0001-01-0010-E272.jpg",
  "https://dkfhw9rzsr80z.cloudfront.net/PTS-TW-D0001-01-0011/artworks/posters/PTS-TW-D0001-01-0011-E272.jpg"
];

const Example = () => {
  return (
    <div>
      <Slick settings={settings} title="集數">
        {data.map((item, index) => {
          return <img src={item} key={index} alt="poster" />;
        })}
      </Slick>
    </div>
  );
};

export default Example;
