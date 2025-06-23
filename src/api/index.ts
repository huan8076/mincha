import axios, { AxiosInstance } from 'axios'
import { ApiRequest, ApiResponse } from './Model'
// import { type CamelCase, toCamelCase } from '@/utils/bff'
import { sleep } from '@/utils/index'

export const requestApi = async<T>(
  axiosInstance: AxiosInstance,
  config: ApiRequest,
  isUseCommonInterceptors = true
): Promise<ApiResponse<T>> => {
  try {
    if (isUseCommonInterceptors) setCommonInterceptors(axiosInstance, config)
    const response = await axiosInstance.request<T>(config)
    return { data: response.data, error: null, status: response.status }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return { data: null, error, status: error.status ?? 500 }
    } else if (error instanceof Error) {
      return { data: null, error, status: 500 }
    } else {
      return { data: null, error: 'different error than axios', status: 500 }
    }
  }
}

const setCommonInterceptors = (axiosInstance: AxiosInstance, config: ApiRequest) => {
  axiosInstance.interceptors.request.use(
    reqConfig => {
      console.log('common request interceptors config')
      reqConfig.startTime = Date.now()
      return reqConfig
    },
    async err => {
      console.log('common request interceptors err')
      return await Promise.reject(err)
    }
  )

  axiosInstance.interceptors.response.use(
    async res => {
      if (config.handleMs) {
        const startTime = res.config.startTime
        const endTime = Date.now()
        const timeoutMs = config.handleMs - (endTime - startTime)
        if (timeoutMs > 0) await sleep(timeoutMs)
      }
      console.log('common response interceptors config')
      return res
    },
    async err => {
      console.log('common response interceptors err')
      return await Promise.reject(err)
    }
  )
}