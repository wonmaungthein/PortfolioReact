import React from "react";
import { Component } from "react";
import logo from "./me.jpg";

export class Header extends Component {
  render() {
    return (
      <div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Won Maung Thein</h1>
          <h2 className="App-title">Junior Web-developer</h2>
        </header>
      </div>
    );
  }
}
