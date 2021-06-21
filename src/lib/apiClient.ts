import axios, { AxiosInstance, AxiosResponse } from 'axios'

// TODO: 로그인 기능 구현시 제거
const tempToken =
  'eyJhbGciOiJIUzUxMiJ9.eyJyb2xlIjpbIlJPTEVfVVNFUiJdLCJzdWIiOiJhc2RmQGV4YW1wbGUuY29tIiwiaWF0IjoxNjI0MTk1MTUxLCJleHAiOjE2MjY3ODcxNTF9.8i_6mfF_daxL1zQNoPmnhzCKw5-JFZ61RojhzzscoB_1JL3VBlvxLigMrI2aN_blNKmlJyllBTNy1H9t9hhg0w'

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
