import React from "react";
import { Button, ButtonGroup } from "cpstrap";
const seasons = ["S1", "S2", "S3", "S4", "S5", "S6", "S7", "S8", "S9,", "S10"];
class Example extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: 0
    };
    this.onClickHandler = this.onClickHandler.bind(this);
  }
  onClickHandler(index) {
    this.setState({ selected: index })
  }

  render() {
    return (
      <div>
        Scroll Me
        <ButtonGroup list={true} size="xs">
          {seasons.map((item, index) => {
            return (
              <Button
                key={index}
                active={index === this.state.selected}
                onClick={() => this.onClickHandler(index)}
              >
                {item}
              </Button>
            );
          })}
        </ButtonGroup>
      </div>
    );
  }
}

export default Example;
