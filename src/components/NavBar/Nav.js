import React from "react";
import { Component } from "react";
// import { Button } from "react-bootstrap";
import { NavItem } from "react-bootstrap";

// import "./Nav.css";
export class Nav extends Component {
  render() {
    return (
      <div>
        {/* <ButtonToolbar> */}
        {/* <Button bsStyle="primary" bsSize="large">
          Large button
        </Button>
        <Button bsSize="large">Large button</Button> */}
        {/* </ButtonToolbar> */}

        <Nav bsStyle="pills">
          <NavItem eventKey={1} href="/home">
            NavItem 1 content
          </NavItem>
        </Nav>
        {/* <button>Skills</button>
        <button>Education</button>
        <button>Work Experience</button>
        <button>Volunteering</button>
        <button>Award</button> */}
      </div>
    );
  }
}
