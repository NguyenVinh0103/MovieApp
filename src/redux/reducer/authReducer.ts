import { authTypes } from "../type/authTypes";

const initialState = {
    profile: {},
    accessToken: '',
    listUser: []
};
const defaultAction = {
    type: "",
    payload: undefined
}

export interface AuthReducerTypes {
    profile: any,
    accessToken: string,
    listUser: Array<object>
}
interface actionTypes {
    type: string,
    payload: any
}


export default function (
    state: AuthReducerTypes = initialState,
    action: actionTypes = defaultAction
) {
    switch (action.type) {
        case authTypes.REGISTER_SUCCESS:
            return {
                ...state,
                profile: action.payload,
            };
        case authTypes.LOGIN_SUCCESS:
            return {
                ...state,
                accessToken: action.payload,
            };
        default:
            return state;
    }
}
