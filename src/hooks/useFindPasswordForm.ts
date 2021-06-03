import { FormEvent, useCallback, useState } from 'react'
import { apiClient } from '../lib/apiClient'
import ErrorCode from '../utils/error-code'
import useInput, { InputType } from './useInput'

const retrievePasswordPost = async (email: string) => {
  const res = await apiClient.post('/password/retrieve', { email })
  return res.data
}

const useFindPasswordForm = () => {
  const email = useInput(InputType.EMAIL)
  const [emaillMissingError, setEmaillMissingError] = useState(false)

  const onSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()

      try {
        const { errorCode } = await retrievePasswordPost(email.value)

        if (errorCode === ErrorCode.SUCCESS) {
          alert(`비밀번호를 재설정할 수 있는 웹페이지 링크를 \n 이메일(${email.value})로 보내드렸습니다.`)
        }
      } catch (error) {
        const { errorCode, errorMessage } = error.response.data

        if (errorCode === ErrorCode.REQUEST_MISSING_EMAIL) {
          setEmaillMissingError(true)
          console.error(errorMessage)
        }
      }
    },
    [email.value]
  )

  return { email, emaillMissingError, onSubmit }
}

export default useFindPasswordForm
