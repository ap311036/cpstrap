/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React from 'react';
import { PrismCode } from 'react-prism';
import PageTitle from '../UI/PageTitle';
import SectionTitle from '../UI/SectionTitle';

import Clamp from "../examples/Clamp";
const ClampSource = require("!!raw-loader!../examples/Clamp");

export default class ExclusiveLabelPage extends React.Component {
  render() {
    return (
      <div>
        <PageTitle title="Clamp" />
        <div className="docs-example">
          <Clamp />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {ClampSource}
          </PrismCode>
        </pre>

        <SectionTitle>Properties</SectionTitle>
        <pre>
          <PrismCode className="language-jsx">
{`ExclusiveLabel.propTypes = {
  text: PropTypes.string,
  maxLine: PropTypes.string, // default: 2
  ellipsis: PropTypes.string // default: '...
  afterEllipsisText: PropTypes.string, // default: 'MORE'
  afterEllipsisClass: PropTypes.string, // default:'clamp-after-ellipsis'
  basedOn: PropTypes.string, // default: 'letters'
  isTrimRight: PropTypes.bool, // default: true
  manualOpen: PropTypes.bool, // default: false
  forceDisable: PropTypes.bool, // default: false
  delay: PropTypes.number, //default: 0
  openCallback: PropTypes.func
  closeCallback: PropTypes.func
}`}
          </PrismCode>
        </pre>
      </div>
    );
  }
}
