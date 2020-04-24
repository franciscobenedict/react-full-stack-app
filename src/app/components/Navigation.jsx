import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import React from 'react';

const Navigation = ()=> (
  <div>
    <h1>My Application</h1>

    <ul>
      <li><Link to="/">Home page</Link></li>
      <li>
        <Link to="/dashboard">My Application</Link>
      </li>
    </ul>
  </div>
);

export const ConnectedNavigation = connect(state=>state)(Navigation);
