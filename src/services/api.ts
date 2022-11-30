import rootStore from '../redux/reduxUtil/store';
import Axios from 'axios';
import { ApiMonitorFail, ApiMonitorSuccess } from './Monitor';

export const API_END_POINT = 'https://manga-reader-android.readingnovelfull.com';
export const api = Axios.create({
    baseURL: API_END_POINT,
    timeout: 100000,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'Application/json',
    },
});

api.interceptors.request.use(
    (config: any) => {
        // Do something before request is sent
        const token = rootStore.getState().auth?.accessToken || '';
        config.headers['Authorization'] = token ? `Bearer ${token}` : '';
        return config;
    },
    error => {
        console.log(error);
        return error;
    },
);
api.interceptors.response.use(
    function (response: any) {
        ApiMonitorSuccess(response)
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        return response;
    },
    function (error: any) {
        ApiMonitorFail(error)
        // console.log(error)
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        return error?.response
    },
);

