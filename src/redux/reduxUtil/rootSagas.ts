import watchAuthSagas from '../auth/authSaga';

import {all, fork} from 'redux-saga/effects';
export default function* rootSaga() {
    yield all([
        fork(watchAuthSagas),
    ]);
}
