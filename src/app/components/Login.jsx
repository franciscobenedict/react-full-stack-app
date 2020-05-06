import React from 'react';
import { Link } from 'react-router-dom';
import * as mutations from '../store/mutations';
import { connect } from 'react-redux';

const LoginComponent = ({authenticateUser, authenticated})=> {
  return <div>
    AUTHENTICATED: {authenticated}
    <div className="card p-3 col-12 col-sm-12 col-md-12 col-lg-6">
      <h2>Please Login here!</h2>
      <form className="form" onSubmit={authenticateUser}>
        <input className="form-control" type="text" placeholder="username" defaultValue="Dev" name="username" autoComplete="on" />
        <input className="form-control mt-2" type="password" placeholder="password" defaultValue="" name="password" autoComplete="on" />
        { authenticated === mutations.NOT_AUTHENTICATED ? <p className="error_text">Login incorrect</p> : null }
        <button className="form-control mt-2 btn btn-primary" type="submit">Login</button>
      </form>
    </div>



    <div>
      <Link to="/">Landing page</Link>
    </div>
    <div>
      <Link to="/mainhome">Enter site</Link>
    </div>
    <div>
      <Link to="/about">What The Duchess is about</Link>
    </div>
  </div>
}

const mapStateToProps = ({session})=>({
  authenticated:session.authenticated
});

const mapDispatchToProps = (dispatch)=>({
  authenticateUser(e) {
    e.preventDefault();
    let username = e.target[`username`].value;
    let password = e.target[`password`].value;
    dispatch(mutations.requestAuthenticateUser(username, password));
  }
})

export const ConnectedLogin = connect(mapStateToProps, mapDispatchToProps)(LoginComponent);
