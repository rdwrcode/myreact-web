import React, { Component } from 'react';
import './App.css';

import About from './about/About';
//import Checkout from './form/Checkout';
//import Clock from './clock/Clock';
import Clock from './clocks/Clocks';
//import Gallery from './gallery/Gallery';
//import D3svg from './d3experiments/D3ex';
//import D3Chart from './d3experiments/Chart';
//import Plot from './d3experiments/Plot';
import ClusterContainer from './d3experiments/ClusterContainer';
//import Flexbox from './layout/Flexbox';
import Layout from './layout/Layout';
import Animation from './css/Animation';
// this is very special example
import Counter from './secret/State';

class App extends Component {

  render() {    
    return (
      <div className="App">
        <About />
        <Clock />
        <hr />
        <ClusterContainer />
        <hr />
        <Layout />
        <hr />
        <Animation />
        <Counter step={5} />
      </div>
    );
  }
}

export default App;
