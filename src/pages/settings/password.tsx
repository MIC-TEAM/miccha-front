import React from 'react'
import HomeHeader from '../../components/common/HomeHeader'
import Footer from '../../components/common/Footer'
import SettingTitle from '../../components/settings/Title'
import SettingButton from '../../components/settings/Button'
import { PasswordWrap, SettingInput, PwForget } from './styles'
import Link from 'next/link'

const Password = () => {
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

export default Password
