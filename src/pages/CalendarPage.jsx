import React, { useState, useEffect } from 'react';
import { CalendarBase, ScheduleBase } from '../components';
import moment from 'moment';

const style = {
  width: '960px',
  margin: '0 auto',
};

const CalendarPage = () => {
  const [value, onChange] = useState(new Date());

  useEffect(() => {
    console.log(value);
  }, [value]);

  const handleOnClick = (e) => {};

  return (
    <div style={style}>
      <div>
        <CalendarBase
          onClick={handleOnClick}
          value={value}
          onChange={onChange}
        />
      </div>
      <div style={{ textAlign: 'center' }}>
        <p>{moment(value).format('YY년 MM월 DD일')}</p>
        <div>
          <ScheduleBase />
        </div>
      </div>
    </div>
  );
};

export default CalendarPage;
