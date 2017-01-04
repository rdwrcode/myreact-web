import React, { Component } from 'react';
import './App.css';

import About from './about/About';
//import Checkout from './form/Checkout';
//import Clock from './clock/Clock';
import Clock from './clocks/Clocks';
//import Gallery from './gallery/Gallery';

class App extends Component {

  render() {    
    return (
      <div className="App">
        <About />
        <Clock />
        <hr />
      </div>
    );
  }
}

export default App;
