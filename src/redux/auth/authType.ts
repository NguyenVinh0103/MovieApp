export const authType = {
  LOGIN: 'LOGIN',
  LOGIN_SUCCESS: 'LOGIN SUCCESS',
  REGISTER: 'REGISTER',
  REGISTER_SUCCESS: 'REGISTER_SUCCESS',
};

export interface RegisterInterface {
  username: string,
  password: string,
  email: string,
}

export interface LoginInterface {
  username: string,
  password: string,
}