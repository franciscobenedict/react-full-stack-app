import React, { useState } from "react";
// import Button from 'react-uikit-button';
import { Link } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import * as mutations from '../store/mutations';
import { connect } from 'react-redux';
import bird from '../images/bird.png';
import ModalDialog from 'react-bootstrap/ModalDialog';
import Button from 'react-bootstrap/Button';

function ModalLogin ({authenticateUser, authenticated}) {
  const [show, setShow] = useState(false);
  return (
    <div>
    <Button variant="primary" onClick={() => setShow(true)}>
      Custom Width Modal
    </Button>

    <Modal
      show={show}
      onHide={() => setShow(false)}
      dialogClassName="modal-90w"
      aria-labelledby="example-custom-modal-styling-title"
    >
      <Modal.Header closeButton>
        <Modal.Title id="example-custom-modal-styling-title">
          Please login
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form className="form" onSubmit={authenticateUser}>
          <input className="form-control" type="text" placeholder="username" name="username" autoComplete="off" />
          <input className="form-control mt-2" type="password" placeholder="password" defaultValue="" name="password" autoComplete="off" />
          { authenticated === mutations.NOT_AUTHENTICATED ? <p className="error_text">Login incorrect</p> : null }
          <button className="form-control mt-2 btn btn-primary" type="submit">Login</button>
        </form>
      </Modal.Body>
    </Modal>
    </div>
  )
}

export const LandingPage = ({authenticateUser, authenticated})=> {
  const [show, setShow] = useState(false);
  return (
    <div className="main fullscreen">
      <h1>Landing Page</h1>
      <p className="">Welcome to the Duchess App</p>
      <div>
        {(localStorage.getItem('authenticatedUser') !== "AUTHENTICATED") &&<Link to="/mainhome">Enter site</Link>}
        {(localStorage.getItem('authenticatedUser') === "AUTHENTICATED") &&<Link to="/home">Enter site</Link>}
      </div>
      <div>
        <Link to="/about">What The Duchess is about</Link>
      </div>
      <div>
        <Link to="/dashboard">Dashboard</Link>
      </div>
      <img src={bird} alt="this is an image" />

      <div>
        <div>1 ==> localStorage.getItem('authenticatedUser'): {localStorage.getItem('authenticatedUser')}</div>
        <div>2 ==> authenticated: {authenticated}{!authenticated}</div>

        {(authenticated) && <div>You are currently logged in as "{localStorage.getItem('username')}"</div>}
        { (!authenticated) &&
          <div>
            You are not logged in.
            Please <a onClick={() => setShow(true)}>login</a>
            <div>
              <Button variant="primary" onClick={() => setShow(true)}>
                Login
              </Button>
            </div>
          </div>
        }
        <Modal
          show={show}
          onHide={() => setShow(false)}
          dialogClassName="modal-90w"
          aria-labelledby="example-custom-modal-styling-title"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-custom-modal-styling-title">
              Please login
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form className="form" onSubmit={authenticateUser}>
              <input className="form-control" type="text" placeholder="username" name="username" autoComplete="off" />
              <input className="form-control mt-2" type="password" placeholder="password" defaultValue="" name="password" autoComplete="off" />
              { authenticated === mutations.NOT_AUTHENTICATED ? <p className="error_text">Login incorrect</p> : null }
              <button className="form-control mt-2 btn btn-primary" type="submit">Login</button>
            </form>
          </Modal.Body>
        </Modal>
      </div>
    </div>
  )
};

// const mapStateToProps = ({session})=>({
//   authenticated:session.authenticated
//
//   // authenticated: localStorage.getItem('authenticatedUser')
// });

const mapStateToProps = ()=>({
  authenticated:localStorage.getItem('authenticatedUser')
  // authenticated: localStorage.getItem('authenticatedUser')
});

const mapDispatchToProps = (dispatch)=>({
  authenticateUser(e) {
    e.preventDefault();
    let username = e.target[`username`].value;
    let password = e.target[`password`].value;
    dispatch(mutations.requestAuthenticateUser(username, password));
  }
})
export const ConnectedLandingPage = connect(mapStateToProps, mapDispatchToProps)(LandingPage);
