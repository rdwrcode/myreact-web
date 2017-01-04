import React, { Component } from 'react';
import logo from './logo.svg';
import './About.css';

class About extends Component {
  render() {
    return (
      <div className="About">
        <div className="About-header">
          <img src={logo} className="About-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="About-intro">
          Start with create-react-app.
        </p>
      </div>
    );
  }
}

export default About;
