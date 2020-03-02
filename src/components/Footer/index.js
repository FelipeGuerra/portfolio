import React from 'react';

import './styles.scss';

import Marker from '../../images/map-marked-alt-solid.svg';
import Facebook from '../../images/facebook-brands.svg';
import Linkedin from '../../images/linkedin-brands.svg';
import Github from '../../images/github-brands.svg';
import Heart from '../../images/heart-solid.svg';

const Footer = () => {
  return (
    <footer id="main-footer">
      <div className="container">
        <div className="flex-row">
          <div className="location">
            <h4>Location</h4>
            <p><Marker /> Porto, Portugal</p>
          </div>
          <div className="social">
            <h4>Find Me</h4>
            <ul>
              <li>
                <a href="https://www.facebook.com/felipe.mguerra" target="_blank">
                  <Facebook />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/felguerra/" target="_blank">
                  <Linkedin />
                </a>
              </li>
              <li>
                <a href="https://github.com/FelipeGuerra" target="_blank">
                  <Github />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="copyright">
        <div className="container">
          <div className="flex-row">
            <small>made with <Heart /> by ©Felipe Guerra 2020</small>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;