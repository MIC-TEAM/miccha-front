import styled from '@emotion/styled'

// 로그인 전 메인페이지 (fullPage)
export const MainSection = styled.section`
  width: 100vw;
  height: 100vh;
  text-align: center;
  display: flex;
  background-color: rgba(0, 0, 0, 0.62);
  div {
    z-index: -1;
  }
  h2 {
    color: #fff;
    font-size: 3.472vw;
    font-weight: 400;
    z-index: 10;
    margin-bottom: 1.11vw;
    letter-spacing: -0.09vw;
  }
  p {
    margin-bottom: 3.75vw;
    opacity: 0.65;
    color: #fff;
    font-size: 1.527vw;
    letter-spacing: -0.0486vw;
    font-weight: 400;
  }
`

export const StartBtn = styled.button`
  color: #fff;
  background: #f82f62;
  border: none;
  padding: 1em 1.5625vw;
  border-radius: 2.083vw;
  font-size: 1.388vw;
  text-align: center;
  cursor: pointer;
  letter-spacing: -0.0486vw;
  font-weight: 700;
  `