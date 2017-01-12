import React, { Component } from 'react';
import * as _ from 'lodash';
import Dropdown from './Dropdown';

class Form extends Component {
  render() {
    const p = this.props;
    return (
      <div className='form'>
        <strong key='title'>{p.title}</strong>
        {_.mapValues(p.options,function(opts,name){
          return (
            <div key={name} className='formrow'>
              <span>{name}: </span>
              <Dropdown options={opts} current={p.values[name]} callback={p.callback.bind(this,name)} />
            </div>
          );
        },this)}
      </div>
    );
  }
}

export default Form;
