import axios, { AxiosInstance } from 'axios'

export const apiClient: AxiosInstance = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_URL}`,
  // headers: { Authorization: `${TOKEN}` },
  timeout: 1000,
})
