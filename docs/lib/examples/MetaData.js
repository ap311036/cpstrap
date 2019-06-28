import React from 'react';
import { MetaData } from 'cpstrap';

const Example = (props) => {
  return (
    <div className="metadata-list">
      <MetaData type="imdb">10</MetaData>
      <MetaData> 1 小時 50 分</MetaData>
      <MetaData type="border">HD</MetaData>
      <MetaData>2018</MetaData>
      <MetaData>美國</MetaData>
      <MetaData>輔12級</MetaData>
    </div>
  );
};

export default Example;
