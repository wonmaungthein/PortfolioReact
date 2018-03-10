import React from 'react';
// import {Component} from 'react';

const styles = {
    background: 'blue',
    paddingTop: 150,
    paddingBottom: 150
}

class PersonalProfile extends React.Component {
    render() {
        return (
            <div style ={styles}>
                <h1>Personal Profile</h1>
                <p>A self-motivated, energetic and determined individuals who tried to accomplish the set goals within limited time. I am approachable, very cooperative, supportive and detail oriented person. I have great interest in web development, am curious to learn more and create beautiful websites. I enjoy solving problems, taking responsibility, contributing my skills in group projects and in community. I have been following an intensive full stack web development program at CodeYourFuture, and I hope that I land my first job as a developer once I graduate from the course.</p>
            </div>
        )
    }
}

export default PersonalProfile;


