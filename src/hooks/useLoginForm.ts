import { useRouter } from 'next/dist/client/router'
import { FormEvent, useCallback, useState } from 'react'
import { useSetRecoilState } from 'recoil'
import { apiClient } from '../lib/apiClient'
import { User, userAtom } from '../recoil/user/atom'
import useInput, { InputType } from './useInput'

const loginPost = async (email: string, password: string): Promise<User> => {
  const res = await apiClient.post('/session', {
    email,
    password,
  })

  return res.data
}

const useLoginForm = () => {
  const email = useInput(InputType.EMAIL)
  const password = useInput(InputType.PASSWORD)
  const [loginError, setLoginError] = useState(false)
  const setUserAtom = useSetRecoilState(userAtom)
  const router = useRouter()

  const onSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()

      try {
        const { accessToken } = await loginPost(email.value, password.value)
        // TODO: 실제 이메일, 이름 저장하기
        // TODO: refreshToken 으로 accessToken 재발급 구현
        // TODO: 로그인 확인 커스텀 훅 만들기
        setUserAtom({
          accessToken,
          email: '테스트 이메일',
          name: '테스트 이름',
        })
        router.push('/home')
      } catch (error) {
        setLoginError(true)
      }
    },
    [email.value, password.value]
  )

  return {
    email,
    password,
    onSubmit,
    loginError,
  }
}

export default useLoginForm
