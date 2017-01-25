/*
 * This shows a way to use the state in react.
 * tweeted by Dan 2017/01/25
 *
 * the way to use it.
 * <Counter step={5} />
 *
 * Note that a function is passed to setState.
 * React will call that function with state and props and use the result for next state.
 *
 * It is safe to call setState with a function multiple times.
 * Updates will be queued and later executed in the order they were called.
 *
 * for testing
 * expect(inc({ value: 0}, {step: 5})).toBe(5);
 * expect(inc({ value: 0}, {step: -5})).toBe(-5);
 * 
 */
import React, { Component } from 'react';

function multiply(multiplier) {
  return function update(state) {
    return {
      value: state.value * multiplier,
    };
  };
}

// more concise
const m = (n) => (state) => ({
  value: state.value * n,
}); 

function inc(state, props) {
  return {
    value: state.value + props.step,
  };
}

function dec(state, props) {
  return {
    value: state.value - props.step,
  }; 
}

class Counter extends Component {
  state = {value: 0};
  
  handleInc = () => {
    this.setState(inc);
  }

  handleDec = () => {
    this.setState(dec);
  }

  handleIncThreeTimes = () => {
    this.setState(inc);
    this.setState(inc);
    this.setState(inc);
  }

  handleMultiplyByFive = () => {
    this.setState(multiply(5));
  }

  render() {
    return (
      <div className="State">
        <button onClick={this.handleInc}>+</button>
        <button onClick={this.handleIncThreeTimes}>+++</button>
        <h1>{this.state.value}</h1>
        <button onClick={this.handleDec}>-</button>
        <button onClick={this.handleMultiplyByFive}>x5</button>
      </div>
    );
  }
}

export default Counter;