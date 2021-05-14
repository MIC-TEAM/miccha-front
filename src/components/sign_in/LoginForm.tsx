import styled from '@emotion/styled'

function LoginForm() {
  return (
    <Form>
      <FormHeader>
        <h2>로그인</h2>
        <span>비밀번호를 잊어버리셨나요?</span>
      </FormHeader>
      <input type="text" placeholder="이메일 (example@gmail.com)" />
      <input type="password" placeholder="비밀번호" />
      <button>로그인</button>
    </Form>
  )
}

export default LoginForm

const Form = styled.form`
  & > input {
    width: 100%;
    padding: 10px 10px 10px 14px;
    font-size: 16px;
    font-weight: 400;
    letter-spacing: -0.5px;
    line-height: normal;
    border-width: 1px 1px 0px;
    border-style: solid;
    border-color: rgba(154, 151, 161, 0.2);
    line-height: 1;
  }

  & > input::placeholder {
    color: #a7a8af;
  }

  & > input:first-of-type {
    border-radius: 4px 4px 0px 0px;
    border-bottom: none;
  }
  & > input:last-of-type {
    position: relative;
    top: -1px;
    border-radius: 0px 0px 4px 4px;
  }

  button {
    width: 100%;
    padding: 0px 0px 21px;
    border-bottom: 1px solid rgba(154, 151, 161, 0.2);
    margin: 16px 0px 0px;

    background-color: rgb(248, 47, 98);
    color: rgb(255, 255, 255);
    font-weight: 700;
    letter-spacing: -0.1px;
    text-align: center;
    width: 100%;
    border-radius: 40px;
    border: none;
    font-size: 16px;
    line-height: 47px;
    height: 48px;
  }
`

const FormHeader = styled.div`
  margin: 0px 0px 14px;

  h2 {
    font-size: 18px;
    font-weight: 700;
    letter-spacing: -1px;
  }

  span {
    position: absolute;
    right: 0;
    top: 0;
    font-size: 12px;
    font-weight: 400;
    letter-spacing: -0.4px;
    opacity: 0.5;
  }
`
