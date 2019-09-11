import React from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom'

import About from './About'

import './MainLayout.scss';

function MainLayout() {
  return (
    <div id="layout" class="fadeIn one">
      <div class="container wrapper">
        <nav class="navbar">
          <div class="nav-links">
            <div class="col-xs-2"></div>
            <NavLink to="/" class="nav-link">home</NavLink>
            <NavLink to="/about" class="nav-link">about</NavLink>
            <NavLink to="/skills" class="nav-link">skills</NavLink>
            <NavLink to="/projects" class="nav-link">projects</NavLink>
            <NavLink to="/contact" class="nav-link">contact</NavLink>
          </div>
        </nav>
        <div class="content">
          <Switch>
            <Route path="/about" component={About} />
          </Switch>
        </div>
      </div>

      <footer class="footer">

      </footer>
    </div>
  );
}

export default MainLayout;
