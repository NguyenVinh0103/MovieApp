import {all, fork} from 'redux-saga/effects';
import authSagas from './auth/authSagas';
import watchGetUser from './auth/getUserSagas';
export default function* rootSaga() {
    yield all([
        fork(authSagas),
        fork(watchGetUser)

    ]);
}
