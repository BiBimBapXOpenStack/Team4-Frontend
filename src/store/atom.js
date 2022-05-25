import {atom} from 'recoil';

export const loginState = atom({
  key : 'checkLoginState',
  default : false
});

export const userIdState = atom({
  key : "checkUserIdState",
  default : ''
});