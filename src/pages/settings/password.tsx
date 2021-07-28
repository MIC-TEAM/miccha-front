import React from 'react'
import HomeHeader from '../../components/common/HomeHeader'
import Footer from '../../components/common/Footer'
import SettingTitle from '../../components/settings/SettingTitle'
import SettingButton from '../../components/settings/SettingButton'
import Link from 'next/link'
import styled from '@emotion/styled'
import { SettingInput } from './email'
import ProtectedRoute from '../../hoc/ProtectedRoute'

const Password = () => {
  return (
    <>
      <HomeHeader className="wishes" />

      <PasswordWrap>
        <div>
          <SettingTitle
            title="비밀번호 변경"
            desc="비밀번호가 변경되면 로그인된 모든 디바이스에서 다시 로그인해야 합니다."
          />

          <SettingInput>
            <div>
              <input type="password" placeholder="기존 비밀번호" />
            </div>

            <div>
              <input type="password" placeholder="새 비밀번호" />
            </div>

            <div>
              <input type="password" placeholder="새 비밀번호 확인" />
            </div>
          </SettingInput>

          <SettingButton />

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

export default ProtectedRoute(Password)

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
  height: 100%;
  padding: 3.35938vw 50px;
  div {
    max-width: 480px;
    margin: 0px auto;
  }
`
