import React, { Component } from "react";
import Header from "./Components/Header/Header";
import About from "./Components/About/About";
import Resume from "./Components/Resume/Resume";
import Footer from "./Components/Footer/Footer";
import resumeData from "./resumeData";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header resumeData={resumeData} />
        <About />
        <Resume />
        <Footer />
      </div>
    );
  }
}
export default App;
