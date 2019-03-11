import React, { Component } from "react";
import "./App.css";
import Form from "./components/Form/Form";
import icon from "./assets/DOMadLipsIcon.png";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subWords: false
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">
            <img className="Image" src={icon} />
            DOMadLibs
          </h1>
          <Form />
        </header>
      </div>
    );
  }
}

export default App;
