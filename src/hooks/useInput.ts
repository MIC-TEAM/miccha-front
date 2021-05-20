import { ChangeEvent, useCallback, useState } from 'react'

export enum InputType {
  EMAIL,
  PASSWORD,
  NAME,
}

export enum ValidationType {
  SUCCESS = 'success',
  ERROR = 'error',
  NULL = 'null',
}

function validationCheck(type: InputType, value: string): ValidationType {
  if (value.length === 0) {
    return ValidationType.NULL
  }

  switch (type) {
    case InputType.EMAIL: {
      const regExp = /^[0-9a-zA-Z]([-_\\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i
      return value.match(regExp) ? ValidationType.SUCCESS : ValidationType.ERROR
    }
    case InputType.NAME: {
      return value.length >= 0 ? ValidationType.SUCCESS : ValidationType.ERROR
    }
    case InputType.PASSWORD: {
      const regExp = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{10,}$/
      return value.match(regExp) ? ValidationType.SUCCESS : ValidationType.ERROR
    }
  }
}

const useInput = (type: InputType, initialValue = '') => {
  const [value, setValue] = useState(initialValue)
  const [validation, setValidation] = useState<ValidationType>(ValidationType.NULL)

  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
    setValidation(validationCheck(type, e.target.value))
  }, [])

  return { value, onChange, validation }
}

export default useInput
