import React from 'react'
import HomeHeader from '../../components/common/HomeHeader'
import Footer from '../../components/common/Footer'
import SettingTitle from '../../components/settings/title'
import SettingButton from '../../components/settings/button'
import { EmailWrap, CurrentEmail, SettingInput } from './styles'

const Email = () => {
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

export default Email
