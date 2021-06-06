import styled from '@emotion/styled'
import Link from 'next/link'
import ResetPasswordForm from '../../components/reset_password/Form'

const ResetPassword: React.FC = () => {
  return (
    <ResetPasswordContainer>
      <Header>
        <Link href="/">
          <BI>왓챠</BI>
        </Link>
      </Header>
      <ResetPasswordForm />
      <Bottom />
    </ResetPasswordContainer>
  )
}

export default ResetPassword

const ResetPasswordContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: rgb(20, 21, 23);
`
const Header = styled.div`
  background-color: #030708;
  height: 44px;
  padding-top: 10px;
  border-bottom: 1px solid #232325;
`
const BI = styled.a`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 64px;
  height: 19px;
  background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTk2IiBoZWlnaHQ9IjU5IiB2aWV3Qm94PSIwIDAgMTk2IDU5IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTc4LjI3MTMgMTIuOTE4NFYyMC43NzFIODYuMDk0NlY1Ni4xOTU2SDk1Ljg0MzJWMjAuNzcxSDEwMy4yMThWMTIuOTE4NEg3OC4yNzEzWk0xNTMuNDY0IDI5LjYzODlIMTQ2LjAwNFYxMi45NzYzSDEzNi4yODVWNTYuMjUzMkgxNDYuMDA0VjM3LjQ5MTJIMTUzLjQ2NFY1Ni4yNTMySDE2My4xODNWMTIuOTc2M0gxNTMuNDY0VjI5LjYzODlaTTExOS42MTMgMTIuNDUyN0gxMTcuOTJDMTA5LjE0MiAxMi40NTI3IDEwNS42MzEgMTYuOTMxNiAxMDUuNjMxIDI0LjIwM1Y0NC44NTIxQzEwNS42MzEgNTIuMTIzOSAxMDkuMTQyIDU2Ljc3NyAxMTguMTA4IDU2Ljc3N0gxMTkuODAxQzEyOC43MDQgNTYuNzc3IDEzMS44MzkgNTEuNDI1MiAxMzEuODM5IDQ1LjM3NjNWMzcuOTg5MUgxMjIuMzA5VjQ0Ljg1MjFDMTIyLjMwOSA0Ny40MTIzIDEyMS40MzEgNDguOTgyNiAxMTguOTIzIDQ4Ljk4MjZDMTE2LjQ3NyA0OC45ODI2IDExNS42NjMgNDcuNTI4NiAxMTUuNjYzIDQ0Ljc5NDZWMjQuMTQ0NkMxMTUuNjYzIDIxLjQxMDUgMTE2LjQ3NyAyMC4wMTUgMTE4LjkyMyAyMC4wMTVDMTIxLjQ5MyAyMC4wMTUgMTIyLjMwOSAyMS41MjY5IDEyMi4zMDkgMjQuMTQ0NlYyOS4xNDdIMTMxLjgzOVYyMy42MjFDMTMxLjgzOSAxNi40MDg3IDEyOC40NTMgMTIuNDUyNyAxMTkuNjEzIDEyLjQ1MjdaTTY4Ljc4MiA0MS40MjI0TDY1Ljk1NTggMjMuMzMxNkg2NC4yODQxTDYxLjQ1NzYgNDEuNDIyNEg2OC43ODJaTTcyLjMyNjIgMTIuOTE4NEw3OS45NzU5IDU2LjE5NTZINzEuMDkwMkw3MC4wMDkgNDkuMjc1M0g2MC4yMzA4TDU5LjE0OTMgNTYuMTk1Nkg1MC4yNjM2TDU3LjkxMzYgMTIuOTE4NEg3Mi4zMjYyWk0xODQuMzkxIDQxLjQyMjRMMTgxLjU2NCAyMy4zMzE2SDE3OS44OTNMMTc3LjA2NiA0MS40MjI0SDE4NC4zOTFaTTE4Ny45MzUgMTIuOTE4NEwxOTUuNTg1IDU2LjE5NTZIMTg2LjY5OUwxODUuNjE4IDQ5LjI3NTNIMTc1Ljg0TDE3NC43NTkgNTYuMTk1NkgxNjUuODczTDE3My41MjIgMTIuOTE4NEgxODcuOTM1WiIgZmlsbD0iI0ZGMDU1OCIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTQyLjI1MDEgMC43NTc4MTJMMzkuMzUyMSA0Mi4yMDY3TDM4LjU3MzMgNDIuMjQ2NkwzMS42ODA3IDEyLjkyMjRIMjMuMTY0TDE4LjAwNzggNDMuMzA3MkwxNi45MDI3IDQzLjM2MzlMMTIuMjg2MiAxMi45MjI0SDAuNDE0MDYyTDExLjIxNTEgNTguMjM5N0wyMy4yODkxIDU3LjQ1NTdMMjcuMjE3MyAyOS4zMjY4TDI4LjM2OTQgMjkuMjY1M0wzMy42Mjk1IDU2Ljc3NjFMNDUuMTg1NSA1Ni4wMjA2TDU0LjM2MjUgMC43NTc4MTJINDIuMjUwMVoiIGZpbGw9IiNGRjA1NTgiLz4KPC9zdmc+Cg==);
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  text-indent: -9999px;
  overflow: hidden;
  cursor: pointer;
`

const Bottom = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 33%;
  background: url('https://an2-img.amz.wtchn.net/image/v2/c37dfedc3fb879b066e0d4c677519226.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKaVlXTnJaM0p2ZFc1a0lqcDdJbklpT2pJMU5Td2laeUk2TWpVMUxDSmlJam95TlRWOUxDSndZWFJvSWpvaUwzWXhMM05vY1RKMVl6SmxiMlZzYm1nd2QyVmxjV2gwSW4wLk1EUzJWWlRDT2lRTzBNNmJKaW44ZzBQbFpycG9tQS04dUpELTdvTW9iTUE')
    center center;

  &::after {
    content: '';
    display: inline-block;
    position: absolute;
    top: 0px;
    right: 0px;
    left: 0px;
    background-image: linear-gradient(0deg, rgba(25, 25, 25, 0) 0%, rgb(20, 21, 23) 100%);
    height: 100%;
  }
`
