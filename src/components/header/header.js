import React, { Component } from 'react';
export default class Header extends Component {
  render() {
      return (
      <React.Fragment>
      <header id="home">
        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
          <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
          <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            <li><a className="smoothscroll" href="#about">About</a></li>
            <li><a className="smoothscroll" href="#resume">Resume</a></li>
          </ul> {/* end #nav */}
        </nav> {/* end #nav-wrap */}
        <div className="row banner">
          <div className="banner-text">
            <h1 className="responsive-headline">I'm Zaim Zanaruddin.</h1>
            <h3>I'm a Dallas based Software Developer with a passion to solve problems and create stunning applications. <a className="smoothscroll" href="#about">Start Scrolling </a>
               to learn more about me!</h3> 
            <hr />
            <ul className="social">
              <li><a href="https://www.facebook.com/ZaimZanaruddin"><i className="fa fa-facebook" /></a></li>
              <li><a href="https://www.linkedin.com/in/syed-zaim-zanaruddin-851351100/"><i className="fa fa-linkedin" /></a></li>
              <li><a href="https://www.instagram.com/zaim_z/"><i className="fa fa-instagram" /></a></li>
            </ul>
          </div>
        </div>
        <p className="scrolldown">
          <a className="smoothscroll" href="#about"><i className="icon-down-circle" /></a>
        </p>
      </header>
    </React.Fragment>
    );
  }
};