import React, { Component } from "react";

export default class Home extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <div className="row banner">
        <div className="banner-text">
          <h1 className="responsive-headline">I'm {resumeData.name}.</h1>
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
    );
  }
}
