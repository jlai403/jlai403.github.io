import React from 'react';
import { Link } from 'react-scroll'

import './About.scss';
import 'font-awesome/css/font-awesome.css'


function About() {
  let yearsExperience = new Date().getFullYear() - 2011

  return (
    <div id="about" style={{minHeight: '100vh'}}>
      <div className="container">
        <div className="intro row">
          <div className="hello">Hello, my name is</div>
          <div className="name">Joey Lai</div>
          <div className="title">and I build products</div>
        </div>
        <div className="row">
          <Link href="" to="skills" spy={true} smooth={true} offset={-65}>
            <div className="bouncing learn-more">
              Learn More <br/>
              <i className="fa fa-chevron-down"></i>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default About;
