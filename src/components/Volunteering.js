import React from "react";
import { Component } from "react";
import { JPMorgan } from "./JPMorgan";
import { VoCYF } from "./VoCYF";
import { CoderDojo } from "./CoderDojo";

export class Volunteering extends Component {
  render() {
    return (
      <div>
        <h1>VOLUNTEERING and other experiences</h1>
        <div>
          <JPMorgan />
        </div>
        <div>
          <VoCYF />
        </div>
        <div>
          <CoderDojo />
        </div>
      </div>
    );
  }
}
