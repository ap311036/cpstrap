import React from "react";
import { Slick, Avatar } from "cpstrap";

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
        slidesToShow: 9,
        slidesToScroll: 9
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
  {
    name: "林君陽",
    src:
      "https://dd73pvjtftvi1.cloudfront.net/chunyanglin/chunyanglin-400-1550472615963.jpg"
  },
  {
    name: "編劇 呂蒔媛",
    src:
      "https://dd73pvjtftvi1.cloudfront.net/shihyuanluwriter/shihyuanluwriter-235-1554876486283.jpg"
  },
  {
    name: "賈靜雯",
    src:
      "https://dd73pvjtftvi1.cloudfront.net/alyssachia/alyssachia_1463976396.0721.jpg"
  },
  {
    name: "溫昇豪",
    src:
      "https://dd73pvjtftvi1.cloudfront.net/jameswen/jameswen_1462763757.0199.jpg"
  },
  {
    name: "吳慷仁",
    src:
      "https://dd73pvjtftvi1.cloudfront.net/kangrenwu/kangrenwu-400-1503479935458.jpg"
  },
  {
    name: "周采詩",
    src:
      "https://dd73pvjtftvi1.cloudfront.net/tracychou/tracychou-235-1550472683390.jpg"
  },
  {
    name: "曾沛慈",
    src:
      "https://dd73pvjtftvi1.cloudfront.net/petstseng/petstseng-400-1550472649106.jpg"
  },
  {
    name: "林哲熹",
    src:
      "https://dd73pvjtftvi1.cloudfront.net/j.c.lin/j.c.lin-400-1515307957616.jpg"
  },
  {
    name: "陳妤",
    src:
      "https://dd73pvjtftvi1.cloudfront.net/yuchen/yuchen-235-1510887939750.jpg"
  },
  {
    name: "王可元",
    src:
      "https://dd73pvjtftvi1.cloudfront.net/koyuanwang/koyuanwang-235-1550382085310.jpg"
  },
  {
    name: "洪都拉斯",
    src:
      "https://dd73pvjtftvi1.cloudfront.net/honduras/honduras_1466764179.206.jpg"
  },
  {
    name: "于卉喬",
    src:
      "https://dd73pvjtftvi1.cloudfront.net/roseyu/roseyu-400-1550382040319.jpg"
  },
  {
    name: "巴戈",
    src: "https://dd73pvjtftvi1.cloudfront.net/geba/geba_1494212890.3984.jpg"
  },
  {
    name: "蕭瑤",
    src:
      "https://dd73pvjtftvi1.cloudfront.net/yaohsiao/yaohsiao-235-1550381965615.jpg"
  },
  {
    name: "檢場",
    src:
      "https://dd73pvjtftvi1.cloudfront.net/jianchang/jianchang-400-1550382124578.jpg"
  },
  {
    name: "謝瓊煖",
    src:
      "https://dd73pvjtftvi1.cloudfront.net/cherryhsieh/cherryhsieh-400-1550382159045.jpg"
  },
  {
    name: "林予晞",
    src:
      "https://dd73pvjtftvi1.cloudfront.net/allisonlin/allisonlin-400-1550472578464.jpg"
  },
  {
    name: "施名帥",
    src:
      "https://dd73pvjtftvi1.cloudfront.net/mingshuaishih/mingshuaishih-400-1524461670993.jpg"
  },
  {
    name: "劉士民",
    src:
      "https://dd73pvjtftvi1.cloudfront.net/colinliu/colinliu-235-1551070183144.jpg"
  },
  {
    name: "謝麗金",
    src:
      "https://dd73pvjtftvi1.cloudfront.net/kimhsieh/kimhsieh-400-1551070668932.jpg"
  },
  {
    name: "譚艾珍",
    src:
      "https://dd73pvjtftvi1.cloudfront.net/aichentan/aichentan-400-1551070059408.jpg"
  },
  {
    name: "阿布",
    src:
      "https://dd73pvjtftvi1.cloudfront.net/brianchou/brianchou-235-1551070134963.jpg"
  },
  {
    name: "盛竹如",
    src:
      "https://dd73pvjtftvi1.cloudfront.net/zurusheng/zurusheng-400-1551071532213.jpg"
  }
];

const Example = () => {
  return (
    <div
      style={{
        padding: "0 4vw 30px 4vw",
        overflow: 'hidden'
      }}
    >
      <Slick settings={settings} title="導演與卡司">
        {data.map((item, index) => {
          return (
            <Avatar
              key={index}
              name={item.name}
              src={item.src}
            />
          );
        })}
      </Slick>
    </div>
  );
};

export default Example;
