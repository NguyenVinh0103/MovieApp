import authReducer from '@/redux/auth/authReducer';
import catReducers from '@/redux/cat/catReducers';
import dogReducers from '@/redux/dog/dogReducers';
import helloReducers from '@/redux/hello/helloReducers';
import mangaReducer from '@/redux/manga/mangaReducer';
import { UtilReducerTypes } from '@/redux/utils';
import utilReducers from '@/redux/utils/utilReducers';
import {combineReducers} from 'redux';
import { AuthReducerTypes } from '../redux/auth';
export interface DefaultStore {
    auth: AuthReducerTypes,
    util: UtilReducerTypes,
    cat: any,
    dog:any,
    hello: any,
    manga: any,
}
const combinedReducer = combineReducers<DefaultStore>({
    auth: authReducer,
    util: utilReducers,
    cat: catReducers,
    dog: dogReducers,
    hello: helloReducers,
    manga: mangaReducer,
});
export default combinedReducer;