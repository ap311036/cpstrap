/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React from 'react';
import { PrismCode } from 'react-prism';
import PageTitle from '../UI/PageTitle';
import SectionTitle from '../UI/SectionTitle';

import MetaData from "../examples/MetaData";
const MetaDataSource = require("!!raw-loader!../examples/MetaData");

export default class MetaDataPage extends React.Component {
  render() {
    return (
      <div>
        <PageTitle title="MetaData" />
        <p>your can wrapper a div with .metadata-list className</p>
        <div className="docs-example">
          <MetaData />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {MetaDataSource}
          </PrismCode>
        </pre>

        <SectionTitle>Properties</SectionTitle>
        <pre>
          <PrismCode className="language-jsx">
{`MetaData.defaultProps = {
  type: "string", // [string|border|imdb]
  staticRoot: "/assets/icons"
};`}
          </PrismCode>
        </pre>
      </div>
    );
  }
}
