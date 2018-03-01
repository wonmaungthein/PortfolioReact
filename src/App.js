import React, { Component } from 'react';
import logo from './me.jpg';
import './bg.jpg';
import './App.css';
import Button from './components/Button';
import PersonalProfile from './components/PersonalProfile';
import KeySkills from './components/KeySkills';
import EducationBackGround from './components/EducationBackGround';
// import CodeYourFutureDetails from './components/CodeYourFutureDetails';
import CodeYourFutureDiscription from './components/CodeYourFutureDiscription';


class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <img src = "bg.jpg"/> */}
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Won Maung Thein</h1>
          <h2 className="App-title">Junior Frontend Web-developer</h2>
        </header>
        <div className="App-body">
          {/* <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p> */}
          <div className="PersonalProfile">
            <PersonalProfile />
          </div>
          <div className="KeySkills">
            <KeySkills />
          </div>
          <div>
            <EducationBackGround name="Techonology related" />
          </div>
          <p className="education">
            <Button name="codeyourfuture" value = "3333" />
               {/* <CodeYourFutureDetails  title = 'CodeYourFuture'  text = 'eoifjmkdjfoldfk'/> */}
               <CodeYourFutureDiscription/>
            <Button name=" Udacity(Scholarship)" />
            <Button name="Work Experience" />
            <Button name="Volunteering Experience" />
          </p>
          <div>
            <EducationBackGround name="Non-Techonology related" />
          </div>
          <p>
            <Button name="University of Edinburgh" />
            <Button name="Geniver University(Scholarship)" />
            <Button name="Ritsumeikan University(Scholarship)" />
            <Button name="Newbattle Abbey College" />
            <Button name="Work Experience" />
            <Button name="Volunteering Experience" />
            <Button name="Languages" />
            <Button name="Additional information" />
            <Button name="References" />
          </p>
        </div>
        <footer className="App-footer">
          <h1>This part is a footer.</h1>
        </footer>
      </div>
    );
  }
}

export default App;
