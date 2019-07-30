/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React from "react";
import { PrismCode } from "react-prism";
import PageTitle from "../UI/PageTitle";
import SectionTitle from "../UI/SectionTitle";

import TabListExample from "../examples/TabList";
const TabListExampleSource = require("!!raw-loader!../examples/TabList");

export default class TabListPage extends React.Component {
  render() {
    return (
      <div>
        <PageTitle title="TabList" className="section-header" />
        <div className="docs-example">
          <TabListExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">{TabListExampleSource}</PrismCode>
        </pre>

        <SectionTitle>Properties</SectionTitle>
        <pre>
          <PrismCode className="language-jsx">
            {`TabList.propTypes = {
  alt: PropTypes.string, // default: ''
}`}
          </PrismCode>
        </pre>
      </div>
    );
  }
}
