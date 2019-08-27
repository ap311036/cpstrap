import React from "react";
import { Slider } from "cpstrap";
const movies = [
  {
    id: 1,
    image: "https://dkfhw9rzsr80z.cloudfront.net/CTS-TW-D0001-01/artworks/posters/CTS-TW-D0001-01-P544.jpg",
    imageBg: "https://dkfhw9rzsr80z.cloudfront.net/CTS-TW-D0001-01/artworks/key_visual/CTS-TW-D0001-01-K.jpg",
    title: "1983"
  },
  {
    id: 2,
    image: "https://dkfhw9rzsr80z.cloudfront.net/CAT-TW-001-A1030/artworks/posters/CAT-TW-001-A1030-P544.jpg",
    imageBg: "https://dkfhw9rzsr80z.cloudfront.net/CAT-TW-001-A1030/artworks/key_visual/CAT-TW-001-A1030-K.jpg",
    title: "Russian doll"
  },
  {
    id: 3,
    image: "https://dkfhw9rzsr80z.cloudfront.net/A3M-TW-D0001-01/artworks/posters/A3M-TW-D0001-01-P544.jpg",
    imageBg: "https://dkfhw9rzsr80z.cloudfront.net/A3M-TW-D0001-01/artworks/key_visual/A3M-TW-D0001-01-K.jpg",
    title: "The rain"
  },
  {
    id: 4,
    image: "https://dkfhw9rzsr80z.cloudfront.net/DIS-TW-001-A0220/artworks/posters/DIS-TW-001-A0220-P544.jpg",
    imageBg: "https://d3e8zlaf7euynn.cloudfront.net/l/assets/img/visual/TW/DIS-TW-001-A0220/newrelease/1080p.jpg",
    title: "Sex education"
  },
  {
    id: 5,
    image: "https://dkfhw9rzsr80z.cloudfront.net/WBT-TW-002-A1021/artworks/posters/WBT-TW-002-A1021-P544.jpg",
    imageBg: "https://dkfhw9rzsr80z.cloudfront.net/WBT-TW-002-A1021/artworks/key_visual/WBT-TW-002-A1021-K.jpg",
    title: "Elite"
  },
  {
    id: 6,
    image: "https://dkfhw9rzsr80z.cloudfront.net/DIS-TW-004-A1040/artworks/posters/DIS-TW-004-A1040-P544.jpg",
    imageBg: "https://dkfhw9rzsr80z.cloudfront.net/DIS-TW-004-A1040/artworks/key_visual/DIS-TW-004-A1040-K.jpg",
    title: "Black mirror"
  }
];
const Example = props => {
  return (
    <div>
      <Slider>
        {movies.map(movie => (
          <Slider.Item movie={movie} key={movie.id}>
            item1
          </Slider.Item>
        ))}
      </Slider>
      <Slider>
        {movies.map(movie => (
          <Slider.Item movie={movie} key={movie.id}>
            item1
          </Slider.Item>
        ))}
      </Slider>
    </div>
  );
};

export default Example;
