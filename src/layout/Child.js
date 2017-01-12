import React, { Component } from 'react';
import * as _ from 'lodash';

class Child extends Component {
  render() {
    const p = this.props;
    return (
      <div onClick={_.ary(p.callback,0)} style={p.def} className={"child"+(p.selected ? " selectedchild":"")}>
        {_.map(p.def,function(val,key){
          return <div key={key}>{key}: {val}</div>;
        },this)}
      </div>
    );
  }
}

export default Child;
