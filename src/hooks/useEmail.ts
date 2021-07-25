import { FormEvent } from 'react'
import { useRecoilValue } from 'recoil'
import { apiClient } from '../lib/apiClient'
import { userAtom } from '../recoil/user/atom'
import useInput, { InputType } from './useInput'

const settingFetch = async (name: string, email: string, password: string) => {
  const res = await apiClient.post('/setting', {
    name,
    email,
    password,
  })

  return res.data
}

const useEmail = () => {
  const email = useInput(InputType.EMAIL)
  const password = useInput(InputType.PASSWORD)
  const { name } = useRecoilValue(userAtom)

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      const res = await settingFetch(name, email.value, password.value)
    } catch (error) {
      throw new Error(error)
    }
    console.log('submit !')
  }

  return {
    email,
    password,
    onSubmit,
  }
}

export default useEmail
