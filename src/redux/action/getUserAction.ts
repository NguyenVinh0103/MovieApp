import { getUserTypes } from './../type/getUserTypes';
 
export function onGetUser(params:any , dispatch:any ) {
    return new Promise((resolve, reject) => {
        dispatch({
            type: getUserTypes.GET_USER,
            params,
            resolve,
            reject,
        });
    });
}



