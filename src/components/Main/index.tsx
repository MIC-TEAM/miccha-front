import React from 'react'
import { MainSection, StartBtn, DownBtn } from './styles'
import Image from 'next/image'
import Link from 'next/link'

// 메인페이지 Fullpage Section
type Props = {
  title: string
  desc: string
  background: string
  className: string
}

const Main = ({ title, desc, background }: Props) => {
  return (
    <MainSection className="section">
      <Image src={background} alt="믹챠 메인페이지 배경사진" layout="fill" objectFit="cover" />
      <h2>{title}</h2>
      <p>{desc}</p>

      <Link href="/start">
        <StartBtn type="button">2주 무료 이용 시작</StartBtn>
      </Link>

      <DownBtn type="button">
        <img src="/images/main/main_down.svg" alt="다음 섹션으로 이동하기" />
      </DownBtn>
    </MainSection>
  )
}

export default Main
