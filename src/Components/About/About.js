import React, { Component } from "react";

export default class About extends Component {
  render() {
    return (
      <section id="about">
        <div className="row">
          <div className="three columns">
            <img
              className="profile-pic"
              src="images/perfil.png"
              alt="profile"
            />
          </div>
          <div className="nine columns main-col">
            <h2>About Me</h2>
            <p>
              Full professional, analytical, recursive and practical with more
              than ten (10) years of experience in different roles such as
              Software Developer, Analyst Developer, Technical Designer,
              Technical Leader and Software Architect. In this way I have a
              complete view of the complexity of a development project. I firmly
              believe that in a software development process, everything happens
              for a reason; This has led me to develop the ability to identify
              all the variables involved in a software development project; and
              analyze the connection between them, as well as their cause-effect
              relationships. My experience has allowed me to be a careful,
              cautious and strategic person to make decisions without falling
              into paralysis by analysis. I tend to visualize obstacles and
              impediments before they become evident and this allows me to make
              the most appropriate decisions to the context in which I am.
              Finally and enhancing all the above, I believe that my greatest
              ability is the resolution of the problems and conflicts that
              always arise in the software development process.
            </p>
          </div>
        </div>
      </section>
    );
  }
}
