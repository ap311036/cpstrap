import React from 'react';
import { ExclusiveLabel } from 'cpstrap';

const Example = (props) => {
  return (
    <div>
      <ExclusiveLabel staticRoot={`/assets/icons/`} />
      <br />
      <ExclusiveLabel staticRoot={`/assets/icons/`} lng="en-us" />
      <br />
      <ExclusiveLabel staticRoot={`/assets/icons/`} lng="id-id" />
      <br />
      <ExclusiveLabel staticRoot={`/assets/icons/`} type="text" lng="zh-tw" />
      <br />
      <ExclusiveLabel staticRoot={`/assets/icons/`} type="text" lng="en-us" />
      <br />
      <ExclusiveLabel staticRoot={`/assets/icons/`} type="text" lng="id-id" />
    </div>
  );
};

export default Example;
