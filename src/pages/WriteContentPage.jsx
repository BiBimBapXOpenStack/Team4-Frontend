import React, { useState } from 'react';
import { TextFieldBase } from '../components';
import { useRecoilValue } from 'recoil';
import { userIdState } from '../store/atom';
import Button from '@mui/material/Button';

const WriteContentPage = () =>{
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const userId = useRecoilValue(userIdState);

  const handleChangeTitle = (e) =>{
    setTitle(e.target.value);
  };

  const handleChangeContent = (e) =>{
    setContent(e.target.value);
  };

  const handleOnClickSubmit = () =>{

  };

  return(
    <>
      <TextFieldBase
        id={'title'}
        label={'TITLE'}
        value={title}
        onChange={handleChangeTitle}
      />
      <br/>
      <br/>
      {`Author : ${userId}`}
      <br/>
      <br/>
      <TextFieldBase
        id={'content-field'}
        label={'CONTENT'}
        value={content}
        onChange={handleChangeContent}
        multiline={true}
        rows={5}
      />
      <br/>
      <br/>
      <Button
        onClick={handleOnClickSubmit}
        color={'primary'}
      >
        submit
      </Button>
    </>

  );
};

export default WriteContentPage;