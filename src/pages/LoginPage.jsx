import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {TextFieldBase} from '../components';
import Button from '@mui/material/Button';

const LoginPage = () =>{
  const navigate = useNavigate();
  const location = useLocation();
  const { state } = location;
  const [id, setId] = useState('');
  const [pwd, setPwd] = useState('');

  useEffect(() =>{
    console.log(state);
  },[]);

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