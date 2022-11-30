export const authTypes = {
    REGISTER: 'REGISTER',
    REGISTER_SUCCESS: 'REGISTER_SUCCESS',
    LOGIN: 'LOGIN',
    LOGIN_SUCCESS: 'LOGIN_SUCCESS',
}
export interface RegisterInterface {
    username: string,
    password: string,
    email: string,
}

export interface LoginInterface {
    username: string,
    password: string,
}