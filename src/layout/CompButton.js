import React, { Component } from 'react';
import './CompButton.css';

class CompButton extends Component {
  render() {
    return (
      <button 
        className='CompButton' 
        type='submit'
        onClick={this.props.cb}>
        {this.props.text}
      </button>
    );
  }
}

export default CompButton;
