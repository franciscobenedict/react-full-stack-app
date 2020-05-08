import React, { useState } from "react";
// import Button from 'react-uikit-button';
import { Link } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import * as mutations from '../store/mutations';
import { connect } from 'react-redux';

// import bird from '../images/bird.png';
// import bannerLogo from '../images/banner.png';
import tidyCannibal from '../images/tidyCannibal_logo.png';
import fbLogo from '../images/fb-logo-grey.svg';
import ModalDialog from 'react-bootstrap/ModalDialog';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ModalLogin ({authenticateUser, authenticated}) {
  const [show, setShow] = useState(false);
  return (
    <div className="">
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
            <Button className="form-control generic" type="submit">Login</Button>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  )
}

export const LandingPage = ({authenticateUser, authenticated})=> {
  const [show, setShow] = useState(false);
  const currentYear = new Date().getFullYear();

  return (
    <div className="main fullscreen">
      <div className="grid_container_landing">

        {/* Main grid*/}
        <div className="landing_grid_item1 main_landing_container">
          <div className="main_holder _grid_content_holder">
            <div className="duchess_logo_container">
              <img className="" src={fbLogo} alt="The Duchess Logo" />
            </div>

            <h1>The Duchess</h1>

            {
              (authenticated) &&
              <div className="user_welcome">
                <div>Hello, <span className="text_italic">{localStorage.getItem('username')}</span></div>
                {/*<div>Feel free to browse The Duchess app.</div>*/}
                <div className="button_container">
                  <Link className="btn generic" to="/home">Browse</Link>
                </div>
              </div>
            }

            { (!authenticated) &&
              <div className="button_container">
                <button className="btn generic" variant="" onClick={() => setShow(true)}>Login</button>
              </div>
            }
          </div>
        </div>

        {/*  */}
        <div className="landing_grid_item2">
          <div className="align_middle_container align_text_horizontal_center _grid_content_holder">
            <div className="align_content_middle">
              <Link to={ (authenticated) ? `/home` : `/mainhome` } className="grid_link">
                <span className="link_content">1 (click me)</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="landing_grid_item3">
          <div className="align_middle_container align_text_horizontal_center _grid_content_holder">
            <div className="align_content_middle">
              <Link to={ (authenticated) ? `/home` : `/mainhome` } className="grid_link">
                <span className="link_content">2 (click me)</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="landing_grid_item4">
          <div className="align_middle_container align_text_horizontal_center _grid_content_holder">
            <div className="align_content_middle">
              <Link to={ (authenticated) ? `/home` : `/mainhome` } className="grid_link">
                <span className="link_content">3 (click me)</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="landing_grid_item5">
          <div className="align_middle_container align_text_horizontal_center _grid_content_holder">
            <div className="align_content_middle">
              <Link to={ (authenticated) ? `/home` : `/mainhome` } className="grid_link">
                <span className="link_content">4 (click me)</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Footer grid */}
        <div className="landing_grid_item6 footer_landing_container">
          <div className="align_middle_container align_text_horizontal_center _grid_content_holder">
            <div className="align_content_middle">
              <div className="social_icons">
                <Link className="social_icon" to="/"><FontAwesomeIcon icon={['fab', 'youtube']} size="2x" /></Link>
                <Link className="social_icon" to="/"><FontAwesomeIcon icon={['fab', 'facebook']} size="2x" /></Link>
                <Link className="social_icon" to="/"><FontAwesomeIcon icon={['fab', 'instagram']} size="2x" /></Link>
                <Link className="social_icon" to="/"><FontAwesomeIcon icon={['fab', 'twitter']} size="2x" /></Link>
              </div>
              <div className="copyright">Copyright &copy; { currentYear } | The Duchess App</div>

            </div>
          </div>
        </div>
      </div>

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

              <div className="button_container">
                <button className="btn generic" type="submit">Login</button>
              </div>

          </form>
        </Modal.Body>
      </Modal>
    </div>
  )
};

const mapStateToProps = ()=>({
  authenticated:localStorage.getItem('authenticatedUser')
  // authenticated:session.authenticated
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
