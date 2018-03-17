import React from "react";
import { Component } from "react";
import { EliteCare } from "./EliteCare";
import CodeYourFutureDiscription from "./CodeYourFutureDiscription";
import { ExploreLearning } from "./ExploreLearning";
import { EllensGlen } from "./EllensGlen";
import { ActionGroup } from "./ActionGroup";

export class Experiences extends Component {
  render() {
    return (
      <div>
        <h1>Experiences</h1>
        <div>
          <CodeYourFutureDiscription />
        </div>
        <div>
          <EliteCare />
        </div>
        <div>
          <ExploreLearning />
        </div>
        <div>
          <EllensGlen />
        </div>
        <div>
          <ActionGroup />
        </div>
        {/* <div className="section1">section1</div>
        <div className="section2">section2</div>
        <div className="section3">section3</div>
        <div className="section4">section4</div>
        <div className="section5">section5</div>
        <div className="section5">section6</div> */}
      </div>
    );
  }
}
