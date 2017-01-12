import React, { Component } from 'react';
import './CompRadioLabel.css';

class CompRadioLabel extends Component {
  constructor(props) {
    super(props);
    
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler(index) {
    console.log('CompRadioLabel:'+index);
    this.props.cb(index);
  }

  render() {
    return (
      <div className="CompRadioLabel">
        {
          (this.props.checkedIndex===index) ?
            <input key={index+20} type='radio' value={o} defaultChecked 
              onClick={this.clickHandler(index)}/> :
            <input key={index+20} type='radio' value={o} onClick={this.clickHandler(index)} />     
        }
        <label key={index+30}>{o+':'}</label>
      </div>
    );
  }
}

export default CompRadioLabel;
