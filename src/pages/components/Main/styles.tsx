import styled from '@emotion/styled'

// 뒤로가기 버튼
export const MainSection = styled.section`
  width: 100vw;
  height: 100vh;
  text-align: center;
  display: flex;
  & > div {
    img {
      z-index: -10;
    }
  }
  img {
  }
  h2 {
    color: #fff;
    font-size: 3.472vw;
    font-weight: 400;
    z-index: 10;
  }
  button {
    color: #fff;
    background: #f82f62;
    border-radius: 50px;
    border: none;
    min-width: 13.125vw;
    height: 4.166vw;
    padding: 0 1.5625vw;
    border-radius: 2.083vw;
    font-size: 1.388vw;
    text-align: center;
  }
`
