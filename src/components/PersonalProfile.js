import React from "react";
// import {Component} from 'react';

const styles = {
  textAlign: "center"
};

class PersonalProfile extends React.Component {
  render() {
    return (
      <div>
        <h1 style={styles}>Personal Profile</h1>
        <p>
          A self-motivated, energetic and determined individual who has the
          ability to accomplish set goals within limited time. I am
          approachable, cooperative, supportive and a detail conscious person. I
          am dedicated to achieve my set goals. I have great interest in web
          development, and I am always excited to learn more and create
          engaging, interactive websites. I also enjoy solving problems, taking
          responsibility and using my skills in group projects.
        </p>
      </div>
    );
  }
}

export default PersonalProfile;
