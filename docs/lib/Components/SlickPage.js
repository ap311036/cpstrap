/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React from 'react';
import { PrismCode } from 'react-prism';
import PageTitle from '../UI/PageTitle';
import SectionTitle from '../UI/SectionTitle';

import Slick from "../examples/Slick";
import SlickAvatar from "../examples/SlickAvatar";
const SlickSource = require("!!raw-loader!../examples/Slick");
const SlickAvatarSource = require("!!raw-loader!../examples/SlickAvatar");

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

        <PageTitle title="SlickAvatar" />
        <div className="docs-example">
          <SlickAvatar />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {SlickAvatarSource}
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
