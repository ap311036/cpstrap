/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React from 'react';
import { PrismCode } from 'react-prism';
import PageTitle from '../UI/PageTitle';
import SectionTitle from '../UI/SectionTitle';

import Card from "../examples/Card";
const CardSource = require("!!raw-loader!../examples/Card");

export default class ExclusiveLabelPage extends React.Component {
  render() {
    return (
      <div>
        <PageTitle title="ExclusiveLabel" />
        <div className="docs-example">
          <Card />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {CardSource}
          </PrismCode>
        </pre>

        <SectionTitle>Properties</SectionTitle>
        <pre>
          <PrismCode className="language-jsx">
{`ExclusiveLabel.propTypes = {
  staticRoot: PropTypes.string, // default: ''
  type: PropTypes.string, // default: 'img' [img|text]
  lng: PropTypes.string // default: 'zh-tw' [zh-tw|en-us|id-id]
}`}
          </PrismCode>
        </pre>
      </div>
    );
  }
}
