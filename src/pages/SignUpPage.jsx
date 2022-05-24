import React, { useEffect, useState } from 'react';
import { TextFieldBase } from '../components';
import Button from '@mui/material/Button';

const SignUpPage = () =>{
  const [id, setId] = useState('');
  const [pwd, setPwd] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState(true);
  const emailRegExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

  useEffect(() =>{
    const flag = emailRegExp.test(email);
    setError(!flag);
  },[email]);

  const handleChangeId = (e) =>{
    setId(e.target.value);
  };

  const handleChangePwd = (e) =>{
    setPwd(e.target.value);
  };

  const handleChangeEmail = (e) =>{
    setEmail(e.target.value);
  };

  const handleOnClickSubmit = (e) => {
    e.preventDefault();
    // axios 아이디 비교로 해당 아이디가 있는지 확인, 있으면 저장x 없으면 저장
  };

  return(
    <div id={'signup-field'}>
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
      <TextFieldBase
        id={'email-field'}
        error={error}
        label={'EMAIL'}
        type={'text'}
        onChange={handleChangeEmail}
        value={email}
      />
      <br/>
      <br/>
      <Button
        onClick={handleOnClickSubmit}
        color={'primary'}
      >
        submit
      </Button>
    </div>
  );
}

export default SignUpPage;