import { apiClient } from '../lib/apiClient'

interface LoginResponse {
  name: string
  email: string
  accessToken: string
  expiration: number
}

const JWT_EXPIRY_TIME = 5000

export const onLogin = async (email: string, password: string) => {
  try {
    const res = await apiClient.post<LoginResponse>('/session', {
      email,
      password,
    })

    setAccessToken(res.data.accessToken)
    return {
      email: res.data.email,
      name: res.data.name,
    }
  } catch (error) {
    throw new Error(error)
  }
}

export const onSilentRefresh = async () => {
  try {
    const {
      data: { accessToken },
    } = await apiClient.post('/renew')
    setAccessToken(accessToken)
  } catch (error) {
    console.log(error)
  }
}

const setAccessToken = (accessToken: string): void => {
  apiClient.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`
  setTimeout(onSilentRefresh, JWT_EXPIRY_TIME)
}
