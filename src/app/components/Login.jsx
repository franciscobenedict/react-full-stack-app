import React from 'react';
import * as mutations from '../store/mutations';
import { connect } from 'react-redux';

const LoginComponent = ({authenticateUser, authenticated})=> {
  return <div className="card p-3 col-6">

    <h2>Please Login here!</h2>
    <form className="form" onSubmit={authenticateUser}>
      <input className="form-control" type="text" placeholder="username" defaultValue="Dev" name="username" autoComplete="on" />
      <input className="form-control mt-2" type="password" placeholder="password" defaultValue="" name="password" autoComplete="on" />
      { authenticated === mutations.NOT_AUTHENTICATED ? <p>Login incorrect</p> : null }
      <button className="form-control mt-2 btn btn-primary" type="submit">Login</button>
    </form>
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
