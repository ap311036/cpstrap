import React from 'react';
import { Button, ButtonGroup } from 'cpstrap';
const tabs = ['Left', 'Right'];
const Example = (props) => {
  return (
    <ButtonGroup>
      {tabs.map((item, index) => {
        return <Button key={index}>{item}</Button>;
      })}
    </ButtonGroup>
  );
};

export default Example;
