import React from 'react';
import { SoundIcon } from 'cpstrap';

class Example extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      muted: false
    };
    this.onClickHandler = this.onClickHandler.bind(this);
  }
  onClickHandler() {
    const { muted } = this.state;
    this.setState({ muted: !muted });
  }
  render() {
    const { muted } = this.state;
    return (
      <div>
        <SoundIcon muted={muted} onClick={() => this.onClickHandler} />
      </div>
    );
  }
};

export default Example;
