import {AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse} from 'axios'

import {ACCESS_TOKEN_KEY, REQUEST_HEADER_AUTH_KEY} from '../../constants/localStorage'

const onRequest = (config: AxiosRequestConfig): AxiosRequestConfig => {
    const accessToken = localStorage.getItem(ACCESS_TOKEN_KEY)

    if (accessToken) {
        config.headers[REQUEST_HEADER_AUTH_KEY] = `Bearer ${accessToken}`
    }

    return config
}

const onRequestError = (error: AxiosError): Promise<AxiosError> => {
    return Promise.reject(error)
}

const onResponse = (response: AxiosResponse): AxiosResponse => {
    return response
}

const onResponseError = (error: AxiosError): Promise<AxiosError> => {
    return Promise.reject(error)
}

export function setupInterceptorsTo(axiosInstance: AxiosInstance): AxiosInstance {
    axiosInstance.interceptors.request.use(onRequest, onRequestError)
    axiosInstance.interceptors.response.use(onResponse, onResponseError)
    return axiosInstance
}
