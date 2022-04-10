import React, { useState, useEffect } from 'react';
import { CalendarBase, ScheduleBase } from '../components';
import moment from 'moment';
import SelectBase from '../components/base/SelectBase';

const style = {
  width: '960px',
  margin: '0 auto',
};

const CalendarPage = () => {
  const [value, onChange] = useState(new Date());
  const [timeType, setTimeType] = useState('24');
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
        <div style={{ textAlign: 'center' }}>
          <p style={{ display: 'inline-block' }}>
            {moment(value).format('YY년 MM월 DD일')}
          </p>
          <SelectBase setTimeType={setTimeType} inputItems={['12', '24']} />
        </div>
        <ScheduleBase timeSelect={timeType} />
      </div>
    </div>
  );
};

export default CalendarPage;
