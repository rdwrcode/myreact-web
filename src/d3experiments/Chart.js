import React, { Component } from 'react';
import Switch from './Switch';
import Bar from './Bar';

import birthdeathrates from './birthdeathrates';

import './Chart.css';

class Chart extends Component {
  constructor(props) {
    super(props);
      
    this.state = {
      metric: 'birth',
    };
  }

  render() {
    const metric = this.state.metric;
    const data = this.props.data.sort((a,b) => b[metric] - a[metric])
      .map((d, i) => ({...d, rank: i}))
      .sort((a, b) => b.country > a.country);
  
    return <div className='chart'>
      {[
        <span key='birth' className='label'>Birth rate</span>,
        <Switch key='switch' metric={metric} updateMetric={(d) =>
            this.setState({metric: d})
        }/>,
        <span key='death' className='label'>Death rate</span>,
        <div key='bar'>
          {data.map((d, index) => 
            <Bar key={index+200} bindex={index+300}
              country={d.country} value={d[metric]} rank={d.rank}/>
          )}
        </div>  
      ]}
    </div>;
  }
}

//const D3Chart = <Chart data={birthdeathrates} />

class D3Chart extends Component {
  render() {
    return <Chart data={birthdeathrates} />
  }
}

export default D3Chart;
