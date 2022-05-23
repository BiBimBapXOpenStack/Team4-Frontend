import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

const MainPage = () => {
  const navigate = useNavigate();
  const [login, setLogin] = useState(false);

  const handleOnClick = (e) => {
    //navigate('/calendar/');
    e.preventDefault();
    const innerText = e.target.innerText;
    if(innerText === 'LOGIN'){ // 로그인 버튼 클릭 시 로그인 화면으로 전환
      navigate('/login/', {state : {success : login}});
    }else{
      setLogin(false);
      alert('로그아웃 되었습니다.');
    }
  };

  useEffect(() =>{
    console.log(login);
  },[login]);

  const handleWriteClick = () =>{
    console.log('write text');
  }

  return (
    <>
      {/*<Button variant="text" onClick={handleOnClick} color="primary">*/}
      {/*  Calendar*/}
      {/*</Button>*/}
      <div>
        {
          login ?
            <Button variant={"text"} onClick={handleWriteClick} color={'primary'}>
              Write
            </Button>
            :
            null
        }
        <Button variant="text" onClick={handleOnClick} color="primary">
          {login ? 'logout' : 'login'}
        </Button>
      </div>
      <div>

      </div>
    </>
  );
};

export default MainPage;
