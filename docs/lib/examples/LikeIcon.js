import React from 'react';
import { LikeIcon } from 'cpstrap';

class Example extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fill: false
    };
    this.onClickHandler = this.onClickHandler.bind(this);
  }
  onClickHandler() {
    const { fill } = this.state;
    this.setState({ fill: !fill });
  }
  render() {
    const { fill } = this.state;
    return (
      <div>
        <LikeIcon
          placement="bottomRight"
          overlay={"your string"}
          fill={fill}
          onClick={() => this.onClickHandler}
        />
      </div>
    );
  }
};

export default Example;
