/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React from 'react';
import { PrismCode } from 'react-prism';
import PageTitle from '../UI/PageTitle';
import SectionTitle from '../UI/SectionTitle';

import VideoLabel from "../examples/VideoLabel";
const VideoLabelSource = require("!!raw-loader!../examples/VideoLabel");

export default class VideoLabelPage extends React.Component {
  render() {
    return (
      <div>
        <PageTitle title="VideoLabel" />
        <div className="docs-example">
          <VideoLabel />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {VideoLabelSource}
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
      </div>
    );
  }
}
