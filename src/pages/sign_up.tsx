import Header from '../components/common/Header'
import SubmitButton from '../components/common/SubmitButton'
import Head from 'next/head'
import { Formik } from 'formik'
import * as Yup from 'yup'
import Validation from '../components/common/Validation'
import { InputBox, Checker, SignUpForm, SignUpContainer, SignUpWrapper, SignUpChecker } from '../styles/sign_up'

const SignUp: React.FC = () => {
  const SignupSchema = Yup.object().shape({
    name: Yup.string().min(2, 'Too Short!').max(2, 'Too Long!').required('Required'),
    email: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
    password: Yup.string().email('Invalid email').required('Required'),
  })

  return (
    <>
      <Head>
        <title>믹챠 | 회원가입</title>
      </Head>

      <SignUpContainer>
        <Header link="/sign_in" text="로그인" />
        <SignUpWrapper>
          <h2>회원가입</h2>

          <Formik
            initialValues={{
              name: '',
              email: '',
              password: '',
            }}
            validationSchema={SignupSchema}
            onSubmit={(values) => {
              console.log(values)
            }}
          >
            {({ errors, touched }) => (
              <SignUpForm>
                <InputBox>
                  <div className="inputBox name">
                    <input type="text" placeholder="이름 (2자 이상)" id="name" />
                    {errors.name && touched.name ? <Validation state={name.validation} /> : null}
                  </div>

                  <div className="inputBox email">
                    <input type="email" placeholder="이메일 (example@gamil.com)" id="email" />
                    {errors.email && touched.email ? <Validation state={email.validation} /> : null}
                  </div>

                  <div className="inputBox password">
                    <input type="password" placeholder="영문, 숫자, 특문 중 2개 조합 10자 이상" id="epasswordmail" />
                    {errors.password && touched.password ? <Validation state={password.validation} /> : null}
                  </div>

                  <strong className="duplication">이미 존재하는 이메일입니다.</strong>
                </InputBox>

                <SignUpChecker>
                  <Checker>
                    <label htmlFor="check01">
                      <span>
                        <input type="checkbox" name="user-term" />
                      </span>
                      전체 약관에 동의합니다.
                    </label>
                  </Checker>

                  <Checker>
                    <label htmlFor="check02">
                      <span>
                        <input type="checkbox" name="user-term" />
                      </span>
                      만 14세 이상입니다.
                    </label>
                  </Checker>

                  <Checker>
                    <label htmlFor="check03">
                      <span>
                        <input type="checkbox" name="user-term" />
                      </span>
                      <strong>믹챠 서비스 이용약관</strong>에 동의합니다 (필수)
                    </label>
                  </Checker>

                  <Checker>
                    <label htmlFor="check04">
                      <span>
                        <input type="checkbox" name="user-term" />
                      </span>
                      <strong>개인정보 수집 및 이용에 대한 안내</strong>에 동의합니다 (필수)
                    </label>
                  </Checker>

                  <Checker>
                    <label htmlFor="check05">
                      <span>
                        <input type="checkbox" name="user-term" />
                      </span>
                      <strong>신작 알림 이벤트 정보 수신</strong>에 동의합니다 (선택)
                    </label>
                  </Checker>
                </SignUpChecker>

                <SubmitButton type="submit">계정 생성하기</SubmitButton>
              </SignUpForm>
            )}
          </Formik>
        </SignUpWrapper>
      </SignUpContainer>
    </>
  )
}

export default SignUp
