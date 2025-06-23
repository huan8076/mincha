import { AxiosRequestConfig, AxiosError, Method } from 'axios'

export interface CustomRequestConfig {
  handleMs?: number
}

export interface ApiRequest extends AxiosRequestConfig, CustomRequestConfig {
  url: string
  method: Method
}

export interface ApiSuccessResponse<T> {
  data: T
  error: null
  status: number
}

export interface ApiFailResponse {
  data: null
  error: AxiosError | Error | string
  status: number
}

export type ApiResponse<T> = ApiSuccessResponse<T> | ApiFailResponse