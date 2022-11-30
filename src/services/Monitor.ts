interface ResponseType {
    config: {
        url: string
    },
    status?: number,
    data?: object
}

interface ErrorType {
    response: {
        status: number,
        data: object
    },
    config?: {
        url: string
    },

}

export const ApiMonitorSuccess = (response: ResponseType) => {
    console.log(
        '%c API_RESPONSE_SUCCESS LINK: %c' + response.config.url,
        'background: #222; color: #bada55; font-size:16px',
        'background:red;color:white; font-size: 16px',
    )
    console.log(
        `%c API RESPONE FAIL STATUS:  %c` + response.status,
        'background: #222; color: #bada55; font-size:16px',
        'background:red;color:white; font-size: 16px',

    ),
        console.log(
            '%c API RESPONE VALUE: %c',
            'background: #222; color: #bada55; font-size:16px',
            'background:red;color:white; font-size: 16px',
            response?.data
        )
};

export const ApiMonitorFail = (error: ErrorType) => {
    const { status, data } = error?.response
    console.log(
        '%c API_RESPONSE_FAIL LINK: %c' + error?.config?.url,
        'background: #222; color: #ff7788; font-size:16px',
        'background:red;color:white;',
    );
    console.log(
        `%c API RESPONE FAIL STATUS:  %c` + status,
        'background: #222; color: #ff7788; font-size:16px',
        'background:red;color:white; font-size: 16px',

    ),
        console.log(
            '%c API RESPONE FAIL MESSAGE: %c',
            'background: #222; color: #ff7788; font-size:16px',
            'background:red;color:white; font-size: 16px',
            data
        )
}
