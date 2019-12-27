import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom'
import { Link, Element, scroller } from 'react-scroll'

import About from './About'
import Skills from './Skills'
import Projects from './Projects'
import Contact from './Contact'

import './MainLayout.scss';

function MainLayout() {

  useEffect(() => {
    let href = window.location.href
    if (!href.includes('#')) return
    let anchor = href.split('#').pop()
    scroller.scrollTo(anchor, {
      duration: 1500,
      delay: 100,
      smooth: true
    })
  })

  return (
    <div id="layout" className="fadeIn one">
      <div className="container wrapper">
        <nav className="navbar">
          <div className="nav-links">
            <div className="col-xs-2"></div>
            <NavLink exact to="/" className="nav-link">home</NavLink>
            <Link href="" to="about" className="nav-link" activeClass="active" spy={true} smooth={true} offset={-65}>about</Link>
            <Link href="" to="skills" className="nav-link" activeClass="active" spy={true} smooth={true} offset={-65}>skills</Link>
            <Link href="" to="projects" className="nav-link" activeClass="active" spy={true} smooth={true} offset={-65}>projects</Link>
            <Link href="" to="contact" className="nav-link" activeClass="active" spy={true} smooth={true} offset={-65}>contact</Link>
          </div>
        </nav>
        <div className="content">
          <Element name="about" className="element">
            <About/>
          </Element>
          <Element name="skills" className="element">
            <Skills/>
          </Element>
          <Element name="projects" className="element">
            <Projects/>
          </Element>
          <Element name="contact" className="element">
            <Contact/>
          </Element>
        </div>
      </div>
      <footer className="footer">

      </footer>
    </div>
  );
}

export default MainLayout;
