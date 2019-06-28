/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React from 'react';
import { PrismCode } from 'react-prism';
import PageTitle from '../UI/PageTitle';
import SectionTitle from '../UI/SectionTitle';

import PlayIconExample from "../examples/PlayIcon";
const PlayIconExampleSource = require("!!raw-loader!../examples/PlayIcon");

export default class PlayIconPage extends React.Component {
  render() {
    return (
      <div>
        <PageTitle title="PlayIcon" />
        <div className="docs-example">
          <PlayIconExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {PlayIconExampleSource}
          </PrismCode>
        </pre>

        <SectionTitle>Properties</SectionTitle>
        <pre>
          <PrismCode className="language-jsx">
            {`PlayIcon.propTypes = {
  type: PropTypes.string, // default: '' [preview|trailer]
}`}
          </PrismCode>
        </pre>
        <SectionTitle>Overwrite your css with background Url.</SectionTitle>
        <p>
          In order to have playIcon img, your css needs to overwrite img url
          with your static folder.
        </p>
        <pre>
          <PrismCode className="language-css">
{`.play-icon-media {
  background: url('~/static/icons/play-off.svg');

  .card:hover &,
  &:hover {
    background: url('~/static/icons/play-on.svg');
  }

  &:before {
    background: url('~/static/icons/play-on.svg');
  }
}`}
          </PrismCode>
        </pre>
      </div>
    );
  }
}
