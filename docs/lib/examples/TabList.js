import React from "react";
import { TabList } from "cpstrap";

let data = [
  "劇情",
  "古裝/史詩",
  "犯罪",
  "動作/冒險",
  "英國歷史",
  "社會議題",
  "男性情誼",
  "名著改編",
  "英式古裝",
  "中古世紀",
  "復仇電影",
  "搶劫犯罪",
  "劫富濟貧",
  "犯罪劇情",
  "古裝動作",
  "復仇動作",
  "浪漫冒險"
];

const _onClick = item => {
  alert(item)
};

const Example = props => {
  return (
    <div className="row">
      <div className="col-lg-12">
        <TabList>
          {data.map((item, index)=>{
            return (
              <div className="item" key={index} onClick={() => _onClick(item)}>
                {item}
              </div>
            );
          })}
        </TabList>
      </div>
    </div>
  );
};

export default Example;
