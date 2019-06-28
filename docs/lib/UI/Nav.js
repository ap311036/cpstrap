import React from 'react';
import { Link } from 'react-router';
import { NavbarToggler, Container, Collapse, Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'cpstrap';

export default class UINav extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      showNavbar: false
    };
  }
  toggleNavbar(e) {
    e.preventDefault();
    this.setState({
      showNavbar: !this.state.showNavbar
    });
  }
  render() {
    return (
      <Navbar className="header" color="faded" light expand="md">
        <Container>
          <NavbarBrand className="mr-auto" tag={Link} to="/">
            <img src="/assets/logo2.svg" alt="" width="170px" />
          </NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} />
          <Collapse navbar isOpen={this.state.showNavbar}>
            <Nav navbar className="ml-sm-auto">
              <NavItem>
                <NavLink tag={Link} to="/components/" activeClassName="active">Components</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/utilities/" activeClassName="active">Utilities</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://git.catchplay.com/users/sign_in">Repository</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    );
  }
}
