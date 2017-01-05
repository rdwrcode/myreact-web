import React from 'react';
import ScatterPlot from './ScatterPlot';

import birthdeathrates from './birthdeathrates';
import './Plot.css';

class Plot extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonClicked: false,
    };
    this._message = 'Click the button to pass data to the scatterplot.';
  }

  render() {
    const {
      buttonClicked
    } = this.state;
    const updateMessage = (message) => this._message = message;
    
    return (
      <div className='Plot-app'>
        <div>{this._message}</div>
        <ScatterPlot 
          updateMessage={updateMessage}
          data={buttonClicked ? birthdeathrates : []}
        />
        <div>
          <button onClick={() => this.setState({buttonClicked: !buttonClicked})}>
            {buttonClicked ? 'hide' : 'show'}
          </button>
        </div>
      </div>
    )
  }
}

export default Plot;
