import { useCallback, useState } from 'react'
import { apiClient } from '../lib/apiClient'

interface User {
  email: string
  name: string
  password: string
}

const signUpPost = async (user: User) => {
  const res = await apiClient.post('/users', user)
  return res.data
}

const useSignUp = () => {
  const [emailError, setEmailError] = useState(false)

  const onSubmit = useCallback(async (values: User, { setSubmitting }) => {
    try {
      const errCode = await signUpPost(values)
      if (errCode === 0) {
        alert('회원가입 완료되었습니다.')
      } else {
        setEmailError(true)
      }
    } catch (error) {
      console.error(error)
    } finally {
      setSubmitting(false)
    }
  }, [])

  return {
    emailError,
    onSubmit,
  }
}

export default useSignUp
