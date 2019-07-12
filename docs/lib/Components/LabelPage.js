/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React from 'react';
import { PrismCode } from 'react-prism';
import PageTitle from '../UI/PageTitle';
import SectionTitle from '../UI/SectionTitle';

import LabelExample from "../examples/Label";
const LabelExampleSource = require("!!raw-loader!../examples/Label");

export default class LabelPage extends React.Component {
  render() {
    return (
      <div>
        <PageTitle title="Label" />
        <div className="docs-example">
          <LabelExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {LabelExampleSource}
          </PrismCode>
        </pre>

        <SectionTitle>Properties</SectionTitle>
        <pre>
          <PrismCode className="language-jsx">
{`Label.propTypes = {
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
