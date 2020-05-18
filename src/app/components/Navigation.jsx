import { connect } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import React from 'react';
import { store } from '../store';
import { Navbar, NavItem, NavDropdown, MenuItem, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../images/TheDuchessLogo_horizontal.png';

// USER BUTTONS
function UserButton(props) {
  const pageURI = window.location.pathname+window.location.search;
  const liClassName = '';
  const aClassName = '';//(props.path === pageURI) ? "nav-link active" : "nav-item";

  return (
    <NavDropdown className="user_icon_dropdown" title={<FontAwesomeIcon icon="user" />} id="user-dropdown">
      <div className="username">Hello, {localStorage.getItem('username')}</div>
      <NavDropdown.Item as={Link} to="/dashboard">Dashboard</NavDropdown.Item>
      <NavDropdown.Item as={Link} to="/usersettings">User settings</NavDropdown.Item>
      <NavDropdown.Divider />
      <NavDropdown.Item onClick={Logout}>Sign out</NavDropdown.Item>
    </NavDropdown>
  );
}

// LOGIN BUTTON
function LoginButton(props) {
  return (
    <div className='login_btn'>
      <a href='/login' className="btn btn-primary">Login</a>
    </div>
  )
}

// USER SEARCH BAR
function UserSearchBar(props) {
  return (
    <Form inline className="search_bar_form">
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <button className="btn generic search_btn">Search</button>
    </Form>
  )
}

// LOGOUT
function Logout() {
  localStorage.clear();
  return window.location.href = '/';
}

// POPULATE NAV LINKS
const ItemNav = props => {
  const pageURI = window.location.pathname+window.location.search;
  const liClassName = '';
  const aClassName = '';
  const isActive = (path, match, location) => !!(match || path === location.pathname);
  return (
    <Nav.Link as={NavLink} to={props.path} activeClassName="active" exact={true} >
      {props.name}
      {(props.path === pageURI) ? (<span className="sr-only">(current)</span>) : ''}
    </Nav.Link>
  );
}

//NAVIGATION
const Navigation = (props) => {
  const loggedIn = localStorage.getItem('authenticatedUser') === "AUTHENTICATED"; // store.getState().session.authenticated === 'AUTHENTICATED';
  return (
    <Navbar expand='lg' className="fixed-top">
      <Navbar.Brand as={Link} to="/" >
        <img src={logo} alt="This is an example logo" />
      </Navbar.Brand>
      { (loggedIn) && <UserButton /> }
      {/* (!loggedIn) && <LoginButton /> */}
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className='mr-auto'>
          { (!loggedIn) &&  <ItemNav path="/mainhome" name="Welcome" /> }
          { (loggedIn) &&  <ItemNav path="/home" name="Home" /> }

          <ItemNav path="/about" name="About" />

          { (loggedIn) && <ItemNav path="/Flights" name="Flights" /> }
          { (loggedIn) && <ItemNav path="/Accommodation" name="Accommodation" /> }
          { (loggedIn) && <ItemNav path="/Events" name="Events" /> }
          { (loggedIn) && <ItemNav path="/Activities" name="Activities" /> }
          { (loggedIn) && <ItemNav path="/Restaurants" name="Restaurants" /> }
          { (loggedIn) && <ItemNav path="/Transport" name="Transport" /> }

          {/*
          { (loggedIn) && <ItemNav path="/dashboard" name="Dashboard" /> }
          { (loggedIn) && <ItemNav path="/usersettings" name="User settings" /> }
          */}
        </Nav>
        {/* (loggedIn) && <UserSearchBar /> */}
      </Navbar.Collapse>
    </Navbar>
  );
}

export const ConnectedNavigation = connect(state=>state)(Navigation);
