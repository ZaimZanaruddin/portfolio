import React, { Component } from 'react';
export default class footer extends Component {
  render() {
    return (
        <React.Fragment>
        <footer>
          <div className="row">
            <div className="twelve columns">
              <ul className="social-links">
              <li><a href="https://www.facebook.com/ZaimZanaruddin"><i className="fa fa-facebook" /></a></li>
              <li><a href="https://www.linkedin.com/in/syed-zaim-zanaruddin-851351100/"><i className="fa fa-linkedin" /></a></li>
              <li><a href="https://www.instagram.com/zaim_z/"><i className="fa fa-instagram" /></a></li>
              </ul>
            </div>
            <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open" /></a></div>
          </div>
        </footer>
        </React.Fragment>
    );
  }
};