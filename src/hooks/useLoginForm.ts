import { ChangeEvent, useCallback, useState } from 'react'

function useLoginForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onChangeEmail = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }, [])

  const onChangePassword = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }, [])

  return {
    email,
    password,
    onChangeEmail,
    onChangePassword,
  }
}

export default useLoginForm
