import styled from '@emotion/styled'

//설정페이지 컴포넌트
export const SettingsWrap = styled.div`
  max-width: 780px;
  margin: 0px auto;
`

export const Change = styled.section`
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

export const Setting = styled.main`
  background: rgb(20, 21, 23);
  color: #fff;
  width: 100%;
  height: 53vh;
  padding: 3.35938vw 50px;
`

export const ContentTitle = styled.h3`
  font-size: 22px;
  font-weight: 500;
  letter-spacing: -0.6px;
  margin-bottom: 1.01562vw;
`

// 이메일 컴포넌트
export const EmailWrap = styled.div`
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

export const SettingInput = styled.form`
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
  }
`

export const CurrentEmail = styled.p`
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

export const PwForget = styled.div`
  color: rgba(255, 255, 255, 0.4);
  font-size: 14px;
  font-weight: 400;
  letter-spacing: -0.3px;
  text-decoration: underline;
  line-height: 18px;
  padding: 34px 0;
`
export const PasswordWrap = styled.div`
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
