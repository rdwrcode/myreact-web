import React, { Component } from 'react';
import ReactAudio from './ReactAudio';

class Audio extends Component {
  render() {
    return (
      <ReactAudio source='clap.wav'/>
    );
  }
}

export default Audio;