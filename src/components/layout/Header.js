import React from 'react';
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from 'reactstrap';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  state = {
    isOpen: false
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    return (
      <Navbar className="header position-fixed fixed-top " light expand="md">
        <Link
          to="/"
          onClick={() => {
            this.setState({
              isOpen: false
            });
          }}
          className="navbar-brand text-dark no-underline"
        >
          <img
            src="/images/To-do_List-512.png"
            alt=""
            style={{ height: '50px', width: 'auto' }}
          /> Todo
        </Link>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem className="mr-2">
              <Link
                onClick={this.toggle}
                to="/"
                className="no-underline navbar-brand"
              >
                <span className="navbar-item">Tasks Todo</span>
              </Link>
            </NavItem>
            <NavItem className="mr-2">
              <Link
                onClick={this.toggle}
                to="/add/task"
                className="no-underline navbar-brand"
              >
                <span className="navbar-item">Add Task</span>
              </Link>
            </NavItem>

            <NavItem className="mr-2">
              <Link
                onClick={this.toggle}
                to="/about"
                className="no-underline navbar-brand "
              >
                <span className="navbar-item">About</span>
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

export default Header;
