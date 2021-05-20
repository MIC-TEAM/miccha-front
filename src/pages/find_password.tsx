import styled from '@emotion/styled'
import Header from '../components/common/Header'
import FindPasswordForm from '../components/FindPasswordForm'
import Head from 'next/head'

const FindPassword: React.FC = () => {
  return (
    <>
      <Head>
        <title>믹챠 | 비밀번호 찾기</title>
      </Head>

      <FindPasswordContainer>
        <Header text="로그인" link="/sign_in" />
        <FindPasswordWrapper>
          <FindPasswordForm />
        </FindPasswordWrapper>
      </FindPasswordContainer>
    </>
  )
}

export default FindPassword

const FindPasswordContainer = styled.div`
  width: 100%;
  height: 100%;
  background: url('https://an2-img.amz.wtchn.net/image/v2/d841ae726ca23a1bdb50453fa945e45d.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKaVlXTnJaM0p2ZFc1a0lqcDdJbklpT2pJMU5Td2laeUk2TWpVMUxDSmlJam95TlRWOUxDSndZWFJvSWpvaUwzWXlMM04wYjNKbEwybHRZV2RsTHpFMk1UVTVOakV3TnpReE1qYzJOVFV4TXpBaWZRLkJLdjJVSDB1ZFpmdHUyX2pJeUdSTzdxaTJ3MlNENXVMUTFCS3pIS19OSVU')
    center center / cover no-repeat;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(18, 18, 24, 0.8);
  }
`

const FindPasswordWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  color: white;
`
