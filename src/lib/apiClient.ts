import axios, { AxiosInstance } from 'axios'

export const apiClient: AxiosInstance = axios.create({
  baseURL: `${process.env.API_URL}`,
  // headers: { Authorization: `${TOKEN}` },
  timeout: 1000,
})
