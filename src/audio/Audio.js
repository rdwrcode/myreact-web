import React, { Component } from 'react';
import ReactDOM from 'react-dom';


class Audio extends Component {
  componentDidMount() {
    const audio = this.audio = ReactDOM.findDOMNode(this.refs.audio_tag);
    console.log(audio);
  }  

  render() {
    return (
      <audio ref='audio_tag' src='clap.wav' controls autoPlay='true' />
    );
  }
}

export default Audio;
