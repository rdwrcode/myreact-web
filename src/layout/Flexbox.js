import React, { Component } from 'react';
import * as _ from 'lodash';

import Form from './Form';
import Child from './Child';

import './Flexbox.css';

const containerOptions = {
  flexDirection: ["row","row-reverse","column","column-reverse"],
  justifyContent: ["flex-start","flex-end","center","space-between","space-around"],
  alignItems: ["flex-start","flex-end","center","stretch","baseline"],
  flexWrap: ["nowrap","wrap","wrap-reverse"],
  alignContent: ["flex-start","flex-end","center","stretch","space-between","space-around"]
}

const itemOptions = {
  alignSelf: ["auto","flex-start","flex-end","center","baseline","stretch"],
  flexGrow: _.range(0,6),
  order: _.range(-10,11)
}

class Flexbox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      children: _.range(1,5).map(function(n){
        return _.extend(_.mapValues(itemOptions,_.first),{ ID: n, order: 0, flexGrow: 0 });
      }),
      parent: _.mapValues(containerOptions,_.first),
      selectedId: 0
    };

    this.setValue = this.setValue.bind(this);
  }

  setValue() {
    var arr = Array.prototype.slice.call(arguments),
        val = arr.pop(),
        prop = arr.pop(),
        clone = _.cloneDeep(this.state),
        pointer = clone;
    while(arr.length) pointer = pointer[arr.shift()];
    pointer[prop] = _.isFinite(parseInt(val)) ? parseInt(val) : val;
    this.setState(clone);
  }

  changeHandler(e) {
    console.log(e.target.value);
  }

  componentDidMount() {
  }

  render() {
    const s = this.state;
    const child = s.selectedId;
    const cbmaker = Function.prototype.bind.bind(this.setValue,this);
    return (
      <div className="Flexbox-app">
        <div className="wrapper" key={Date()}>
          <div className="explanation">...</div>
          <div className="forms">
            <Form title="container" options={containerOptions} values={s.parent} callback={cbmaker("parent")} />
            <Form title={"child #"+(child+1)} options={itemOptions} values={s.children[child]} callback={cbmaker("children",child)} />
          </div>
          <div className="container" style={s.parent}>
            {s.children.map(function(c,n){
              return <Child key={c.ID} def={c} selected={n===child} callback={cbmaker("selectedId",n)} />;
            },this)}
          </div>
        </div>
        <div className="Flexbox-main">
          <h2>Properties for the flexbox container</h2>
          <div className="Flexbox-control">
            <h4>flex-direction
              <small>(property of the flex container)</small>
            </h4>
            <div className="radio">
              <input name="flex-direction" type="radio" id="R11" 
                className="flex-direction" value="row" checked onChange={this.changeHandler.bind(this)} />
                <label id="label-R11">row:</label>
              <input name="flex-direction" type="radio" id="R12" 
                className="flex-direction" value="row-reverse" onChange={this.changeHandler.bind(this)} />
                <label id="label-R12">row-reverse:</label>
              <input name="flex-direction" type="radio" id="R13" 
                className="flex-direction" value="column" onChange={this.changeHandler.bind(this)} />
                <label id="label-R13">column:</label>
              <input name="flex-direction" type="radio" id="R14" 
                className="flex-direction" value="column-reverse" onChange={this.changeHandler.bind(this)} />
                <label id="label-R14">column-reverse:</label>
            </div>
            <div className="flex-container" id="direction">
              <div className="item" data-color="2a80b9"><p>1</p></div>
              <div className="item" data-color="8f44ad"><p>2</p></div>
              <div className="item" data-color="16a086"><p>3</p></div>
              <div className="item" data-color="f1c40f"><p>4</p></div>
              <div className="item" data-color="e77e23"><p>5</p></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Flexbox;
