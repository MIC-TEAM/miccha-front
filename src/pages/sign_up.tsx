import Header from '../components/common/Header'
import SubmitButton from '../components/common/SubmitButton'
import Head from 'next/head'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import { InputBox, SignUpContainer, SignUpWrapper } from '../styles/sign_up'
import CheckBox from '../components/sign_up/CheckBox'
import { useCallback, useRef } from 'react'
import Validation from '../components/common/Validation'
import { ValidationType } from '../hooks/useInput'
import { useRecoilValue } from 'recoil'
import { subCheckItemsAtom } from '../recoil/sign_up_check_box/atom'

const getValidationSchema = () => {
  return Yup.object().shape({
    name: Yup.string().min(2).max(20).required(),
    email: Yup.string().email().required(),
    password: Yup.string()
      .min(10)
      .matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{10,}$/)
      .required(),
  })
}

const SignUp: React.FC = () => {
  const subCheckItems = useRecoilValue(subCheckItemsAtom)
  const initialInputValues = useRef({
    name: '',
    email: '',
    password: '',
  })

  const onSubmit = useCallback((values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2))
      setSubmitting(false)
    }, 400)
  }, [])

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
            initialValues={initialInputValues.current}
            validationSchema={getValidationSchema()}
            onSubmit={onSubmit}
          >
            {({ errors, values }) => (
              <Form>
                <InputBox>
                  <div className="inputBox name">
                    <Field type="name" placeholder="이름 (2자 이상)" name="name" className="input" />
                    {values.name && <Validation state={errors.name ? ValidationType.ERROR : ValidationType.SUCCESS} />}
                  </div>

                  <div className="inputBox email">
                    <Field type="email" name="email" placeholder="이메일 (example@gamil.com)" className="input" />
                    {values.email && (
                      <Validation state={errors.email ? ValidationType.ERROR : ValidationType.SUCCESS} />
                    )}
                  </div>

                  <div className="inputBox password">
                    <Field
                      type="password"
                      name="password"
                      placeholder="영문, 숫자, 특문 중 2개 조합 10자 이상"
                      className="input"
                    />
                    {values.password && (
                      <Validation state={errors.password ? ValidationType.ERROR : ValidationType.SUCCESS} />
                    )}
                  </div>

                  <strong className="duplication">이미 존재하는 이메일입니다.</strong>
                </InputBox>

                <CheckBox />
                <SubmitButton
                  type="submit"
                  active={
                    values.name.length > 0 &&
                    !errors.name &&
                    values.email.length > 0 &&
                    !errors.email &&
                    values.password.length > 0 &&
                    !errors.password &&
                    subCheckItems[0] &&
                    subCheckItems[1] &&
                    subCheckItems[2]
                  }
                >
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
