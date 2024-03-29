import React from 'react';
import { Button, Container, Row, Col } from 'cpstrap';
import { Link } from 'react-router';
import Helmet from 'react-helmet';

export default () => {
  return (
    <div className="bg-black">
      <Helmet title="404 Page Not Found" />
      <section className="jumbotron text-center mb-3">
        <Container>
          <Row>
            <Col>
              <p className="lead">
                <img src="/assets/logo.svg" alt="" width="150px" />
              </p>
              <h1 className="jumbotron-heading display-4">404 - Not Found</h1>
              <p className="lead">
                Can't find what you're looking for? <a href="https://github.com/cpstrap/cpstrap/issues/new">Open</a> up an issue.
              </p>
              <p>
                <Button outline color="danger" className="mr-1" tag={Link} to="/">Get Started</Button>
                <Button color="danger" tag={Link} to="/components">View Components</Button>
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};
