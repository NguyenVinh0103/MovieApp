import authReducer from '../auth/authReducer';
import {combineReducers} from 'redux';
import { AuthReducerType } from '../../redux/auth';
export interface DefaultStore {
    auth: AuthReducerType,
}
const combinedReducer = combineReducers<DefaultStore>({
    auth: authReducer,
});
export default combinedReducer;