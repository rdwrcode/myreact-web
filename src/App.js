import React, { Component } from 'react';
import './App.css';

import About from './about/About';
//import Sound from './sound/Sound';
//import Key from './sound/Key';
//import Audio from './sound/Audio';
//import AudioElement from './sound/AudioElement';
//import Button from './a1audio/Button';
//import AudioTag from './a1audio/AudioTag';

//import ReactAudioPlayer from 'react-audio-player';
//import AudioPlayer from 'react-responsive-audio-player';

//import Sound from 'react-sound';
import Checkout from './form/Checkout';
//import Audio from './reactaudio/Audio';
//import Audio from './audio/Audio';
import Clock from './clock/Clock';
import AnalogClock, { Themes } from 'react-analog-clock';

class App extends Component {

  render() {    
    return (
      <div className="App">
        <About />
        <hr />
        <Checkout />
        <Clock />
        <AnalogClock theme={Themes.dark} />
      </div>
    );
  }
}

export default App;
