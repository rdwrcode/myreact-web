import React, { Component } from 'react';
import './Layout.css';

import CompList from './CompList';
import CompRadio from './CompRadio';
//import CompButton from './CompButton';
//import CompDropdown from './CompDropdown';

const flexdirections = ["row","row-reverse","column","column-reverse"];

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dir: 'raw'
    };

    this.radioSelected = this.radioSelected.bind(this);
    this.buttonClicked = this.buttonClicked.bind(this);
    this.dropdownChanged = this.dropdownChanged.bind(this);
  }

  radioSelected(obj) {
    //console.log(obj);
    this.setState({dir: obj.value})
  }

  buttonClicked() {
    console.log('test button clicked');
  }

  dropdownChanged(index) {
    if(index !== -1) {
      // the index is OK  
    } 
    console.log('dropdownChanged'+index);
  }

  render() {
    return (
      <div className="Layout">
        <div className="Layout-control">
          <h2>Properties for the flexbox container</h2>
          <h4>flex-direction<small>( property of the flex container  )</small></h4>
          <CompRadio options={flexdirections} 
            cb={this.radioSelected} 
            defaultIndex='0'/>
        </div>
        <CompList dir={this.state.dir}/>
      </div>
    );
  }
}

export default Layout;

/* 
  <CompButton text='click me' cb={this.buttonClicked} />
  <CompDropdown options={flexdirections} defaultIndex='0' cb={this.dropdownChanged}/>
  <CompRadio options={flexdirections} cb={this.radioSelected} defaultIndex='0'/>
*/
