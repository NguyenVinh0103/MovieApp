import { SetStateAction } from "react";
import { Action } from "redux";
import { LoginInterface, RegisterInterface } from "./authType";

/////////// LOGIN
export interface IResponeLogin {
    statusCode: number,
    data: string
}
export interface LoginSagaTypes extends Action {
    params: LoginInterface,
    type: string,
    resolve: (response: IResponeLogin) => {}, /// define respone
    reject: (response: any) => {}
}

////REGISTER

export interface IResponeRegister {
    statusCode: number,
    data: boolean,
} 
export interface RegisterSagaTypes extends Action {
    params: RegisterInterface,
    type: string,
    resolve: (response: IResponeRegister) => {}, /// define respone
    reject: (response: any) => {}
}
