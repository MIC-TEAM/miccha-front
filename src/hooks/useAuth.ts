import { apiClient } from '../lib/apiClient'

const JWT_EXPIRY_TIME = 24 * 3600 * 1000 // 만료 시간 (24시간 밀리 초로 표현)

export const onLogin = async (email: string, password: string) => {
  const data = {
    email,
    password,
  }
  try {
    const res = await apiClient.post('/login', data)
    const accessToken = res.data.accessToken
    setAccessToken(accessToken)
  } catch (error) {
    console.error(error)
  }
}

const onSilentRefresh = async () => {
  try {
    const res = await apiClient.post('/silent-refresh')
    const accessToken = res.data.accessToken
    setAccessToken(accessToken)
  } catch (error) {
    console.log(error)
  }
}

const setAccessToken = (accessToken: string): void => {
  apiClient.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`
  setTimeout(onSilentRefresh, JWT_EXPIRY_TIME - 60 * 1000)
}
