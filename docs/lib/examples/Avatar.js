import React from 'react';
import { Avatar } from 'cpstrap';

const Example = (props) => {
  return (
    <div className="row">
      <div className="col-md-6 col-lg-6">
        <Avatar src="https://dd73pvjtftvi1.cloudfront.net/allisonlin/allisonlin-400-15504725784164.jpg" />
      </div>
      <div className="col-md-6 col-lg-6">
        <Avatar
          name="周采詩"
          src="https://dd73pvjtftvi1.cloudfront.net/tracychou/tracychou-235-1550472683390.jpg"
        />
      </div>
      <div className="col-md-6 col-lg-6">
        <Avatar
          name="林君陽"
          label="導演"
          src="https://dd73pvjtftvi1.cloudfront.net/chunyanglin/chunyanglin-400-1550472615963.jpg"
        />
      </div>
    </div>
  );
};

export default Example;
