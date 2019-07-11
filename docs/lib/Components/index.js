import React from "react";
import Content from "../UI/Content";

const items = [
  {
    name: "Button",
    to: "/components/button/"
  },
  {
    name: "ButtonGroup",
    to: "/components/buttongroup/"
  },
  {
    name: "MovieCard",
    to: "/components/moviecard/"
  },
  {
    name: "Clamp",
    to: "/components/clamp/"
  },
  {
    name: "ExclusiveLabel",
    to: "/components/exclusivelabel/"
  },
  {
    name: "LikeIcon",
    to: "/components/likeicon/"
  },
  {
    name: "PlayIcon",
    to: "/components/playicon/"
  },
  {
    name: "MetaData",
    to: "/components/metadata/"
  },
  {
    name: "Slick",
    to: "/components/slick/"
  },
  {
    name: "ShareIcon",
    to: "/components/shareicon/"
  },
  {
    name: "VideoLabel",
    to: "/components/videolabel/"
  }
];

function Components(props) {
  return <Content title="Components" items={items} {...props} />;
}

export default Components;
