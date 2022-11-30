import { api } from './../../../services/api';
import { takeLatest, put } from 'redux-saga/effects';
import {getUserTypes} from './../../type/getUserTypes';

export function* doGetUser(action) {
  const {params, resolve} = action;

  console.log('hihihi');
  /// Mỗi hàm đều có 4 giá trị cố định này .
  try {
    // console.log(action);
    // resolve();
    const response = yield api.get('/api/users?page=2'); 
    yield put({type: getUserTypes.GET_USER_SUCCESS, payload: response.data.data});
    resolve();
  } catch (e) {
    console.log(e);
    resolve(false);
  }
}
export default function* watchGetUser() {
  yield takeLatest(getUserTypes.GET_USER, doGetUser);
}
