import { API_CODE } from '../../enum';
import { api } from '../../services';
import { cancel, delay, put, take, takeLatest } from 'redux-saga/effects';
import { LoginSagaTypes, RegisterSagaTypes } from '../auth/authSagaType'
import { authType } from './authType';

function* doRegister(action: RegisterSagaTypes): any {
    try {

        ////// your logic



        ///// do register
    } catch (e) {
        console.log(e);
        action?.resolve(false);
    }
}

function* doLogin(action: LoginSagaTypes): any {
    const { params, resolve } = action; //// Mỗi hàm đều có 4 giá trị cố định này .
    try {
        yield delay(300)
        const response = yield api.post('/ss/auth/login', params); /// gọi api và truyền body data
        console.log(response)
        if (response.status == 200) {
            const data = response.data;
            const { accessToken, userInfo } = data
            yield put({ type: authType.LOGIN_SUCCESS, payload: { accessToken, userInfo } })
        }
        resolve()
    } catch (e) {
        console.log(e);
        resolve({ statusCode: API_CODE.SERVER_ERROR, data: "" });
    }
}

export default function* watchAuthSagas() {
    yield takeLatest(authType.REGISTER, doRegister);
    yield takeLatest(authType.LOGIN, doLogin);
}
