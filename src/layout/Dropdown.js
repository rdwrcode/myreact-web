import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Dropdown extends Component {

  changeOption(e) {
    this.props.callback(this.refs.sel.findDOMNode().value);
  }

  render() {
    return (
      <select ref="sel" onChange={this.changeOption} defaultValue={''+this.props.current} >
        {this.props.options.map(function(o){
          return <option key={o} value={o}>{o}</option>;
        })}
      </select>
    );
  }
}

export default Dropdown;
