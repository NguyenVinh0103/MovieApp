import { API_END_POINT } from './../../services/api';
import { RegisterSagaTypes, LoginSagaTypes } from './auSagaTypes';
import { delay, put, takeLatest } from 'redux-saga/effects';
import { authTypes } from './../../type/authTypes';
import { api } from '../../../redux/services/api';
import { applyMiddleware } from 'redux';
import { API_CODE } from '../../../enum';

export function* doRegister(action: RegisterSagaTypes): any {
    try {
        
    } catch (error) {
        console.log(error);
        action?.resolve(false);
    }
}

export function* doLogin(action: LoginSagaTypes): any {
    const {params , resolve, reject} = action;
    try {
        yield delay(1000)
        const response = yield api.post('https://reqres.in/api/login', params)
        const code = response?.status;
        let token = ''
        if (code == API_CODE.OK) {
            token = response?.data?.token
            yield put({ type: authTypes.LOGIN_SUCCESS, payload: token })
            // eve.holt@reqres.in
            // cityslicka
        }
        yield delay(300)
        resolve({ statusCode: code, data: token });
    } catch (error) {
        resolve(false);
    }
}


export default function* watchAuthSagas(){
    yield takeLatest(authTypes.REGISTER, doRegister);
    yield takeLatest(authTypes.LOGIN, doLogin)
}