import { TextField } from '@mui/material';
import { lineHeight } from '@mui/system';
import React, { useCallback, useEffect, useState } from 'react';

const timeSideStyle = {
  float: 'left',
  width: '15%',
  backgroundColor: 'white',
};

const scheduleSideStyle = {
  float: 'right',
  width: '85%',
};

const timeStampStyle = {
  height: '20px',
  lineHeight: '20px',
};

const ScheduleBase = (props) => {
  const { timeSelect } = props;
  const [timeStamp, setTimeStamp] = useState([]);
  const [timeType, setTimeType] = useState(''); // 12, 24로 12이면 12am, pm으로 표기, 24일 시, 24시간 형식으로 표기
  const [textField, setTextField] = useState([]);

  const makeDefaultTimeLine = useCallback(() => {
    let time = [];
    for (let hour = 1; hour <= 24; hour++) {
      if (timeType === '24') {
        if ((hour - 1).toString().length === 1) {
          time.push(`0${hour}`);
        } else {
          time.push((hour - 1).toString());
        }
      } else {
        if (hour < 14) {
          time.push(`${hour - 1} a.m.`);
        } else {
          time.push(`${hour - 13} p.m.`);
        }
      }
    }
    return time;
  }, [timeType]); // 시간 형식에 따라 타임 스탬프 변경

  const makeTextField = () => {
    const text = [];
    for (let hour = 0; hour < 24; hour++) {
      text.push(
        <TextField
          key={hour}
          id="scheduleText"
          // label="schedule"
          variant="standard"
          fullWidth={true}
        />,
      );
    }
    setTextField(text);
  };

  useEffect(() => {
    makeTextField();
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
        {textField.map((index, value) => {
          return (
            <div key={value} style={{ height: '36px' }}>
              {index}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ScheduleBase;
