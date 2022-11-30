import { Dispatch } from "redux"
import { UtilTypes } from "../redux"
export const setGloBalLoading = (dispatch: Dispatch, value: boolean = false) => {
    dispatch({ type: UtilTypes.IS_LOADING, payload: value })
}
