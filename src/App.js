import React, { Component } from 'react';
import logo from './me.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Won Maung Thein</h1>
          <h2 className="App-title">Junior Frontend Web-developer</h2>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <footer className="App-footer">
          <h1>This part is a footer.</h1>
        </footer>
      </div>
    );
  }
}

export default App;
