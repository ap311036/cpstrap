import React from "react";
import classNames from "classnames";
import PlayIcon from "./PlayIcon";
import ImagePlaceHolder from "./ImagePlaceHolder";
import Label from "./Label";
import Clamp from "./Clamp";

const EpisodeCard = (props) => {
  const { src, className, title = "1. 受害者", subtitle = "54 分" } = props;
  const classes = classNames(className, "episode-card");
  return (
    <div className={classes}>
      <div className="episode-card-top">
        <div className="episode-card-left">
          <ImagePlaceHolder />
          <img className="episode-card-image" src={src} alt="poster" />
          <PlayIcon />
        </div>
        <div className="episode-card-right">
          <Label text={"免費"} />
          <div className="episode-card-title">{title}</div>
          <div className="episode-card-subtitle">{subtitle}</div>
          <div className="episode-card-description">
            <Clamp
              afterEllipsisText="更多"
              text={`品味新聞台編輯台主管宋喬安的兒子是二年前李曉明無差別殺人事件的罹難者，先生劉昭國是網路先驅報的創辦人，夫妻在兒子走後因現實磨難漸行漸遠準備離婚，但11歲的女兒行為卻日漸失序，為了女兒，二人被迫必須重新檢視自己身上的傷口。李曉明的辯護律師王赦，在李曉明死刑定讞之後，仍想要了解其犯罪動機，鍥而不捨的他，開啟了眾人命運的連結`}
              maxLine={2}
            />
          </div>
        </div>
      </div>
      <div className="episode-card-bottom">
        <Clamp
          afterEllipsisText="更多"
          text={`品味新聞台編輯台主管宋喬安的兒子是二年前李曉明無差別殺人事件的罹難者，先生劉昭國是網路先驅報的創辦人，夫妻在兒子走後因現實磨難漸行漸遠準備離婚，但11歲的女兒行為卻日漸失序，為了女兒，二人被迫必須重新檢視自己身上的傷口。李曉明的辯護律師王赦，在李曉明死刑定讞之後，仍想要了解其犯罪動機，鍥而不捨的他，開啟了眾人命運的連結`}
          maxLine={2}
        />
      </div>
    </div>
  );
};

export default EpisodeCard;
