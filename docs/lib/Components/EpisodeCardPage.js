/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React from 'react';
import { PrismCode } from 'react-prism';
import PageTitle from '../UI/PageTitle';
import SectionTitle from '../UI/SectionTitle';

import EpisodeCardExample from "../examples/EpisodeCard";
const EpisodeCardExampleSource = require("!!raw-loader!../examples/EpisodeCard");

export default class EpisodeCardPage extends React.Component {
  render() {
    return (
      <div>
        <PageTitle title="EpisodeCard" />
        <div className="docs-example">
          <EpisodeCardExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {EpisodeCardExampleSource}
          </PrismCode>
        </pre>

        <SectionTitle>Properties</SectionTitle>
        <pre>
          <PrismCode className="language-jsx">
{`EpisodeCard.propTypes = {
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
