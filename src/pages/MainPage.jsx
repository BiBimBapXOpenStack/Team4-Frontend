import React from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

const MainPage = () => {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate('/calendar/');
  };

  return (
    <>
      <Button variant="text" onClick={handleOnClick}>
        Calendar
      </Button>
    </>
  );
};

export default MainPage;
