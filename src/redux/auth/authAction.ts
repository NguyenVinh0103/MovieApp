import { Dispatch } from "redux"
import { authType, LoginInterface, RegisterInterface } from "./authType";

export function onRegister(params: RegisterInterface, dispatch: Dispatch) {
  return new Promise((resolve, reject) => {
      dispatch({
          type: authType.REGISTER,
          params,
          resolve,
          reject,
      });
  });
}
export function onLogin(params: LoginInterface, dispatch: Dispatch){
  return new Promise((resolve, reject) => {
      dispatch({
          type: authType.LOGIN,
          params,
          resolve,
          reject,
      });
  });
}
