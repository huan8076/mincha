/**
 * 登入 API 參數
 */
export interface LoginParams {
  username: string // 電話號碼
  password: string // 密碼
}

/**
 * 登入 API 回應
 */
export interface LoginResponse {
  message: string
  username: string
  token: string
}