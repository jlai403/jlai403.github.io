import React from 'react';
import { NavLink } from 'react-router-dom'

import './About.scss';

function MainLayout() {
  return (
    <div id="about">
      <div class="container">
        <div class="name row">
          <div class="name">Joey Lai</div>
          <div class="title">software developer</div>
        </div>
        <div class="row">
          <div class="col">
            <div class="block">
              <div class="header">location</div>
              <div class="value">Calgary, AB</div>
            </div>
          </div>
          <div class="col">
            <div class="block">
              <div class="header">origin</div>
              <div class="value">Hong Kong</div>
            </div>
          </div>
          <div class="col">
            <div class="block">
              <div class="header">year</div>
              <div class="value">1991</div>
            </div>
          </div>
          <div class="col">
            <div class="block">
              <div class="header">experience</div>
              <div class="value">6 years</div>
            </div>
          </div>
        </div>
        <div class="no margin row">
          <div class="col">
            <div class="block">
              <div class="header">favorite team</div>
              <div class="value">Tampa Bay Lightning</div>
            </div>
          </div>
          <div class="col">
            <div class="block">
              <div class="header">interests</div>
              <div class="value">Startups • Sports • Cars</div>
            </div>
          </div>
          <div class="two wide col">
            <div class="block">
              <div class="header">currently developing in</div>
              <div class="value"> Node.js • MongoDB • SSIS • T-SQL </div>
            </div>
          </div>
        </div>

        <div class="row">
          do something here...
        </div>
      </div>
    </div>
  );
}

export default MainLayout;
