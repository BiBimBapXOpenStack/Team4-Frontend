import React, { useState } from 'react';

const timeSideStyle = {
  float: 'left',
  width: '15%',
  backgroundColor: 'black',
};

const scheduleSideStyle = {
  float: 'right',
  width: '85%',
  backgroundColor: 'red',
};

const ScheduleBase = () => {
  return (
    <div id="scheduler">
      <div id="time-sidebar" style={timeSideStyle}></div>
      <div id="schedule-text" style={scheduleSideStyle}></div>
    </div>
  );
};

export default ScheduleBase;
