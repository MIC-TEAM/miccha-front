import Header from '../components/common/Header'
import SubmitButton from '../components/common/SubmitButton'
import Head from 'next/head'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { InputBox, SignUpContainer, SignUpWrapper } from '../styles/sign_up'
import CheckeBox from '../components/sign_up/CheckeBox'

const SignUp: React.FC = () => {
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
            validationSchema={Yup.object().shape({
              name: Yup.string().min(2).max(20).required(),
              email: Yup.string().email().required(),
              password: Yup.string()
                .min(10)
                .matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/)
                .required(),
            })}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2))
                setSubmitting(false)
              }, 400)
            }}
          >
            {({ isSubmitting, errors }) => (
              <Form>
                <InputBox>
                  <div className="inputBox name">
                    <Field type="name" placeholder="이름 (2자 이상)" name="name" className="input" />
                    <ErrorMessage name="name" component="span" className={errors.name ? 'error' : 'success'} />
                  </div>

                  <div className="inputBox email">
                    <Field type="email" name="email" placeholder="이메일 (example@gamil.com)" className="input" />
                    <ErrorMessage name="email" component="span" className={errors.email ? 'error' : 'success'} />
                  </div>

                  <div className="inputBox password">
                    <Field
                      type="password"
                      name="password"
                      placeholder="영문, 숫자, 특문 중 2개 조합 10자 이상"
                      className="input"
                    />
                    <ErrorMessage name="password" component="span" className={errors.password ? 'error' : 'success'} />
                  </div>

                  <strong className="duplication">이미 존재하는 이메일입니다.</strong>
                </InputBox>

                <CheckeBox />

                <SubmitButton type="submit" disabled={isSubmitting}>
                  계정 생성하기
                </SubmitButton>
              </Form>
            )}
          </Formik>
        </SignUpWrapper>
      </SignUpContainer>
    </>
  )
}

export default SignUp
