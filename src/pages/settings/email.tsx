import React from 'react'
import HomeHeader from '../../components/common/HomeHeader'
import Footer from '../../components/common/Footer'
import SettingTitle from '../../components/settings/SettingTitle'
import SettingButton from '../../components/settings/SettingButton'
import styled from '@emotion/styled'
import { useRecoilValue } from 'recoil'
import { userAtom } from '../../recoil/user/atom'
import ProtectedRoute from '../../hoc/ProtectedRoute'

const Email = () => {
  const { email } = useRecoilValue(userAtom)

  return (
    <>
      <HomeHeader className="wishes" />

      <EmailWrap>
        <div>
          <SettingTitle
            title="이메일 변경"
            desc="계정 이메일은 모든 프로필에 로그인하고 이메일을 발송하는데 사용됩니다."
          />

          <CurrentEmail>
            현재 이메일
            <strong>{email}</strong>
          </CurrentEmail>

          <SettingInput>
            <div>
              <input type="text" />
            </div>

            <div>
              <input type="password" />
            </div>
          </SettingInput>

          <SettingButton />
        </div>
      </EmailWrap>

      <Footer />
    </>
  )
}

export default ProtectedRoute(Email)

export const SettingInput = styled.form`
  div {
    background: rgb(29, 30, 31);
    border: 1px solid rgb(47, 49, 51);
    border-radius: 2px;
    margin-bottom: 10px !important;
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
  }
`

const EmailWrap = styled.div`
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
