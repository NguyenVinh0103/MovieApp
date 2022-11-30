import {API_CODE} from '../../enum';
import {api} from '../../services';
import {cancel, delay, put, take, takeLatest} from 'redux-saga/effects';
import {authType} from './authType';

function* doLogin(action) {
  console.log(action);
  console.log('hello, toi da vao dc saga');
  const {type, params, resolve, reject} = action;
  try {
    const getApi = yield api.get(`https://jsonplaceholder.typicode.com/todos/`);
    const {data} = getApi.data;
    if (data.status == 200) {
        const data = data.data;
        const { accessToken, userInfo } = data
        yield put({ type: authTypes.LOGIN_SUCCESS, payload: { accessToken, userInfo } })
    }
  } catch (error) {
    console.log(error);
  }
}

function* doRegister(action) {
    console.log(action);
    console.log('hello, toi da vao dc saga');
    const {type, params, resolve, reject} = action;
    try {
        const getApi = yield api.post(`https://jsonplaceholder.typicode.com/todos`)
    } catch (error) {
        
    }
}


export default function* watchAuthSagas() {
  yield takeLatest(authType.LOGIN, doLogin);
  yield takeLatest(authType.REGISTER, doRegister)
}
