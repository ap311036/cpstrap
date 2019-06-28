import React from 'react';
import { ShareIcon, CPClipboard } from "cpstrap";

const Example = (props) => {
  return (
    <div className="share-toolbar">
      <div className="share-toolbar">
        <ShareIcon type="facebook" />
      </div>
      <div className="share-toolbar">
        <ShareIcon type="link" onClick={() => console.log("click")} />
      </div>
      <div className="share-toolbar">
        Click to copy link
        <CPClipboard
          className="shareIcon shareIcon-link"
          link={"https://localhsot:8080"}
        />
      </div>
    </div>
  );
};

export default Example;
