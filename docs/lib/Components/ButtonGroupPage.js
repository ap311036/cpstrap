/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React from 'react';
import { PrismCode } from 'react-prism';
import PageTitle from '../UI/PageTitle';
import SectionTitle from '../UI/SectionTitle';

import ButtonGroupExample from "../examples/ButtonGroup";
import ButtonListExample from "../examples/ButtonList"
const ButtonGroupExampleSource = require("!!raw-loader!../examples/ButtonGroup");
const ButtonListExampleSource = require("!!raw-loader!../examples/ButtonList");

export default class ButtonGroupPage extends React.Component {
  render() {
    return (
      <div>
        <PageTitle title="ButtonGroup" />
        <div className="docs-example">
          <ButtonGroupExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {ButtonGroupExampleSource}
          </PrismCode>
        </pre>

        <PageTitle title="ButtonList" />
        <div className="docs-example">
          <ButtonListExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {ButtonListExampleSource}
          </PrismCode>
        </pre>

        <SectionTitle>Properties</SectionTitle>
        <pre>
          <PrismCode className="language-jsx">
{`ButtonGroup.propTypes = {
  className: PropTypes.string,
  tag: PropTypes.string,
}`}
          </PrismCode>
        </pre>
      </div>
    );
  }
}
