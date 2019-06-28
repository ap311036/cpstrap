import React from 'react';
import { VideoLabel } from 'cpstrap';

const Example = (props) => {
  return (
    <div>
      <div>
        <VideoLabel text={"LIVE"} isLive isHotPicks isDesktop />
      </div>
      <div>
        <VideoLabel text={"LIVE AVAILABLE"} isLive isHotPicks isDesktop />
      </div>
      <div>
        <VideoLabel text={"LIVE AVAILABLE"} isLive isHotPicks />
      </div>
      <div>
        <VideoLabel text={"LIVE AVAILABLE"} isLive />
      </div>
      <div>
        <VideoLabel text={"LIVE AVAILABLE"} />
      </div>
    </div>
  );
};

export default Example;
