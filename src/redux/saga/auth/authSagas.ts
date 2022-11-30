import { delay, put, takeLatest } from 'redux-saga/effects';
import { API_CODE } from '../../../enum';
import { api } from '../../../services/api';
import { authTypes } from '../../type';
import { LoginSagaTypes, RegisterSagaTypes } from './authSagaTypes';

export function* doRegister(action: RegisterSagaTypes): any {
    try {

        ////// your logic



        ///// do register
    } catch (e) {
        console.log(e);
        action?.resolve(false);
    }
}

export function* doLogin(action: LoginSagaTypes): any {
    const { params, resolve } = action; //// Mỗi hàm đều có 4 giá trị cố định này .
    try {
        yield delay(300)
        const response = yield api.post('/api/login', params); /// gọi api và truyền body data
        const code = response?.status;
        let token = ""
        if (code == API_CODE.OK) {
            token = response?.data?.token
            yield put({ type: authTypes.LOGIN_SUCCESS, payload: token })
            // eve.holt@reqres.in
            // cityslicka
        }
        yield delay(300)
        console.log('tui la vinh ne')
        resolve({ statusCode: code, data: token });
    } catch (e) {
        console.log(e);
        resolve(false);
    }
}



export default function* watchAuthSagas() {
    yield takeLatest(authTypes.REGISTER, doRegister);
    yield takeLatest(authTypes.LOGIN, doLogin);
}
