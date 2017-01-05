import React from 'react';

const Switch = ({metric, updateMetric}) => (
  <div className='switch__track'
      onClick={() => updateMetric(metric === 'birth' ? 'death' : 'birth')}>
      <div className={'switch__thumb ' + metric} />
  </div>
);

export default Switch;