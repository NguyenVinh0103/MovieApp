
import {combineReducers} from 'redux';
import authReducer, { AuthReducerTypes } from './authReducer';
import getUserReducer from './getUserReducer';
export interface DefaultStore {
    auth: AuthReducerTypes,
}
const reducer = combineReducers({
    auth: authReducer,
    getUser: getUserReducer,
});
export default reducer;