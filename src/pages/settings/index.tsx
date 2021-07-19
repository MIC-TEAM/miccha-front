import React from 'react'
import HomeHeader from '../../components/common/HomeHeader'
import Footer from '../../components/common/Footer'
import { Setting, SettingsWrap, ContentTitle, Change } from './styles'
import Link from 'next/link'

const Settings = () => {
  return (
    <>
      <HomeHeader username="현주" className="wishes" />

      <Setting>
        <SettingsWrap>
          <ContentTitle>설정</ContentTitle>

          <Change>
            <h3>계정</h3>
            <ul>
              <li>
                <div>이메일</div>
                <div>studymicteam@gmail.com</div>
                <div>
                  <Link href="/settings/email">
                    <a>
                      이메일 변경 <img src="/images/common/btn_setting_arr.svg" alt="이메일 변경" />
                    </a>
                  </Link>

                  <Link href="/settings/password">
                    <a>
                      비밀번호 변경
                      <img src="/images/common/btn_setting_arr.svg" alt="비밀번호 변경" />
                    </a>
                  </Link>
                </div>
              </li>
            </ul>
          </Change>
        </SettingsWrap>
      </Setting>
      <Footer />
    </>
  )
}

export default Settings
