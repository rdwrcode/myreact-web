import React, { Component } from 'react';
import './Sound.css';

class Sound extends Component {
  render() {
    return (
      <div className="Sound">
        <div className="Sound-keys">
          <div data-key="65" className="Sound-key">
            <div className="Sound-kbd">A</div>
            <span className="Sound-sound">clap</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Sound;
