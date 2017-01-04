import React, { Component } from 'react';
import './Gallery.css';

class Gallery extends Component {

  clickHandler(e) {
    console.log(e.target);
    this.refs.panel3.classList.toggle('open');
  }

  transitionEndHandler(e) {
    console.log(e);
    this.refs.panel3.classList.toggle('open-active');
  }

  render() {
    return (
      <div className="Gallery-app">
        <div className="panels">
          <div ref="panel1" className="panel panel1"
            onClick={this.clickHandler.bind(this)} 
            onTransitionEnd={this.transitionEndHandler.bind(this)}
            >
            <p>Hey</p>
            <p>Let's</p>
            <p>Dance</p>
          </div>
          <div ref="panel2" className="panel panel2">
            <p>Give</p>
            <p>Take</p>
            <p>Receive</p>
          </div>
          <div ref="panel3" className="panel panel3">
            <p>Experience</p>
            <p>It</p>
            <p>Today</p>
          </div>
          <div ref="panel4" className="panel panel4">
            <p>Give</p>
            <p>All</p>
            <p>You can</p>
          </div>
          <div ref="panel5" className="panel panel5">
            <p>Life</p>
            <p>In</p>
            <p>Motion</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Gallery;
