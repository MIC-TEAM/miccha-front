import { useRouter } from 'next/dist/client/router'
import { FormEvent, useCallback, useState } from 'react'
import { useSetRecoilState } from 'recoil'
import { userAtom } from '../recoil/user/atom'
import { onLogin } from '../utils/auth-config'
import useInput, { InputType } from './useInput'

const useLoginForm = () => {
  const email = useInput(InputType.EMAIL)
  const password = useInput(InputType.PASSWORD)
  const [loginError, setLoginError] = useState(false)
  const router = useRouter()
  const setUserAtom = useSetRecoilState(userAtom)

  const onSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()

      try {
        const user = await onLogin(email.value, password.value)
        setUserAtom(user)
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
