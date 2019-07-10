import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <header id="home">
        <div className="videobackground">
          <video autoPlay loop>
            <source src="../video.mp4" type="video/mp4" />
          </video>
        </div>
        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#" title="Hide navigation">
            Hide navigation
          </a>
          <ul id="nav" className="nav">
            <li class="current">
              <a class="smoothscroll" href="#home">
                Home
              </a>
            </li>
            <li>
              <a class="smoothscroll" href="#about">
                About
              </a>
            </li>
            <li>
              <a class="smoothscroll" href="#resume">
                Resume
              </a>
            </li>
          </ul>{" "}
          {/* end #nav */}
        </nav>{" "}
        {/* end #nav-wrap */}
        <div className="row banner">
          <div className="banner-text">
            <h1 className="responsive-headline">
              I'm Juan Antonio Mayoral Gutiérrez
            </h1>
            <h3>
              I'm a Balearic Islands based <span>Software Architect</span>{" "}
              creating awesome Web and Mobile App's with{" "}
              <span>several differents technologies</span>, consulting and
              training. Let's{" "}
              <a className="smoothscroll" href="#about">
                start scrolling
              </a>{" "}
              and learn more{" "}
              <a className="smoothscroll" href="#about">
                about me
              </a>
              .
            </h3>
            <hr />
            <ul className="social">
              <li>
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://twitter.com/jamaygut"
                >
                  <i className="fa fa-twitter" />
                </a>
              </li>
              <li>
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://www.linkedin.com/in/juan-antonio-mayoral-guti%C3%A9rrez-3664811b/"
                >
                  <i className="fa fa-linkedin" />
                </a>
              </li>
              <li>
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://github.com/jamayoral"
                >
                  <i className="fa fa-github" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <p className="scrolldown">
          <a className="smoothscroll" href="#about">
            <i className="icon-down-circle" />
          </a>
        </p>
      </header>
    );
  }
}
