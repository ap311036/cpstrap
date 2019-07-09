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
  placement: PropTypes.string,
  overlay: PropTypes.string,
  fill: PropTypes.string,
  onClick: PropTypes.func,
}`}
          </PrismCode>
        </pre>
      </div>
    );
  }
}
