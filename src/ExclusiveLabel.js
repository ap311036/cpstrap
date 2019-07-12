import React from 'react';

const ExclusiveLabel = ({ staticRoot = '', lng='zh-tw', type = 'img' }) => {
  const src = `${staticRoot}exclusive-${type}-${lng}.png`;
  return (
    <div className={'exclusive-label exclusive-label-' + type}>
      <img src={src} alt="exclusiveLabel" />
    </div>
  )
};

export default ExclusiveLabel;
