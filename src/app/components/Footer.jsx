import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const currentYear = new Date().getFullYear();

const Footer = ()=> (
  <footer>
    <div className="container-fluid">
      <div className="footer_content_holder">
        <div className="footer_content">
          <div className="row">

            {/* COPYRIGHT  */}
            <div className="col-12 col-md-12 col-lg-4">
              <div className="align_middle_container _100_px _0 copyright_container">
                <div className="align_content_middle">Copyright &copy; { currentYear } | The Duchess App</div>
              </div>
            </div>

            {/* SOCIALS */}
            <div className="col-12 col-md-12 col-lg-4">
              <div className="social_icons">
                <Link className="social_icon" to="/"><FontAwesomeIcon icon={['fab', 'youtube']} size="2x" /></Link>
                <Link className="social_icon" to="/"><FontAwesomeIcon icon={['fab', 'facebook']} size="2x" /></Link>
                <Link className="social_icon" to="/"><FontAwesomeIcon icon={['fab', 'instagram']} size="2x" /></Link>
                <Link className="social_icon" to="/"><FontAwesomeIcon icon={['fab', 'twitter']} size="2x" /></Link>
              </div>
            </div>

            {/* FOOTER LINKS */}
            <div className="col-12 col-md-12 col-lg-4">
              <div className="align_middle_container _100_px _0 footer_links_container">
                <div className="align_content_middle">
                  <div className="footer_links">
                    <ul>
                      <li><Link to="/termsandconditions">Terms and Conditions</Link></li>
                      <li><Link to="/privacypolicy">Privacy Policy</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </footer>
);

export const ConnectedFooter = connect(state=>state)(Footer);
