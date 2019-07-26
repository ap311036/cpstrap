import React from 'react';
import { LikeIcon } from 'cpstrap';

class Example extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      like1: false,
      like2: false
    };
    this.onClickHandler = this.onClickHandler.bind(this);
  }
  onClickHandler(name) {
    this.setState({ [name]: !this.state[name] });
  }
  render() {
    const { like1, like2 } = this.state;
    return (
      <div className="row">
        <div className="col-md-6">
          <LikeIcon
            placement="bottomRight"
            overlay={"your string"}
            fill={like1}
            onClick={() => this.onClickHandler("like1")}
          />
        </div>
        <div className="col-md-6">
          <LikeIcon
            fill={like2}
            onClick={() => this.onClickHandler("like2")}
          />
        </div>
      </div>
    );
  }
};

export default Example;
