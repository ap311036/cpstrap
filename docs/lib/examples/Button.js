import React from 'react';
import { Button } from 'cpstrap';

const Example = (props) => {
  return (
    <div>
      <div>
        <Button
          className="col-md-12 col-lg-4 mb-10"
          onClick={() => alert("onClick")}
        >
          即將上架 5月28日
        </Button>
        <Button
          className="col-md-12 col-lg-4 mb-10"
          color="orange-solid"
          onClick={() => alert("onClick")}
        >
          加入馬上看
        </Button>
        <Button
          className="col-md-12 col-lg-4 mb-10"
          color="orange-solid"
          onClick={() => alert("onClick")}
        >
          方案介紹
        </Button>
      </div>
      <div
        style={{
          marginBottom: "20px"
        }}
      >
        <Button className="fluid" onClick={() => alert("onClick")}>
          加入馬上看
        </Button>
      </div>
      <div
        style={{
          marginBottom: "20px"
        }}
      >
        <Button
          color="orange-solid"
          className="fluid"
          onClick={() => alert("onClick")}
        >
          加入馬上看
        </Button>
      </div>
    </div>
  );
};

export default Example;
