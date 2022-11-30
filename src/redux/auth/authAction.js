import {authType} from './authType';

export const onLogin = (params, dispatch) => {
  return new Promise((resolve, reject) => {
    dispatch({
      type: authType.LOGIN,
      params,
      resolve,
      reject,
    });
  });
};

export const onRegister = (params, dispatch) => {
  return new Promise((resolve, reject) => {
    dispatch({
      type: authType.REGISTER,
      params,
      resolve,
      reject,
    });
  });
};
