import axios, { AxiosInstance } from 'axios'
import qs from 'qs'
import { requestApi } from '../index'
import { CustomRequestConfig, ApiRequest, ApiResponse, kingnetAuth } from '../Model'
import { handleHttpStatus } from '../interceptors'
import { CamelCase } from '@/utils/bff'
import { GetPostalDataParams, BEPostalData } from './model/PostalModel'

const baseURL = import.meta.env.VITE_APP_SMARTLIFECORE_API ?? ''

const instance: AxiosInstance = axios.create({ baseURL })

instance.defaults.paramsSerializer = params => {
  return qs.stringify(params, { arrayFormat: 'repeat' })
}

instance.defaults.timeout = 1000 * 20

instance.interceptors.request.use(
  reqConfig => {
    console.log(reqConfig)
    return reqConfig
  },
  async err => {
    console.log(err)
    return await Promise.reject(err)
  }
)

instance.interceptors.response.use(
  response => {
    return response
  },
  async err => {
    handleHttpStatus(err)
    return await Promise.reject(err)
  }
)

const createApi = async <T>(config: ApiRequest, kingnetAuth: kingnetAuth = null): Promise<ApiResponse<CamelCase<T>>> => {
  if (kingnetAuth) {
    if (!config.headers) config.headers = {}
    switch (kingnetAuth) {
      case 'CommunityUser':
        console.log('checkCommunityUserTokenIsExpired')
        config.headers.KingnetAuth = 'CommunityUser AuthorizationToken'
        break
      case 'CommunityUserToken':
        console.log('checkCommunityUserTokenIsExpired')
        config.headers.KingnetAuth = 'CommunityUserToken AccessToken'
        break
      case 'CommunityUserTokenOrAnonymous':
        console.log('checkCommunityUserIsExpired')
        config.headers.KingnetAuth = 'CommunityUserTokenOrAnonymous AccessToken'
        break
    }
  }
  return await requestApi<T>(instance, config)
}

/**
 * 取得包裹資訊
 * Swagger {@link https://api-dev.smartdaily.com.tw/index.html#/Postal/get_api_v3_Postal_getUserPostalList}
 */
export const GetPostalData = async (params: GetPostalDataParams, config: CustomRequestConfig = {}) =>
  await createApi<BEPostalData>({
    url: '/Postal/getUserPostalList',
    method: 'GET',
    params,
    ...config
  }, 'CommunityUser')