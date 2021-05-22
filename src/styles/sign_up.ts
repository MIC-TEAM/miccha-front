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
    span {
      content: '';
      position: absolute;
      top: 50%;
      right: 12px;
      bottom: auto;
      width: 20px;
      height: 20px;
      margin-top: -10px;
      &.error {
        background: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjBweCIgaGVpZ2h0PSIyMHB4IiB2aWV3Qm94PSIwIDAgMjAgMjAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDU1LjIgKDc4MTgxKSAtIGh0dHBzOi8vc2tldGNoYXBwLmNvbSAtLT4KICAgIDx0aXRsZT5JY29ucyAvIFNldHRpbmdzIC8gSW52YWxpZDwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxnIGlkPSJJY29ucy0vLVNldHRpbmdzLS8tSW52YWxpZCIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9IngtY2lyY2xlLWYiIGZpbGw9IiNEQjQyNDEiIGZpbGwtcnVsZT0ibm9uemVybyI+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0xNy4wNzA1NTU2LDE3LjA3IEMxMy4xODE2NjY3LDIwLjk1ODg4ODkgNi44MTgzMzMzMywyMC45NTg4ODg5IDIuOTI5NDQ0NDQsMTcuMDcgQy0wLjk1ODg4ODg4OSwxMy4xODE2NjY3IC0wLjk1ODg4ODg4OSw2LjgxODMzMzMzIDIuOTI5NDQ0NDQsMi45Mjk0NDQ0NCBDNi44MTgzMzMzMywtMC45NTg4ODg4ODkgMTMuMTgxNjY2NywtMC45NTg4ODg4ODkgMTcuMDcsMi45Mjk0NDQ0NCBDMjAuOTU4ODg4OSw2LjgxODMzMzMzIDIwLjk1ODg4ODksMTMuMTgxNjY2NyAxNy4wNzA1NTU2LDE3LjA3IEwxNy4wNzA1NTU2LDE3LjA3IFogTTEzLjg5Mzg4ODksNy42NjM4ODg4OSBMMTIuMzM2MTExMSw2LjEwNjExMTExIEwxMCw4LjQ0Mjc3Nzc4IEw3LjY2Mzg4ODg5LDYuMTA2MTExMTEgTDYuMTA2NjY2NjcsNy42NjM4ODg4OSBMOC40NDI3Nzc3OCwxMCBMNi4xMDY2NjY2NywxMi4zMzYxMTExIEw3LjY2Mzg4ODg5LDEzLjg5Mzg4ODkgTDEwLDExLjU1NzIyMjIgTDEyLjMzNjExMTEsMTMuODkzODg4OSBMMTMuODkzODg4OSwxMi4zMzYxMTExIEwxMS41NTcyMjIyLDEwIEwxMy44OTM4ODg5LDcuNjYzODg4ODkgTDEzLjg5Mzg4ODksNy42NjM4ODg4OSBaIiBpZD0iU2hhcGUiPjwvcGF0aD4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==)
          no-repeat;
        display: inline-block;
      }
      &.success {
        background: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjBweCIgaGVpZ2h0PSIyMHB4IiB2aWV3Qm94PSIwIDAgMjAgMjAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDU1LjIgKDc4MTgxKSAtIGh0dHBzOi8vc2tldGNoYXBwLmNvbSAtLT4KICAgIDx0aXRsZT5JY29ucyAvIFNldHRpbmdzIC8gVmFsaWQ8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZyBpZD0iSWNvbnMtLy1TZXR0aW5ncy0vLVZhbGlkIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iY2hlY2stY2lyY2xlLWYiIGZpbGw9IiMzQ0FBRkYiIGZpbGwtcnVsZT0ibm9uemVybyI+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0xMCwxOS45OTg4ODg5IEM0LjUwMDU1NTU2LDE5Ljk5ODg4ODkgMC4wMDExMTExMTExMSwxNS40OTg4ODg5IDAuMDAxMTExMTExMTEsOS45OTk0NDQ0NCBDMC4wMDExMTExMTExMSw0LjUwMTExMTExIDQuNTAwNTU1NTYsMC4wMDExMTExMTExMSAxMCwwLjAwMTExMTExMTExIEMxNS40OTk0NDQ0LDAuMDAxMTExMTExMTEgMTkuOTk4ODg4OSw0LjUwMTExMTExIDE5Ljk5ODg4ODksOS45OTk0NDQ0NCBDMTkuOTk4ODg4OSwxNS40OTg4ODg5IDE1LjQ5OTQ0NDQsMTkuOTk4ODg4OSAxMCwxOS45OTg4ODg5IEwxMCwxOS45OTg4ODg5IFogTTEzLjM5Nzc3NzgsNi4xMTA1NTU1NiBMOC4xMTk0NDQ0NCwxMS4yOTYxMTExIEw2LjA0NjY2NjY3LDkuMjYgTDQuNDQzODg4ODksMTAuODM0NDQ0NCBMOC4xMTk0NDQ0NCwxNC40NDUgTDkuNzIyMjIyMjIsMTIuODcwNTU1NiBMMTUuMDAwNTU1Niw3LjY4NTU1NTU2IEwxMy4zOTc3Nzc4LDYuMTEwNTU1NTYgTDEzLjM5Nzc3NzgsNi4xMTA1NTU1NiBaIE04LjExOTQ0NDQ0LDExLjI5NjExMTEgTDguMTE5NDQ0NDQsMTEuMjk2MTExMSBMOS43MjIyMjIyMiwxMi44NzA1NTU2IEw4LjExOTQ0NDQ0LDExLjI5NjExMTEgTDguMTE5NDQ0NDQsMTEuMjk2MTExMSBaIiBpZD0iU2hhcGUiPjwvcGF0aD4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==)
          no-repeat;
        display: inline-block;
      }
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
