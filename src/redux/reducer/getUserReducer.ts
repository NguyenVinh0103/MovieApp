import { getUserTypes } from './../type/getUserTypes';
const initialState = {
    listUser: [], // 6
    a: '',
    b: 0
};

export default function (
    state: any = initialState,
    action: any
) {
    switch (action.type) {
        case getUserTypes.GET_USER_SUCCESS:
            return {
                ...state,
                listUser: action.payload,
            };
        default:
            return state;
    }
}