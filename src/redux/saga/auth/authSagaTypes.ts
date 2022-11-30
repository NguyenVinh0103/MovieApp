import { Action } from "redux";
import { LoginInterface, RegisterInterface } from "../../type";

export interface LoginSagaTypes extends Action {
    params: LoginInterface,
    type: string,
    resolve: (respone: any) => {}, /// define respone
    reject: (respone: any) => {}
}

export interface RegisterSagaTypes extends Action {
    params: RegisterInterface,
    type: string,
    resolve: (respone: any) => {}, /// define respone
    reject: (respone: any) => {}
}
