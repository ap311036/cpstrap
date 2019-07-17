import React from "react";
import { Slick, Card } from "cpstrap";

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
    <div
      style={{
        padding: "0 4vw 30px 4vw",
        overflow: 'hidden'
      }}
    >
      <Slick title="集數">
        {data.map((item, index) => {
          return (
            <Card
              src={item}
              title={`第 ${index + 1} 集`}
              playicon={true}
              key={index}
              labelText={index <= 3 && "免費"}
            >
              <span>
                <img src={item} alt="poster" />
              </span>
            </Card>
          );
        })}
      </Slick>
    </div>
  );
};

export default Example;
