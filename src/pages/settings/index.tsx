import React from 'react'
import HomeHeader from '../../components/common/HomeHeader'
import Footer from '../../components/common/Footer'
import Link from 'next/link'
import styled from '@emotion/styled'
import { useRecoilValue } from 'recoil'
import { userAtom } from '../../recoil/user/atom'
import ProtectedRoute from '../../hoc/ProtectedRoute'

const Settings = () => {
  const { email } = useRecoilValue(userAtom)

  return (
    <>
      <HomeHeader className="wishes" />

      <Setting>
        <SettingsWrap>
          <ContentTitle>설정</ContentTitle>

          <Change>
            <h3>계정</h3>
            <ul>
              <li>
                <div>이메일</div>
                <div>{email}</div>
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

export default ProtectedRoute(Settings)

const Setting = styled.main`
  background: rgb(20, 21, 23);
  color: #fff;
  width: 100%;
  height: 100%;
  padding: 3.35938vw 50px;
`

const SettingsWrap = styled.div`
  max-width: 780px;
  margin: 0px auto;
`

const ContentTitle = styled.h3`
  font-size: 1.8em;
  font-weight: 500;
  letter-spacing: -0.6px;
  margin-bottom: 1.01562vw;
`

const Change = styled.section`
  background: rgb(18, 19, 20);
  border: 1px solid rgb(32, 33, 33);
  border-radius: 4px;
  h3 {
    background: rgb(27, 27, 28);
    color: rgba(255, 255, 255, 0.6);
    font-size: 14px;
    letter-spacing: -0.28px;
    line-height: 16px;
    padding: 12px 20px;
  }
  a {
    color: rgb(248, 47, 98);
    font-size: 15px;
    font-weight: 500;
    letter-spacing: -0.3px;
    line-height: 18px;
    text-align: right;
    padding: 2px 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      margin-left: 5px;
    }
  }
  a + a {
    margin-top: 24px;
  }
  ul {
    li {
      display: flex;
      align-items: flex-start;
      padding: 22px 12px 24px 20px;
      div:nth-of-type(1) {
        color: rgb(255, 255, 255);
        font-size: 15px;
        font-weight: 500;
        letter-spacing: -0.3px;
        line-height: 18px;
        width: 220px;
      }
      div:nth-of-type(2) {
        flex: 1 0 auto;
        max-width: 320px;
        margin-right: auto;
        color: rgba(255, 255, 255, 0.54);
        font-size: 15px;
        font-weight: 500;
        letter-spacing: -0.3px;
        line-height: 18px;
      }
      div:nth-of-type(3) {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
      }
    }
  }
`
