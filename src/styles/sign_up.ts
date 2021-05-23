import styled from '@emotion/styled'

export const SignUpChecker = styled.div`
  width: 100%;
  margin: 16px 0 0;
`

export const Checker = styled.div`
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  text-align: left;
  color: rgba(255, 255, 255, 0.5);
  margin: 6px 0;
  label {
    cursor: pointer;
    strong {
      color: rgba(255, 255, 255, 0.7);
    }
  }
  span {
    vertical-align: middle;
    input {
      width: 14px;
      height: 14px;
      border: 1px solid rgba(255, 255, 255, 0.5);
      border-radius: 50%;
    }
    input[type='checkbox'] {
      width: 14px;
      height: 14px;
      border: 1px solid rgba(255, 255, 255, 0.5);
      border-radius: 50%;
      cursor: pointer;
      margin-right: 7px;
      outline: none;
      appearance: none;
      &:checked {
        background: rgb(248, 47, 98) no-repeat center center;
        border: 1px solid rgb(248, 47, 98);
        background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTkuNDEgMTcuMjZhLjc0NC43NDQgMCAwIDEtLjUzLS4yMkw0LjA1IDEyLjIxMmEuNzQ5Ljc0OSAwIDEgMSAxLjA2LTEuMDZsNC4yOTggNC4yOTcgOS40OC05LjQ4QS43NS43NSAwIDEgMSAxOS45NSA3LjAzTDkuOTQgMTcuMDRhLjc0NC43NDQgMCAwIDEtLjUzLjIyIi8+Cjwvc3ZnPgo=);
        background-size: contain;
      }
    }
  }
`

export const InputBox = styled.div`
  strong {
    color: rgb(248, 47, 98);
    text-align: center;
    width: 100%;
    display: flex;
    justify-content: center;
    font-size: 12px;
    margin: 16px 0 0;
  }
  .inputBox {
    width: 100%;
    background-color: #fff;
    border: none;
    box-sizing: border-box;
    position: relative;
    overflow: hidden;
    .err {
      color: black;
    }

    &.name {
      border-radius: 4px 4px 0 0;
    }
    &.password {
      border-radius: 0 0 4px 4px;
    }
    &.email {
      border: 1px solid rgba(154, 151, 161, 0.2);
      border-top-width: 1px;
      border-bottom-width: 1px;
    }
    input {
      border: none;
      width: 100%;
      padding: 10px 44px 10px 14px;
      letter-spacing: -0.5px;
    }
  }
`

export const SignUpForm = styled.form`
  width: 100%;
  button {
    opacity: 0.3;
    &.success {
      opacity: 1;
    }
  }
`
export const SignUpContainer = styled.div`
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
  h2 {
    color: #fff;
    font-size: 18px;
    font-weight: 700;
    letter-spacing: -1px;
    margin: 0 0 14px;
  }
`

export const SignUpWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  color: white;
`
