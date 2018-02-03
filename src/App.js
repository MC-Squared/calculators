import React, { Component } from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import DateCalculatorApp from './date_calculator/date_calculator_app';
import NavBar from './NavBar'

class App extends Component {
  render() {
    switch(window.location.hostname) {
      case 'localhost':
        return (
          <div>
            <NavBar />
            <DateCalculatorApp />
          </div>
        );
      default:
        return (
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">Welcome to React</h1>
            </header>
            <p className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
            </p>
          </div>
        );
    }
  }
}

export default App;
