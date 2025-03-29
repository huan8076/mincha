import { isAxiosError } from 'axios'

// eslint-disable-next-line
export const handleHttpStatus = (err: any) => {
  if (isAxiosError(err)) {
    switch (err.status) {
      case 401:
        console.log('user unauthorized')
        break
      case 403:
        console.log('沒有啟用此服務')
        break
    }
  }
}