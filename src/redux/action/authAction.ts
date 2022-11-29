import {Dispatch} from 'redux';
import {authTypes, RegisterInterface, LoginInterface} from '../type/authTypes';

export function onRegister(params: RegisterInterface, dispatch: Dispatch) {
  return new Promise((resolve, reject) => {
    dispatch({
      type: authTypes.REGISTER,
      params,
      resolve,
      reject,
    });
  });
}

export function onLogin(params: LoginInterface, dispatch: Dispatch) {
  return new Promise((resolve, reject) => {
    dispatch({
      type: authTypes.LOGIN,
      params,
      resolve,
      reject,
    });
  });
}
