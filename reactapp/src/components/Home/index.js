import React from 'react';
import { NavLink } from 'react-router-dom'

import './Home.scss';

function Home() {
  return (
    <div id="homepage" className="container-fluid flexbox hero-image">
      <div className="blur"></div>

      <div className="content row-fluid">
        <div className="main">
          <h1 className="title">joey lai</h1>
          <div className="sub-title">software developer & lifelong learner</div>
        </div>

        <div className="nav">
          <div className="nav-links">
            <NavLink to="/about" activeClassName="active">
              <div className="nav-link"> About </div>
            </NavLink>
            <NavLink to="/skills" activeClassName="active">
              <div className="nav-link"> Skills </div>
            </NavLink>
            <NavLink to="/projects" activeClassName="active">
              <div className="nav-link"> Projects </div>
            </NavLink>
            <NavLink to="/contact" activeClassName="active">
              <div className="nav-link"> Contact </div>
            </NavLink>
          </div>

          <div className="social">
            <a className="facebook" href="https://facebook.com/joey.lai" target="_blank" rel="noopener noreferrer"> <i className="fa fa-facebook"></i> </a>
            <a className="linkedin" href="https://ca.linkedin.com/in/jlai403" target="_blank" rel="noopener noreferrer"> <i className="fa fa-linkedin"></i> </a>
            <a className="github" href="https://github.com/jlai403" target="_blank" rel="noopener noreferrer"> <i className="fa fa-github"></i> </a>
            <a className="stackoverflow" href="http://stackoverflow.com/users/2060484/joey" target="_blank" rel="noopener noreferrer"> <i className="fa fa-stack-overflow"></i> </a>
            <a className="instagram" href="https://instagram.com/_jlai/" target="_blank" rel="noopener noreferrer"> <i className="fa fa-instagram"></i> </a>
            <a className="twitter" href="https://twitter.com/jlai_" target="_blank" rel="noopener noreferrer"> <i className="fa fa-twitter"></i> </a>
            <a className="google" href="https://google.com/+jlai403" target="_blank" rel="noopener noreferrer"> <i className="fa fa-google-plus"></i> </a>
            <a className="pinterest" href="https://www.pinterest.com/jlai403/" target="_blank" rel="noopener noreferrer"> <i className="fa fa-pinterest-p"></i> </a>
          </div>
        </div>

        <div className="main-background"></div>
      </div>
    </div>
  );
}

export default Home;
