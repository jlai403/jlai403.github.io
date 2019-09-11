import React from 'react';

import './About.scss';

function About() {
  return (
    <div id="about">
      <div className="container">
        <div className="name row">
          <div className="name">Joey Lai</div>
          <div className="title">software developer</div>
        </div>
        <div className="row">
          <div className="col">
            <div className="block">
              <div className="header">location</div>
              <div className="value">Calgary, AB</div>
            </div>
          </div>
          <div className="col">
            <div className="block">
              <div className="header">origin</div>
              <div className="value">Hong Kong</div>
            </div>
          </div>
          <div className="col">
            <div className="block">
              <div className="header">year</div>
              <div className="value">1991</div>
            </div>
          </div>
          <div className="col">
            <div className="block">
              <div className="header">experience</div>
              <div className="value">6 years</div>
            </div>
          </div>
        </div>
        <div className="no margin row">
          <div className="col">
            <div className="block">
              <div className="header">favorite team</div>
              <div className="value">Tampa Bay Lightning</div>
            </div>
          </div>
          <div className="col">
            <div className="block">
              <div className="header">interests</div>
              <div className="value">Startups • Sports • Cars</div>
            </div>
          </div>
          <div className="two wide col">
            <div className="block">
              <div className="header">currently developing in</div>
              <div className="value"> Node.js • MongoDB • SSIS • T-SQL </div>
            </div>
          </div>
        </div>

        <div className="row">
          do something here...
        </div>
      </div>
    </div>
  );
}

export default About;
