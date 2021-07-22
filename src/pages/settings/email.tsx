import React, { FormEvent } from 'react'
import HomeHeader from '../../components/common/HomeHeader'
import Footer from '../../components/common/Footer'
import SettingTitle from '../../components/settings/SettingTitle'
import SettingButton from '../../components/settings/SettingButton'
import styled from '@emotion/styled'
import useInput, { InputType, ValidationType } from '../../hooks/useInput'

const Email = () => {
  const email = useInput(InputType.EMAIL)
  const password = useInput(InputType.PASSWORD)

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('submit !')
  }

  return (
    <>
      <HomeHeader username="현주" className="wishes" />

      <EmailWrap>
        <div>
          <SettingTitle
            title="이메일 변경"
            desc="계정 이메일은 모든 프로필에 로그인하고 이메일을 발송하는데 사용됩니다."
          />

          <CurrentEmail>
            현재 이메일
            <strong>studymicteam@gmail.com</strong>
          </CurrentEmail>

          <form onSubmit={onSubmit}>
            <SettingInput>
              <div>
                <input className={email.validation} type="text" placeholder="새 이메일" {...email} required />
              </div>
              {email.validation === ValidationType.ERROR && (
                <ValidationError>이메일 주소가 올바르지 않습니다.</ValidationError>
              )}

              <div>
                <input className={password.validation} type="password" placeholder="비밀번호" {...password} required />
              </div>
              {password.validation === ValidationType.ERROR && (
                <ValidationError>비밀번호를 정확히 입력해주세요.</ValidationError>
              )}
            </SettingInput>

            <SettingButton
              active={email.validation === ValidationType.SUCCESS && password.validation === ValidationType.SUCCESS}
            />
          </form>
        </div>
      </EmailWrap>

      <Footer />
    </>
  )
}

export default Email

export const SettingInput = styled.div`
  div {
    background: rgb(29, 30, 31);
    border: 1px solid rgb(47, 49, 51);
    border-radius: 2px;
    margin-bottom: 6px;
  }

  input {
    background: transparent;
    color: rgb(255, 255, 255);
    font-size: 15px;
    font-weight: 400;
    letter-spacing: -0.3px;
    line-height: 20px;
    width: 100%;
    padding: 10px 14px;
    border: 0px;
    outline: none;

    &.error {
      outline: 1px solid rgb(219, 66, 65);
    }
  }
`

const EmailWrap = styled.div`
  background: rgb(20, 21, 23);
  color: #fff;
  width: 100%;
  height: 52vh;
  padding: 3.35938vw 50px;
  div {
    max-width: 480px;
    margin: 0px auto;
  }
`

const CurrentEmail = styled.p`
  color: rgba(255, 255, 255, 0.56);
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.4px;
  line-height: 21px;
  margin-bottom: 6px;
  strong {
    color: rgb(255, 255, 255);
    font-weight: 400;
    margin-left: 6px;
  }
`

const ValidationError = styled.p`
  color: rgb(219, 66, 65);
  font-size: 12px;
  font-weight: 400;
  letter-spacing: -0.3px;
  line-height: 18px;
  padding: 0px 14px 4px;
`
