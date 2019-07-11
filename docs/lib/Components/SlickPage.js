/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React from 'react';
import { PrismCode } from 'react-prism';
import PageTitle from '../UI/PageTitle';
import SectionTitle from '../UI/SectionTitle';

import Slick from "../examples/Slick";
const SlickSource = require("!!raw-loader!../examples/Slick");

export default class SlickPage extends React.Component {
  render() {
    return (
      <div>
        <PageTitle title="Slick" />
        <div className="docs-example">
          <Slick />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {SlickSource}
          </PrismCode>
        </pre>

        <SectionTitle>Properties</SectionTitle>
        <pre>
          <PrismCode className="language-jsx">
{`Slick.propTypes = {
  settings: PropTypes.object,
  title: PropTypes.string,
  children: PropTypes.element,
}`}
          </PrismCode>
        </pre>
      </div>
    );
  }
}
