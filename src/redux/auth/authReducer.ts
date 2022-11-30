import { authType } from "./authType";

const initialState = {
    profile: {},
    accessToken: '',
    listUser: [],
    dailyList: [],
    detailUser: null,
    userInfo: {}
};
const defaultAction = {
    type: "",
    payload: undefined
}
interface IUser {
    id: number
    email: string
    first_name: string,
    last_name: string
    avatar: string
}
export interface AuthReducerType {
    profile: any,
    accessToken: string,
    listUser: IUser[]
}
interface actionType {
    type: string,
    payload: any
}

export default function (
  state: AuthReducerType = initialState,
  action: actionType = defaultAction
) {
  switch (action.type) {
      case authType.REGISTER_SUCCESS:
          return {
              ...state,
              profile: action.payload,
          };
      case authType.LOGIN_SUCCESS:
          const {accessToken, userInfo} = action.payload
          return {
              ...state,
              accessToken: accessToken,
              userInfo: userInfo
          };
      default:
          return state;
  }
}
