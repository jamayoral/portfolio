import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="row">
          <div className="twelve columns">
            <ul className="social-links">
              <li>
                <a rel="noopener noreferrer" target="_blank" href="https://twitter.com/jamaygut">
                  <i className="fa fa-twitter" />
                </a>
              </li>
              <li>
                <a rel="noopener noreferrer"
                  target="_blank"
                  href="https://www.linkedin.com/in/juan-antonio-mayoral-guti%C3%A9rrez-3664811b/"
                >
                  <i className="fa fa-linkedin" />
                </a>
              </li>
              <li>
                <a rel="noopener noreferrer" target="_blank" href="https://github.com/jamayoral">
                  <i className="fa fa-github" />
                </a>
              </li>
            </ul>
            <ul className="copyright">
              <li>© Copyright 2019 Juan Antonio Mayoral Gutiérrez</li>
            </ul>
          </div>
          <div id="go-top">
            <a className="smoothscroll" title="Back to Top" href="#home">
              <i className="icon-up-open" />
            </a>
          </div>
        </div>
      </footer>
    );
  }
}
