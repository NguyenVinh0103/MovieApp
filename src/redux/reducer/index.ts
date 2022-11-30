import {combineReducers} from 'redux';
import authReducer, { AuthReducerTypes } from './authReducer';
export interface DefaultStore {
    auth: AuthReducerTypes,
}
const reducer = combineReducers<DefaultStore>({
    auth: authReducer,
});
export default reducer;