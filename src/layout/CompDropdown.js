import React, { Component } from 'react';
import './CompDropdown.css';

/*
 * <CompDropdown options={options} defaultIndex='0' cb={callback}/>
 * options: an array of strings which has all the choices
 * defaultIndex: the index of the array as a string, starting from '0'
 * cb: the callback function pointer
 * 
 * To use the destructuring, construct an object first as follows:
 
  const params = {
    options: ['a', 'b', 'c'],
    defaultIndex: '0',
    cb: callbackFunction  
  } 
 
 * Then it is easy to use CompDropdown like this:

  <CompDropdown {...params}/>

 * All styles can be specified in CompDropdown.css with React.
 *  
 */

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