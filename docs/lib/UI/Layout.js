import React from 'react';
import Helmet from 'react-helmet';
import Footer from './Footer';
import Nav from './Nav';

export default (props) => {
  return (
    <div className="wrapper">
      <Helmet
        titleTemplate="cpstrap - %s"
        title="CatchPlay UI Library"
        defaultTitle="CatchPlay UI Library"
        meta={[
            { 'name': 'description', 'content': 'cpstrap - easy to use CatchPlay UI Library compatible with React 16+' },
            { 'property': 'og:type', 'content': 'article' }
        ]}
      />
      <Nav />
      {props.children}
      <Footer />
    </div>
  );
};
