import React, { Component } from 'react';
import { css } from 'glamor';
import './Animation.css';

const nameList = ['bounce', 'pulse', 'rubberband', 'wobble', 'flip', 'hinge'];

class Animation extends Component {
  render() {

    return (
      <div className='Animation'>
        <div className='box1'>
          Hover over the box to see the animation.
        </div>
        <div className='container'>
        {
          nameList.map((e, index) => (
            <div key={index+100} className='box'>
              <div key={index+1000} className={'text animated '+e}>{e}</div>
            </div>
          ))
        }
        </div>
      </div>
    );
  }
}

export default Animation;
