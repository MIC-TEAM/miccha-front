import styled from '@emotion/styled'
import Link from 'next/link'
import { ValidationType } from '../../hooks/useInput'
import useLoginForm from '../../hooks/useLoginForm'
import SubmitButton from '../common/SubmitButton'
import Validation from '../common/Validation'
import ValidationError from '../common/ValidationError'

const LoginForm: React.FC = () => {
  const { email, password, onSubmit, loginError } = useLoginForm()

  return (
    <form onSubmit={onSubmit}>
      <FormHeader>
        <h2>로그인</h2>
        <Link href="/find_password">
          <a>비밀번호를 잊어버리셨나요?</a>
        </Link>
      </FormHeader>
      <InputBox>
        <input type="email" placeholder="이메일 (example@gmail.com)" {...email} />
        <Validation state={email.validation} />
      </InputBox>
      <InputBox>
        <input type="password" placeholder="비밀번호" {...password} />
        <Validation state={password.validation} />
      </InputBox>
      {loginError && <ValidationError>입력하신 이메일 주소 혹은 비밀번호를 다시 확인해주세요</ValidationError>}
      <SubmitButton
        type="submit"
        active={email.validation === ValidationType.SUCCESS && password.validation === ValidationType.SUCCESS}
      >
        로그인
      </SubmitButton>
    </form>
  )
}

export default LoginForm

const FormHeader = styled.div`
  margin: 0px 0px 14px;

  & > h2 {
    font-size: 18px;
    font-weight: 700;
    letter-spacing: -1px;
  }

  & > a {
    position: absolute;
    right: 0;
    top: 0;
    font-size: 12px;
    font-weight: 400;
    letter-spacing: -0.4px;
    opacity: 0.5;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
`

const InputBox = styled.div`
  position: relative;
  width: 100%;

  & > input {
    width: 100%;
    padding: 12px 44px 12px 14px;
    font-size: 16px;
    font-weight: 400;
    letter-spacing: -0.5px;
    line-height: normal;
    border: 1px solid rgba(154, 151, 161, 0.2);
    border-bottom: none;
    border-radius: 4px 4px 0px 0px;
    line-height: 1;
  }

  & > input::placeholder {
    color: #a7a8af;
  }

  &:last-of-type {
    position: relative;
    top: -1px;
  }

  &:last-of-type > input {
    border-radius: 0px 0px 4px 4px;
    border-bottom: 1px solid rgba(154, 151, 161, 0.2);
  }
`
