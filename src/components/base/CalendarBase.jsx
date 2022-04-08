import React from 'react';
import Calendar from 'react-calendar';
import moment from 'moment';
import './CalendarBase.css';

const CalendarBase = (props) => {
  const { onClick, value, onChange } = props;

  return (
    <Calendar
      value={value}
      onClickDay={onClick}
      onChange={onChange}
      calendarType="US"
      formatDay={(local, date) => moment(date).format('D')}
      showNeighboringMonth={false}
    />
  );
};

export default CalendarBase;
