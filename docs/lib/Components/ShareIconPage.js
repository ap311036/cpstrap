/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React from 'react';
import { PrismCode } from 'react-prism';
import PageTitle from '../UI/PageTitle';
import SectionTitle from '../UI/SectionTitle';

import ShareIconExample from "../examples/ShareIcon";
const ShareIconExampleSource = require("!!raw-loader!../examples/ShareIcon");

export default class ShareIconPage extends React.Component {
  render() {
    return (
      <div>
        <PageTitle title="ShareIcon" />
        <div className="docs-example">
          <ShareIconExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {ShareIconExampleSource}
          </PrismCode>
        </pre>

        <SectionTitle>Properties</SectionTitle>
        <pre>
          <PrismCode className="language-jsx">
{`PlayIcon.propTypes = {
  text: PropTypes.string, //default: ''
  isLive: PropTypes.bool, // default: false
  isHotPicks: PropTypes.bool, // default: false
  isDesktop: PropTypes.bool, // default: false
  isHotPicks: PropTypes.bool, // default: false
}`}
          </PrismCode>
        </pre>
        <SectionTitle>Wrapper css</SectionTitle>
        <pre>
          <PrismCode className="language-css">
{`.share-toolbar {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: end;
    align-items: flex-end;
    display: flex;
    -ms-flex-pack: end;
    justify-content: flex-end;
    -ms-flex: 1;
    flex: 1;
}`}
          </PrismCode>
        </pre>
      </div>
    );
  }
}
