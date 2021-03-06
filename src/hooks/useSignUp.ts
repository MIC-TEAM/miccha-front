import { useRouter } from 'next/dist/client/router'
import { useCallback, useState } from 'react'
import { apiClient } from '../lib/apiClient'
import ErrorCode from '../utils/error-code'

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
  const [emailInvalidError, setEmailInvalidError] = useState(false)
  const [emailDuplicateError, setEmailDuplicateError] = useState(false)
  const router = useRouter()

  const initEmailError = useCallback(() => {
    setEmailInvalidError(false)
    setEmailDuplicateError(false)
  }, [])

  const onSubmit = useCallback(async (values: User, { setSubmitting }) => {
    try {
      const { errorCode } = await signUpPost(values)
      if (errorCode === ErrorCode.SUCCESS) {
        alert('회원가입 완료되었습니다.')
        router.push('/sign_in')
      }
    } catch (error) {
      const { errorCode, errorMessage } = error.response.data
      initEmailError()

      if (errorCode === ErrorCode.DUPLICATE_EMAIL) {
        setEmailDuplicateError(true)
      } else if (errorCode === ErrorCode.INVALID_EMAIL) {
        setEmailInvalidError(true)
      }

      console.error(errorMessage)
    } finally {
      setSubmitting(false)
    }
  }, [])

  return {
    emailInvalidError,
    emailDuplicateError,
    onSubmit,
  }
}

export default useSignUp
