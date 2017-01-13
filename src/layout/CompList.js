import React, { Component } from 'react';
import { css } from 'glamor';
import './CompList.css';

const colors = ["2a80b9", "8f44ad", "16a086", "f1c40f", "e77e23"]

class CompList extends Component {
  render() {
    let flexdir = css({
      flexDirection: this.props.dir
    })
    return (
      <div className="CompList">
        <ul {...flexdir}>
          {colors.map((c, index) => {
            let bgcolor = css({
              backgroundColor: '#'+c
            })
            return (<li key={index} {...bgcolor}>{index+1}</li>)
          })}
        </ul>
      </div>
    );
  }
}

export default CompList;
