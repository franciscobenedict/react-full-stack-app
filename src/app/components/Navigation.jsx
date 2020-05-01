import { connect } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import React from 'react';
import { store } from '../store';
import { Navbar, NavItem, NavDropdown, MenuItem, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ItemNav = props => {
  const pageURI = window.location.pathname+window.location.search;
  const liClassName = '';
  const aClassName = '';
  const isActive = (path, match, location) => !!(match || path === location.pathname);
  return (
    <Nav.Link as={NavLink} to={props.path} activeClassName="active" exact={true}>
      {props.name}
      {(props.path === pageURI) ? (<span className="sr-only">(current)</span>) : ''}
    </Nav.Link>
  );
}

//USER BUTTONS
function UserButton(props) {
  const pageURI = window.location.pathname+window.location.search;
  const liClassName = '';
  const aClassName = '';//(props.path === pageURI) ? "nav-link active" : "nav-item";
  return (
    <NavDropdown className="user_icon_dropdown" title={<FontAwesomeIcon icon="user" />} id="user-dropdown">
      <NavDropdown.Item as={Link} to="/dashboard">Dashboard</NavDropdown.Item>
      <NavDropdown.Item as={Link} to="/dashboard">Another action</NavDropdown.Item>
      <NavDropdown.Item as={Link} to="/dashboard">Something</NavDropdown.Item>
      <NavDropdown.Divider />
      <NavDropdown.Item as={Link} to="/usersettings">User settings</NavDropdown.Item>
    </NavDropdown>
  );
}
function LoginButton(props) {
  return (
    <div className='login_btn'><a href='/login' className="btn btn-primary">Login</a></div>
  )
}
function UserSearchBar(props) {
  return (
    <Form inline className="search_bar_form">
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  )
}
function UserLoggedIn(props) {
  const isLoggedIn = store.getState().session.authenticated === 'AUTHENTICATED';
  if (isLoggedIn) {
    return <UserButton />;
  }
  return <LoginButton />;
}
function ShowSearchBar(props) {
  const isLoggedIn = store.getState().session.authenticated === 'AUTHENTICATED';
  if (isLoggedIn) {
    return <UserSearchBar />;
  }
  return null;
}

const Navigation = (props) => {
  return (
    <Navbar expand='lg' className="fixed-top">
      <Navbar.Brand href="/">The Duchess</Navbar.Brand>
      <UserLoggedIn isLoggedIn={false} />
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className='mr-auto'>
          <ItemNav path="/"             name="Home"          />
          <ItemNav path="/about"        name="About"         />
          <ItemNav path="/dashboard"    name="Dashboard"     />
          <ItemNav path="/usersettings" name="User settings" />
        </Nav>
        <ShowSearchBar isLoggedIn={false} />
      </Navbar.Collapse>
    </Navbar>
  );
}

export const ConnectedNavigation = connect(state=>state)(Navigation);
