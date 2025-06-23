import axios, { AxiosInstance } from 'axios'
import { requestApi } from '../index'
import { ApiRequest, ApiResponse } from '../Model'
import { handleHttpStatus } from '../interceptors'
import type { LoginParams } from './model/Auth'

const baseURL = import.meta.env.VITE_APP_MINCHA_API ?? ''

const instance: AxiosInstance = axios.create({ baseURL })

// 配置 timeout
instance.defaults.timeout = 1000 * 20

// Request 攔截器
instance.interceptors.request.use(
  reqConfig => {
    return reqConfig
  },
  async (err: Error) => {
    console.log(err)
    return await Promise.reject(err)
  }
)

// Response 攔截器
instance.interceptors.response.use(
  response => {
    return response
  },
  async (err: Error) => {
    handleHttpStatus(err)
    return await Promise.reject(err)
  }
)

// 建立 API 的共用函示 (登入取得AuthToken後使用)
// const createApi = async <T>(config: ApiRequest): Promise<ApiResponse<T>> => {
//   if (!config.headers) config.headers = {}
//   const token = '123'
//   config.headers.Authorization = `Bearer ${token}`

//   return await requestApi<T>(instance, config)
// }

/**
 * 登入
 * Swagger: https://auth-api-654531358458.asia-east1.run.app/api-docs/#/Auth/post_api_auth_login
 * @param {LoginParams} params
 * @returns {Promise<ApiResponse<T>>} - 回傳 API 回應
 */
export const Login = async <T>(params: LoginParams): Promise<ApiResponse<T>> => {
  const config: ApiRequest = {
    url: 'auth/login',
    method: 'POST',
    data: params
  }
  return await requestApi<T>(instance, config)
}
