import React from 'react';
import Point from './Point';

class ScatterPlot extends React.Component {
  componentDidMount() {
    this.props.updateMessage('Scatterplot component created for the first time.')
  }

  componentDidUpdate(nextProps) {
    this.props.updateMessage(`Scatterplot did update and have ${nextProps.data.length} points.`)
  }

  render() {
    let index = 0;
    return (
      <svg height={300} width={300}>
        {this.props.data.map((d, i) =>
          <Point key={index++} birth={d.birth} death={d.death} id={'point' + i}/>
        )}
      </svg>
    )
  }
}

export default ScatterPlot;
