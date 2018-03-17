import React, { Component } from "react";
import "./bg.jpg";
import "./App.css";
// import Button from "./components/Button";
import PersonalProfile from "./components/PersonalProfile";
import KeySkills from "./components/KeySkills";
import { Experiences } from "./components/Experiences";
import { Education } from "./components/Education";
import { Volunteering } from "./components/Volunteering";
import { Awards } from "./components/Awards";
import { Header } from "./Header";
import { Footer } from "./components/Footer";
import { Nav } from "./components/NavBar/Nav";
// import EducationBackGround from "./components/EducationBackGround";
// import CodeYourFutureDetails from './components/CodeYourFutureDetails';
// import CodeYourFutureDiscription from './components/CodeYourFutureDiscription';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="navbar">
          <Nav />
        </div>
        <div>
          <Header />
        </div>

        <div className="App-body">
          <div className="firstSection">
            <div className="PersonalProfile">
              <PersonalProfile />
            </div>
            <div className="KeySkills">
              <KeySkills />
            </div>
          </div>

          <div className="secondSection">
            <div className="experiences">
              <Experiences />
            </div>
          </div>
          <div className="thirdSection">
            <div className="education">
              <Education />
            </div>
          </div>
          <div className="forthSection">
            <div className="volunteering">
              <Volunteering />
            </div>
          </div>
          <div className="fifthSection">
            <div className="awards">
              <Awards />
            </div>
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;

//   <div>
//     <EducationBackGround name="Techonology related" />
//   </div>
//   <p className="education">
//     <Button name="codeyourfuture" value="3333" />
//     {/* <CodeYourFutureDetails  title = 'CodeYourFuture'  text = 'eoifjmkdjfoldfk'/> */}
//     {/* <CodeYourFutureDiscription/> */}
//     <Button name=" Udacity(Scholarship)" />
//     <Button name="Work Experience" />
//     <Button name="Volunteering Experience" />
//   </p>
//   <div>
//     <EducationBackGround name="Non-Techonology related" />
//   </div>
//   <p>
//     <Button name="University of Edinburgh" />
//     <Button name="Geniver University(Scholarship)" />
//     <Button name="Ritsumeikan University(Scholarship)" />
//     <Button name="Newbattle Abbey College" />
//     <Button name="Work Experience" />
//     <Button name="Volunteering Experience" />
//     <Button name="Languages" />
//     <Button name="Additional information" />
//     <Button name="References" />
//   </p>
// </div>
