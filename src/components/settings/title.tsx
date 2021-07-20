import styled from '@emotion/styled'

type Props = {
  title: string
  desc: string
}
const SettingTitles = ({ title, desc }: Props) => {
  return (
    <>
      <SettingTitle>{title}</SettingTitle>
      <SettingDesc>{desc}</SettingDesc>
    </>
  )
}

export default SettingTitles

const SettingTitle = styled.h2`
  color: rgb(255, 255, 255);
  font-size: 22px;
  font-weight: 500;
  letter-spacing: -0.6px;
  line-height: 30px;
  margin-bottom: 5px;
`

const SettingDesc = styled.p`
  color: rgba(255, 255, 255, 0.6);
  font-size: 14px;
  font-weight: 400;
  letter-spacing: -0.4px;
  line-height: 18px;
  margin-bottom: 30px;
`
