import { useRouter } from 'next/dist/client/router'
import { FormEvent, useCallback } from 'react'
import { apiClient } from '../lib/apiClient'
import useInput, { InputType } from './useInput'

const resetPasswordPost = async (token: string, password: string) => {
  const res = await apiClient.post('/password', {
    token,
    password,
  })
  return res.data
}

const useResetPassword = () => {
  const password = useInput(InputType.PASSWORD)
  const router = useRouter()
  const {
    query: { token },
  } = router

  const onSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()

      try {
        const { errorCode } = await resetPasswordPost(token as string, password.value)

        if (errorCode === 0) {
          alert('비밀번호 변경을 완료했어요. 새로운 비밀번호로 로그인하세요!')
          router.push('/sign_in')
        }
      } catch (error) {
        alert('사용자 정보가 올바르지 않습니다.')
        console.error(error)
      }
    },
    [password.value, token]
  )

  return { password, onSubmit }
}

export default useResetPassword
