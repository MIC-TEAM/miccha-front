import styled from '@emotion/styled'
import { memo } from 'react'
import { ValidationType } from '../../hooks/useInput'
import useResetPassword from '../../hooks/useResetPasswordForm'
import Validation from '../common/Validation'

const ResetPasswordForm: React.FC = () => {
  const { password, onSubmit } = useResetPassword()

  return (
    <Form onSubmit={onSubmit}>
      <h1>새로운 비밀번호</h1>
      <h2>새로운 비밀번호를 입력해주세요.</h2>
      <InputBox>
        <Input type="password" placeholder="비밀번호" {...password} />
        <Validation state={password.validation} />
      </InputBox>
      <SubmitButton type="submit" disabled={!(password.validation === ValidationType.SUCCESS)}>
        확인
      </SubmitButton>
    </Form>
  )
}

export default memo(ResetPasswordForm)

const Form = styled.form`
  text-align: center;

  h1 {
    padding: 0 24px;
    margin: 32px auto 6px;
    max-width: 346px;
    color: #fff;
    font-size: 19px;
    font-weight: 700;
    letter-spacing: -0.37px;
    line-height: 25px;
    white-space: pre-wrap;
    word-break: break-all;
  }

  h2 {
    margin: 0 auto;
    padding: 0 24px;
    max-width: 346px;
    color: #d4d4d5;
    font-size: 14px;
    font-weight: 400;
    letter-spacing: -0.35px;
    line-height: 19px;
    white-space: pre-wrap;
    word-break: break-word;
  }
`

const InputBox = styled.div`
  position: relative;
  margin: 47px auto 0;
  width: 384px;
`

const Input = styled.input`
  width: 100%;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: -0.21px;
  line-height: 24px;
  background-color: -internal-light-dark(rgb(255, 255, 255), rgb(59, 59, 59));
  padding: 10px 44px 10px 12px;
`

const SubmitButton = styled.button`
  position: relative;
  display: block;
  margin: 8px auto;
  width: 384px;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: -0.4px;
  line-height: 24px;
  padding: 10px 16px;
  background-color: #f82f62;
  color: #fff;
  cursor: pointer;

  &:disabled {
    opacity: 0.3;
  }
`
