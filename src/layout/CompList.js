import React, { Component } from 'react';
import './CompList.css';

const colors = ["2a80b9", "8f44ad", "16a086", "f1c40f", "e77e23"]

class CompList extends Component {
  render() {
    return (
      <div className="CompList">
        <ul>
          {colors.map((c, index) => <li key={index}>{index+1}</li>)}
        </ul>
      </div>
    );
  }
}

export default CompList;
