import {authType} from './authType';

const initialState = {
  accessToken: '',
  profile: {},
};

const defaultAction = {
  type: '',
  payload: undefined,
};

export default function (state = initialState, action = defaultAction) {
  switch (action.type) {
    case authType.LOGIN_SUCCESS:
      return {
        ...state,
        accessToken: action.payload,
      };
    case authType.REGISTER_SUCCESS:
      return {
        ...state,
        profile: action.payload,
      };
    default:
      return state;
  }
}
