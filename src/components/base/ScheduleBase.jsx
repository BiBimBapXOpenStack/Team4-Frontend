import React, { useCallback, useEffect, useState } from 'react';

const timeSideStyle = {
  float: 'left',
  width: '15%',
  backgroundColor: 'white',
};

const scheduleSideStyle = {
  float: 'right',
  width: '85%',
  backgroundColor: 'red',
};

const timeStampStyle = {
  height: '20px',
  lineHeight: '20px',
};

const ScheduleBase = (props) => {
  const { timeSelect } = props;
  const [timeStamp, setTimeStamp] = useState([]);
  const [timeType, setTimeType] = useState(''); // 12, 24로 12이면 12am, pm으로 표기, 24일 시, 24시간 형식으로 표기

  const makeDefaultTimeLine = useCallback(() => {
    let time = [];
    if (timeType === '24') {
      for (let i = 0; i < 24; i++) {
        if (i.toString().length === 1) {
          time.push(`0${i}`);
        } else {
          time.push(i.toString());
        }
      }
    }
    return time;
  }, [timeType]);

  useEffect(() => {
    setTimeType(timeSelect);
    const time = makeDefaultTimeLine();
    setTimeStamp(time);
  }, [timeSelect, makeDefaultTimeLine]); // 타입 변경 시 리렌더링

  return (
    <div id="scheduler">
      <div id="time-sidebar" style={timeSideStyle}>
        {timeStamp.map((index, value) => {
          return (
            <div key={value} className="time" style={timeStampStyle}>
              <p style={timeStampStyle}>{`${index}`}</p>
            </div>
          );
        })}
      </div>
      <div id="schedule-text" style={scheduleSideStyle}>
        111
      </div>
    </div>
  );
};

export default ScheduleBase;
