import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import {loginState} from '../store/atom';
import {GridBase} from '../components';

const MainPage = () => {
  const navigate = useNavigate();
  const login = useRecoilValue(loginState);

  // useEffect(() =>{
  //    작성된 글이 몇 개가 있는지 받아오는 api, 화면이 열리자마자 실행한다.
  // },[]);


  const handleOnClick = (e) => {
    //navigate('/calendar/');
    e.preventDefault();
    const innerText = e.target.innerText;
    if(innerText === 'LOGIN'){ // 로그인 버튼 클릭 시 로그인 화면으로 전환
      navigate('/login/');
    }else{
      alert('로그아웃 되었습니다.');
    }
  };

  const handleWriteClick = () =>{
    console.log('write text');
  }

  const move2Text = () =>{
    navigate('/readContent/');
  }

  return (
    <>
      {/*<Button variant="text" onClick={handleOnClick} color="primary">*/}
      {/*  Calendar*/}
      {/*</Button>*/}
      <div id={'status-field'}>
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
      <div id={'main-field'}>
        {/*<GridBase
         받아온 내용을 props로 넘김
        />*/}
        <GridBase
          content={[1,2,3,4,5,6]}
          click={move2Text}
        />
      </div>
    </>
  );
};

export default MainPage;
