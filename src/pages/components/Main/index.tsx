import React from 'react'
import { MainSection } from './styles'
import Image from 'next/image'

type Props = {
  title: string
  desc: string
  background?: string
}

const Main = ({ title, desc, background }: Props) => {
  return (
    <MainSection className="section">
      <Image src={background} alt="믹챠 메인페이지 배경사진" layout="fill" objectFit="cover" />

      <h2>{title}</h2>
      <p>{desc}</p>
      <button type="button">2주 무료 이용 시작</button>
    </MainSection>
  )
}

export default Main
