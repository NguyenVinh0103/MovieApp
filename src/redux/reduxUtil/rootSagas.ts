import watchAuthSaga from '../auth/authSaga';
import {all, fork} from 'redux-saga/effects';
export default function* rootSaga() {
    yield all([
        fork(watchAuthSaga),
    ]);
}
