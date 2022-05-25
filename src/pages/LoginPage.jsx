import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {TextFieldBase} from '../components';
import Button from '@mui/material/Button';
import { useSetRecoilState, useRecoilValue } from 'recoil';
import {loginState} from '../store/atom';

const LoginPage = () =>{
  const navigate = useNavigate();
  const location = useLocation();
  const [id, setId] = useState('');
  const [pwd, setPwd] = useState('');
  const login = useRecoilValue(loginState);
  const setLoginState = useSetRecoilState(loginState)

  // useEffect(() =>{
  //   if(!login){
  //     setLoginState((oldLoginState) => {
  //       return(
  //         !oldLoginState
  //       );
  //     });
  //   } // 로그인 성공 시에 사용할 로직
  // },[]);

  const handleChangeId = (e) =>{
    setId(e.target.value);
  };

  const handleChangePwd = (e) => {
    setPwd(e.target.value);
  };

  const handleOnClickLogin = () =>{
    // 백으로 전송, 성공 시 글쓰기 버튼 활성화, 글쓰기 버튼 없음. axios
  }

  const handleOnClickSignUp = () => {
    navigate('/signup/');
  }

  return(
    <div id='login-field'>
      <TextFieldBase
        id={'id-field'}
        label={'ID'}
        onChange={handleChangeId}
        value={id}
      />
      <br/>
      <br/>
      <TextFieldBase
        id={'pwd-field'}
        label={'PASSWORD'}
        type={'password'}
        onChange={handleChangePwd}
        value={pwd}
      />
      <br/>
      <br/>
      <Button
        onClick={handleOnClickLogin}
        color={'primary'}
      >
       login
      </Button>
      <Button
        onClick={handleOnClickSignUp}
        color={'primary'}
      >
        sign up
      </Button>
    </div>
  );
}

export default LoginPage;