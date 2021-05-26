import styled from '@emotion/styled'
import React, { memo } from 'react'

interface Props {
  children: React.ReactNode
  type?: 'submit' | 'reset' | 'button'
  active?: boolean
}

const SubmitButton: React.FC<Props> = ({ children, type = 'submit', active = false }) => {
  return (
    <Button type={type} disabled={!active}>
      {children}
    </Button>
  )
}

export default memo(SubmitButton)

const Button = styled.button`
  width: 100%;
  padding: 0px 0px 21px;
  border-bottom: 1px solid rgba(154, 151, 161, 0.2);

  background-color: rgb(248, 47, 98);
  color: rgb(255, 255, 255);
  font-weight: 700;
  letter-spacing: -0.1px;
  text-align: center;
  border-radius: 40px;
  border: none;
  font-size: 16px;
  line-height: 47px;
  height: 48px;

  cursor: pointer;

  &:disabled {
    opacity: 0.3;
  }
`
