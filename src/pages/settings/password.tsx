import React, { ChangeEvent, useEffect } from 'react'
import HomeHeader from '../../components/common/HomeHeader'
import Footer from '../../components/common/Footer'
import SettingTitle from '../../components/settings/SettingTitle'
import SettingButton from '../../components/settings/SettingButton'
import Link from 'next/link'
import styled from '@emotion/styled'
import { SettingInput } from './email'
import useInput, { InputType, ValidationType } from '../../hooks/useInput'
import { useState } from 'react'

const Password = () => {
  const prevPassword = useInput(InputType.PASSWORD)
  const nextPassword = useInput(InputType.PASSWORD)
  const [passwordConfirm, setPasswordConfirm] = useState('')
  const [passwordConfirmError, setPasswordConfirmError] = useState<null | boolean>(null)

  useEffect(() => {
    if (!passwordConfirm) {
      setPasswordConfirmError(null)
      return
    }

    if (nextPassword.value !== passwordConfirm) {
      setPasswordConfirmError(true)
    } else {
      setPasswordConfirmError(false)
    }
  }, [nextPassword, passwordConfirm])

  const onChangePasswordConfirm = (e: ChangeEvent<HTMLInputElement>) => {
    setPasswordConfirm(e.target.value)
  }

  return (
    <>
      <HomeHeader username="현주" className="wishes" />

      <PasswordWrap>
        <div>
          <SettingTitle
            title="비밀번호 변경"
            desc="비밀번호가 변경되면 로그인된 모든 디바이스에서 다시 로그인해야 합니다."
          />

          <SettingInput>
            <div>
              <input
                className={prevPassword.validation}
                type="password"
                placeholder="기존 비밀번호"
                {...prevPassword}
              />
            </div>
            {prevPassword.validation === ValidationType.ERROR && (
              <ValidationError>비밀번호를 정확히 입력해주세요.</ValidationError>
            )}

            <div>
              <input className={nextPassword.validation} type="password" placeholder="새 비밀번호" {...nextPassword} />
            </div>
            {nextPassword.validation === ValidationType.ERROR && (
              <ValidationError>
                비밀번호는 영문, 숫자, 특수문자 중 2종류 이상을 조합하여 최소 10자리 이상이여야 합니다.
              </ValidationError>
            )}

            <div>
              <input
                className={passwordConfirmError ? 'error' : ''}
                type="password"
                placeholder="새 비밀번호 확인"
                value={passwordConfirm}
                onChange={onChangePasswordConfirm}
              />
            </div>
            {passwordConfirmError && <ValidationError>비밀번호가 상이합니다.</ValidationError>}
          </SettingInput>

          <SettingButton
            active={
              prevPassword.validation === ValidationType.SUCCESS &&
              nextPassword.validation === ValidationType.SUCCESS &&
              passwordConfirmError === false
            }
          />

          <PwForget>
            <Link href="/find_password">
              <a>비밀번호를 잊으셨나요?</a>
            </Link>
          </PwForget>
        </div>
      </PasswordWrap>

      <Footer />
    </>
  )
}

export default Password

const PwForget = styled.div`
  color: rgba(255, 255, 255, 0.4);
  font-size: 14px;
  font-weight: 400;
  letter-spacing: -0.3px;
  text-decoration: underline;
  line-height: 18px;
  padding: 34px 0;
`
const PasswordWrap = styled.div`
  background: rgb(20, 21, 23);
  color: #fff;
  width: 100%;
  height: 64vh;
  padding: 3.35938vw 50px;
  div {
    max-width: 480px;
    margin: 0px auto;
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
