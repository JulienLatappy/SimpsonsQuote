// src/App.js
import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Quote from "./Quote.js";
import Lamp from "./Lamp.jsx";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        on : true
      };
    }
  
  handleClick = () => {
    this.setState({on: !this.state.on });
  };
  
  
  
    render() {
    const light = this.state.on ? 'En train de travailler ! ' : 'Ne travaille pas !';
    const speed = this.state.on ? 'App-logo' : 'speedlogo' ;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className={speed} alt="logo" />
          <h1 className="App-title">Simpsons Quotes</h1>
        </header>
        <button onClick={this.handleClick}>
        {light}</button>
        <Lamp on />
        <Lamp />

        
        <Quote
          quote="I believe the children are the future... Unless we stop them now!"
          character="Homer Simpson"
          image="https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939"
        />
        <Quote
          quote="Me fail English? That's unpossible"
          character="Ralph Wiggum"
          image="https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FRalphWiggum.png?1497567511523"
        />
      </div>
    );
  }
}

export default App;
