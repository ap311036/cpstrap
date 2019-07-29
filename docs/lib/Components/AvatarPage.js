/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React from 'react';
import { PrismCode } from 'react-prism';
import PageTitle from '../UI/PageTitle';
import SectionTitle from '../UI/SectionTitle';

import AvatarExample from "../examples/Avatar";
const AvatarExampleSource = require("!!raw-loader!../examples/Avatar");

export default class AvatarPage extends React.Component {
  render() {
    return (
      <div>
        <PageTitle title="Avatar" className="section-header" />
        <div className="docs-example">
          <AvatarExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {AvatarExampleSource}
          </PrismCode>
        </pre>

        <SectionTitle>Properties</SectionTitle>
        <pre>
          <PrismCode className="language-jsx">
            {`Avatar.propTypes = {
  alt: PropTypes.string, // default: ''
}`}
          </PrismCode>
        </pre>
      </div>
    );
  }
}
