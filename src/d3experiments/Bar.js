import React from 'react';

const Bar = ({bindex, country, value, rank}) => (
  <div
    key={bindex}
    className='bar'
    style={{position: 'absolute',
    top: 30 + 20 * rank,
    transition: 'top .5s'}} >
    <div className='bar__label'>{country}</div>
    <div className='bar__mark' 
      style={{width: 4 * value}}/>
  </div>
);

export default Bar;
