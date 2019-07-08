/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React from 'react';
import { PrismCode } from 'react-prism';
import PageTitle from '../UI/PageTitle';
import SectionTitle from '../UI/SectionTitle';

import LikeIconExample from "../examples/LikeIcon";
const LikeIconExampleSource = require("!!raw-loader!../examples/LikeIcon");

export default class LikeIconPage extends React.Component {
  render() {
    return (
      <div>
        <PageTitle title="LikeIcon" />
        <div className="docs-example">
          <LikeIconExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {LikeIconExampleSource}
          </PrismCode>
        </pre>

        <SectionTitle>Properties</SectionTitle>
        <pre>
          <PrismCode className="language-jsx">
{`LikeIcon.propTypes = {
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
