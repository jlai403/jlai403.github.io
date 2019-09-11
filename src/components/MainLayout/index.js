import React from 'react';
import { Switch, Route, NavLink } from 'react-router-dom'

import About from './About'
import Skills from './Skills'
import Projects from './Projects'
import Contact from './Contact'

import './MainLayout.scss';

function MainLayout() {
  return (
    <div id="layout" className="fadeIn one">
      <div className="container wrapper">
        <nav className="navbar">
          <div className="nav-links">
            <div className="col-xs-2"></div>
            <NavLink exact to="/" className="nav-link">home</NavLink>
            <NavLink to="/about" className="nav-link" activeClassName="active">about</NavLink>
            <NavLink to="/skills" className="nav-link" activeClassName="active">skills</NavLink>
            <NavLink to="/projects" className="nav-link" activeClassName="active">projects</NavLink>
            <NavLink to="/contact" className="nav-link" activeClassName="active">contact</NavLink>
          </div>
        </nav>
        <div className="content">
          <Switch>
            <Route path="/about" component={About} />
            <Route path="/skills" component={Skills} />
            <Route path="/projects" component={Projects} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </div>
      </div>

      <footer className="footer">

      </footer>
    </div>
  );
}

export default MainLayout;
