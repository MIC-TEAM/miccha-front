import styled from '@emotion/styled'
import { useRouter } from 'next/router'

interface Props {
  active?: boolean
}

const SettingButton = ({ active }: Props) => {
  const router = useRouter()

  return (
    <Container>
      <button type="submit" className="save" disabled={!active}>
        저장
      </button>

      <button type="button" className="back" onClick={() => router.back()}>
        뒤로
      </button>
    </Container>
  )
}

export default SettingButton

const Container = styled.div`
  margin-top: 13px !important;
  button {
    font-size: 14px;
    font-weight: 500;
    letter-spacing: -0.3px;
    line-height: 18px;
    min-width: 102px;
    padding: 10px 16px;
    border-radius: 2px;
    outline: none;
    &:disabled {
      cursor: not-allowed;
    }
    &.save {
      background: rgb(248, 47, 98);
      color: rgba(255, 255, 255, 0.8);
      border: 1px rgb(248, 47, 98);
    }
    &.back {
      background: transparent;
      color: rgba(255, 255, 255, 0.4);
      border: 1px solid rgb(68, 68, 68);
      margin-left: 6px;
    }
  }
`
