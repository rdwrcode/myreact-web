import React, { Component } from 'react';
import './CompRadioButton.css';

class CompRadioButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: this.props.checked ? true : false
    }
    this.changeHandler = this.changeHandler.bind(this);
  }

  changeHandler(e) {
    this.setState({checked: !this.state.checked})
    this.props.cb({
      value: e.target.value,
      state: !this.state.checked
    });
  }

  render() {
    return (
      <div className="CompRadioButton">
        <input 
          type='radio' value={this.props.value} onChange={this.changeHandler} {...this.state}/>
        <label>{this.props.value}</label> 
      </div>
    );
  }
}

export default CompRadioButton;