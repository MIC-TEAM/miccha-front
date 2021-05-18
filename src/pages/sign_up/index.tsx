import Header from '../../components/common/Header'
import SubmitButton from '../../components/common/SubmitButton'
import useLoginForm from '../../hooks/useLoginForm'
import Head from 'next/head'
import { InputBox, Checker, SignUpForm, SignUpContainer, SignUpWrapper, SignUpChecker } from './styles'

const SignUp: React.FC = () => {
  const { name, email, password, onChangeName, onChangeEmail, onChangePassword } = useLoginForm()

  return (
    <>
      <Head>
        <title>믹챠 | 회원가입</title>
      </Head>

      <SignUpContainer>
        <Header link="/sign_in" text="로그인" />
        <SignUpWrapper>
          <h2>회원가입</h2>

          <SignUpForm>
            <InputBox>
              <div className="inputBox name success">
                <input type="text" placeholder="이름 (2자 이상)" value={name} onChange={onChangeName} />
              </div>

              <div className="inputBox email">
                <input type="email" placeholder="이메일 (example@gamil.com)" value={email} onChange={onChangeEmail} />
              </div>

              <div className="inputBox password">
                <input
                  type="password"
                  placeholder="영문, 숫자, 특문 중 2개 조합 10자 이상"
                  value={password}
                  onChange={onChangePassword}
                />
              </div>

              <strong className="duplication">이미 존재하는 이메일입니다.</strong>
            </InputBox>

            <SignUpChecker>
              <Checker>
                <label htmlFor="check01">
                  <span>
                    <input type="checkbox" name="check01" />
                  </span>
                  전체 약관에 동의합니다.
                </label>
              </Checker>

              <Checker>
                <label htmlFor="check02">
                  <span>
                    <input type="checkbox" name="check" id="check03" />
                  </span>
                  만 14세 이상입니다.
                </label>
              </Checker>

              <Checker>
                <label htmlFor="check04">
                  <span>
                    <input type="checkbox" name="check" id="check04" />
                  </span>
                  <strong>믹챠 서비스 이용약관</strong>에 동의합니다 (필수)
                </label>
              </Checker>

              <Checker>
                <label htmlFor="check05">
                  <span>
                    <input type="checkbox" name="check" id="check05" />
                  </span>
                  <strong>개인정보 수집 및 이용에 대한 안내</strong>에 동의합니다 (필수)
                </label>
              </Checker>

              <Checker>
                <label htmlFor="check01">
                  <span>
                    <input type="checkbox" name="check" id="" />
                  </span>
                  <strong>신작 알림 이벤트 정보 수신</strong>에 동의합니다 (선택)
                </label>
              </Checker>
            </SignUpChecker>

            <SubmitButton type="submit">계정 생성하기</SubmitButton>
          </SignUpForm>
        </SignUpWrapper>
      </SignUpContainer>
    </>
  )
}

export default SignUp