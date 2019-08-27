/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React from "react";
import { PrismCode } from "react-prism";
import PageTitle from "../UI/PageTitle";
import SectionTitle from "../UI/SectionTitle";

import SliderExample from "../examples/Slider";
const SliderExampleSource = require("!!raw-loader!../examples/Slider");

export default class SliderPage extends React.Component {
  render() {
    return (
      <div>
        <PageTitle title="Slider" className="section-header" />
        <div className="docs-example">
          <SliderExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {SliderExampleSource}
          </PrismCode>
        </pre>

        <SectionTitle>Properties</SectionTitle>
        <pre>
          <PrismCode className="language-jsx">
            {`Slider.propTypes = {
  alt: PropTypes.string, // default: ''
}`}
          </PrismCode>
        </pre>
      </div>
    );
  }
}
