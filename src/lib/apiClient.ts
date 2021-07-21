import axios, { AxiosInstance, AxiosResponse } from 'axios'

// TODO: 로그인 기능 구현시 제거
const tempToken =
  'eyJhbGciOiJIUzUxMiJ9.eyJyb2xlIjpbIlJPTEVfVVNFUiJdLCJzdWIiOiJpbHV2dHJvbGxoZEBnbWFpbC5jb20iLCJpYXQiOjE2MjY4NDIwOTMsImV4cCI6MTYyOTQzNDA5M30.0EYfJvT7r3NAlrHfVTjk0HJcjNfnJAvhQUp5Brn9Xz0uEDez0kKyfbD4ugfdQ_PhzTBpZYqu_HUQjSqSt-jb_Q'

export const apiClient: AxiosInstance = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_URL}`,
  timeout: 1000,
  headers: {
    Authorization: `Bearer ${tempToken}`,
  },
})

apiClient.defaults.headers.post['Content-Type'] = 'application/json'
// apiClient.defaults.withCredentials = true

const responseFulfilled = (response: AxiosResponse<any>) => {
  // 응답 데이터 가공
  return response
}

const responseRejected = (error: any) => {
  // 오류 응답 처리
  // 토큰 오류 발생시 로그아웃 처리
  return Promise.reject(error)
}

apiClient.interceptors.response.use(responseFulfilled, responseRejected)
