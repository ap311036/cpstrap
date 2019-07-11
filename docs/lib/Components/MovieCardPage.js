/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React from 'react';
import { PrismCode } from 'react-prism';
import PageTitle from '../UI/PageTitle';
import SectionTitle from '../UI/SectionTitle';

import MovieCard from "../examples/MovieCard";
const MovieCardSource = require("!!raw-loader!../examples/MovieCard");

export default class MovieCardPage extends React.Component {
  render() {
    return (
      <div>
        <PageTitle title="MovieCard" />
        <div className="docs-example">
          <MovieCard />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {MovieCardSource}
          </PrismCode>
        </pre>

        <SectionTitle>Properties</SectionTitle>
        <pre>
          <PrismCode className="language-jsx">
{`ExclusiveLabel.propTypes = {
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
