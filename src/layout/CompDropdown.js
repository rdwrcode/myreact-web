import React, { Component } from 'react';
import './CompDropdown.css';

class CompDropdown extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: this.props.options[this.props.defaultIndex]
    }
    this.changeHandler = this.changeHandler.bind(this);
  }

  changeHandler(e) {
    this.setState({value: e.target.value});
    this.props.cb(this.props.options.indexOf(e.target.value))
  }

  render() {
    return (
      <div className="CompDropdown">
        <select name="select" 
          defaultValue={this.state.value}
          onChange={this.changeHandler}>
          {this.props.options.map(
            (o, index) => (
              <option key={index} value={o}>{o}</option>
            )
          )}
        </select>
      </div>
    );
  }
}

export default CompDropdown;