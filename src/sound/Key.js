import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './Key.css';

class Key extends Component {
  constructor() {
    super();

    this.audio = null;
    this.keyDownHandler = this.keyDownHandler.bind(this);
  }

  keyDownHandler(e) {
    console.log(e.key); // shift, ctrl detected too. synthetic events intead of native events
    this.audio.currentTime = 0;
    //this.audio.play();
  }

  componentDidMount() {
    this.audio = ReactDOM.findDOMNode(this.refs.audio_tag)
    console.info(this.audio);
  }

  render() {
    return (
      <div>
        <input type="text" onKeyDown={this.keyDownHandler} />
        <audio ref="audio_tag" data-key="65" src="wav/clap.wav"></audio>
      </div>
    )
  }
}

export default Key;