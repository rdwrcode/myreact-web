import React, { Component } from 'react';
import CompRadioButton from './CompRadioButton';
import './CompRadio.css';

/* 
 * Note that this radio group gives only one selection among all options.
 *
 * Simply remove the state, then multiple choices are allowed. 
 * This requires the proper handling either at this component or its parent.
 * 
 * The main point is about the logic not the style. 
 * The style can be changed easily at each component. 
 * Configurable theme is not considered here.
 *
 */
class CompRadio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: parseInt(this.props.defaultIndex, 10),
      numOfOptions: this.props.options.length
    }
    
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler(obj) {
    if(obj.state) {
      this.setState({index: this.props.options.indexOf(obj.value)});
    }
    this.props.cb(obj);
  }

  render() {
    const rn = Math.floor(Math.random()*1000);
    return (
      <div className="CompRadio">
        {
          this.props.options.map((o, index) => (
            this.state.index === index ?
            <CompRadioButton key={(rn+index).toString()} value={o} cb={this.clickHandler} checked /> :
            <CompRadioButton key={(rn+index).toString()} value={o} cb={this.clickHandler}/>
          ))
        }
      </div>
    );
  }
}

export default CompRadio;
