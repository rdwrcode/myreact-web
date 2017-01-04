import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Audio extends Component {
  constructor() {
    super();
    this.state = {
      audioEl: null
    }
  }

  componentDidMount() {

    const audio = ReactDOM.findDOMNode(this.refs.audio_tag);
    this.setState({audioEl: audio});

    console.log(this.audio);
    //this.state.audio.currentTime = 0;
    //this.state.audio.play();
  
  }

  render() {
    return (
      <div>
        <audio ref="audio_tag" data-key="65" src="wav/clap.wav" controls autoPlay="true"></audio>
      </div>
    )
  }
}

export default Audio;