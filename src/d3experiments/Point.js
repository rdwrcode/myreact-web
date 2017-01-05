import React from 'react';

class Point extends React.Component {
  componentDidMount() {
    document.getElementById(this.props.id).animate([
      {opacity: 0, fill: 'yellow'},
      {opacity: 0.5},
      {opacity: 0.2, fill: 'black'}
      
    ], {
      duration: 500
    });
  }

  render() {
    const {
      birth,
      death,
      id
    } = this.props;
    return <circle
      cx={birth * 10}
      cy={300 - death * 10}
      id={id}
      r={5}
      style={
        {
          fill: '#222',
          opacity: 0.2
        }
      }
    />;
  }
}

export default Point;
