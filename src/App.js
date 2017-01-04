import React, { Component } from 'react';
import './App.css';

import About from './about/About';
import Checkout from './form/Checkout';
import Clock from './clock/Clock';

class App extends Component {

  render() {    
    return (
      <div className="App">
        <About />
        <hr />
        <Checkout />
        <hr />
        <Clock />
      </div>
    );
  }
}

export default App;
