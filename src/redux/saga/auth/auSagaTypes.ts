import { type } from 'os';
import { Action } from 'redux';
import { LoginInterface, RegisterInterface } from './../../type/authTypes';


export interface LoginSagaTypes extends Action {
    params: LoginInterface,
    type: string,
    resolve: (response: any) => {}
    reject:  (response: any) => {}
}

export interface RegisterSagaTypes extends Action {
    params: RegisterInterface,
    type: string,
    resolve: (response: any) => {}
    reject: (response: any) => {}
}