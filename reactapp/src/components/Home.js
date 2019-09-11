import React from 'react';
import { NavLink } from 'react-router-dom'

import './Home.scss';

function Home() {
  return (
    <div id="homepage" class="container-fluid flexbox hero-image">
      <div class="blur"></div>

      <div class="content row-fluid">
        <div class="main">
          <h1 class="title">joey lai</h1>
          <div class="sub-title">software developer & lifelong learner</div>
        </div>

        <div class="nav">
          <div class="nav-links">
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

          <div class="social">
            <a class="facebook" href="https://facebook.com/joey.lai" target="_blank" rel="noopener noreferrer"> <i class="fa fa-facebook"></i> </a>
            <a class="linkedin" href="https://ca.linkedin.com/in/jlai403" target="_blank" rel="noopener noreferrer"> <i class="fa fa-linkedin"></i> </a>
            <a class="github" href="https://github.com/jlai403" target="_blank" rel="noopener noreferrer"> <i class="fa fa-github"></i> </a>
            <a class="stackoverflow" href="http://stackoverflow.com/users/2060484/joey" target="_blank" rel="noopener noreferrer"> <i class="fa fa-stack-overflow"></i> </a>
            <a class="instagram" href="https://instagram.com/_jlai/" target="_blank" rel="noopener noreferrer"> <i class="fa fa-instagram"></i> </a>
            <a class="twitter" href="https://twitter.com/jlai_" target="_blank" rel="noopener noreferrer"> <i class="fa fa-twitter"></i> </a>
            <a class="google" href="https://google.com/+jlai403" target="_blank" rel="noopener noreferrer"> <i class="fa fa-google-plus"></i> </a>
            <a class="pinterest" href="https://www.pinterest.com/jlai403/" target="_blank" rel="noopener noreferrer"> <i class="fa fa-pinterest-p"></i> </a>
          </div>
        </div>

        <div class="main-background"></div>
      </div>
    </div>
  );
}

export default Home;
