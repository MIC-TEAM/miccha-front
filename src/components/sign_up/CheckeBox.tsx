import React from 'react'
import { SignUpChecker, Checker } from '../../styles/sign_up'

const CheckeBox: React.FC = () => {
  return (
    <SignUpChecker>
      <Checker>
        <label htmlFor="check01">
          <span>
            <input type="checkbox" name="user-term" id="check01" />
          </span>
          전체 약관에 동의합니다.
        </label>
      </Checker>

      <Checker>
        <label htmlFor="check02">
          <span>
            <input type="checkbox" name="user-term" id="check02" />
          </span>
          만 14세 이상입니다.
        </label>
      </Checker>

      <Checker>
        <label htmlFor="check03">
          <span>
            <input type="checkbox" name="user-term" id="check03" />
          </span>
          <strong>믹챠 서비스 이용약관</strong>에 동의합니다 (필수)
        </label>
      </Checker>

      <Checker>
        <label htmlFor="check04">
          <span>
            <input type="checkbox" name="user-term" id="check04" />
          </span>
          <strong>개인정보 수집 및 이용에 대한 안내</strong>에 동의합니다 (필수)
        </label>
      </Checker>

      <Checker>
        <label htmlFor="check05">
          <span>
            <input type="checkbox" name="user-term" id="check05" />
          </span>
          <strong>신작 알림 이벤트 정보 수신</strong>에 동의합니다 (선택)
        </label>
      </Checker>
    </SignUpChecker>
  )
}

export default CheckeBox
