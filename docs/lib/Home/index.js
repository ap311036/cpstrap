import React from 'react';
import { PrismCode } from 'react-prism';
import { Button, Container, Row, Col, Jumbotron } from 'cpstrap';
import { Link } from 'react-router';


export default () => {
  return (
    <div>
      <Jumbotron tag="section" className="jumbotron-header text-center mb-3">
        <Container>
          <Row>
            <Col>
              <p className="lead">
                <img src="/assets/logo.svg" alt="" width="150px" />
              </p>
              <h1 className="jumbotron-heading display-4">cpstrap</h1>
              <p className="lead">This lib is ONLY UI component</p>
              <p>
                <Button
                  href="https://www.catchplay.com/tw/home"
                >
                  CatchPlay Website
                </Button>
                <Button color="orange-solid" tag={Link} to="/components/">
                  Components
                </Button>
              </p>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
      <Container>
        <Row className="justify-content-sm-center">
          <Col sm={8} className="docSearch-content">
            <h2>Installation</h2>
            <hr />
            <h3 className="mt-5">NPM</h3>
            <p>Install cpstrap and peer dependencies via NPM</p>
            <pre>
              <PrismCode className="language-bash">
                npm install --save cpstrap react react-dom
              </PrismCode>
            </pre>
            <h3 className="mt-5">Getting Started with Create React App</h3>
            <p>
              Follow the{" "}
              <a
                href="https://facebook.github.io/create-react-app/docs/getting-started"
                target="_blank"
              >
                Create React App instructions
              </a>
              .
            </p>
            <h4>tl;dr</h4>
            <pre>
              <PrismCode className="language-bash">
                {`npx create-react-app my-app
cd my-app
npm start`}
              </PrismCode>
            </pre>
            <p>
              Then open{" "}
              <a href="http://localhost:3000/" target="_blank">
                http://localhost:3000/
              </a>{" "}
              to see your app. The initial structure of your app is setup.
              Next, let's add cpstrap and bootstrap.
            </p>
            <h4>Adding Cpstrap</h4>
            <p>
              Install cpstrap and Cpstrap from NPM. cpstrap does not include
              Cpstrap CSS so this needs to be installed as well:
            </p>
            <pre>
              <PrismCode className="language-bash">
                {`npm install --save cpstrap
npm install --save cpstrap react react-dom`}
              </PrismCode>
            </pre>
            <p>
              Import Cpstrap CSS in the <code>src/index.js</code> file:
            </p>
            <pre>
              <PrismCode className="language-bash">
                import 'cpstrap/dist/css/index.min.css';
              </PrismCode>
            </pre>
            <p>
              Or:
            </p>
            <pre>
              <PrismCode className="language-bash">
                import 'cpstrap/lib/scss/index.scss';
              </PrismCode>
            </pre>
            <p>
              Import required cpstrap components within{" "}
              <code>src/App.js</code> file or your custom component files:
            </p>
            <pre>
              <PrismCode className="language-bash">
                {`import { Button } from 'cpstrap';`}
              </PrismCode>
            </pre>
            <p>
              Now you are ready to use the imported cpstrap components within
              your component hierarchy defined in the render method.
            </p>
            <h2 className="mt-5">About the Project</h2>
            <hr />
            <p>
              This library contains React Bootstrap 4 components that favor
              composition and control. The library does not depend on jQuery
              or Bootstrap javascript. However,{" "}
              <a href="https://popper.js.org/">https://popper.js.org/</a> via{" "}
              <a href="https://github.com/souporserious/react-popper">
                https://github.com/souporserious/react-popper
              </a>{" "}
              is relied upon for advanced positioning of content like
              Tooltips, Popovers, and auto-flipping Dropdowns.
            </p>
            <p>
              There are a few core concepts to understand in order to make the
              most out of this library.
            </p>
            <p>
              1) Your content is expected to be composed via props.children
              rather than using named props to pass in Components.
            </p>
            <pre>
              <PrismCode className="language-jsx">
                {`// Content passed in via props
const Example = (props) => {
  return (
    <p>This is a tooltip <TooltipTrigger tooltip={TooltipContent}>example</TooltipTrigger>!</p>
  );
}

// Content passed in as children (Preferred)
const PreferredExample = (props) => {
  return (
    <p>
      This is a <a href="#" id="TooltipExample">tooltip</a> example.
      <Tooltip target="TooltipExample">
        <TooltipContent/>
      </Tooltip>
    </p>
  );
}`}
              </PrismCode>
            </pre>
            <p>
              2) Attributes in this library are used to pass in state,
              conveniently apply modifier classes, enable advanced
              functionality (like popperjs), or automatically include
              non-content based elements.
            </p>
            <p>Examples:</p>
            <ul>
              <li>
                <code>isOpen</code> - current state for items like dropdown,
                popover, tooltip
              </li>
              <li>
                <code>toggle</code> - callback for toggling isOpen in the
                controlling component
              </li>
              <li>
                <code>color</code> - applies color classes, ex:{" "}
                <code>{'<Button color="danger"/>'}</code>
              </li>
              <li>
                <code>size</code> for controlling size classes. ex:{" "}
                <code>{'<Button size="sm"/>'}</code>
              </li>
              <li>
                <code>tag</code> - customize component output by passing in an
                element name or Component
              </li>
              <li>
                boolean based props (attributes) when possible for alternative
                style classes or sr-only content
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
