import React from "react";
import { Component } from "react";
import { EdinburghUni } from "./EdinburghUni";
import { Udacity } from "./Udacity";
import { Geniva } from "./Geniva";
import { Ritsumeikan } from "./Ritsumeikan";

export class Education extends Component {
  render() {
    return (
      <div>
        <h1>Education</h1>
        <EdinburghUni />
        <Udacity />
        <Geniva />
        <Ritsumeikan />
      </div>
    );
  }
}
