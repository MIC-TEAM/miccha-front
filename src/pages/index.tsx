import React from 'react'
import ReactFullpage from '@fullpage/react-fullpage'
import MainSection from '../components/Main'
import Header from '../components/Header'
import { DownBtn } from './styles'

type Props = {
  fullpageApi: any
}
const Fullpage: React.FC = () => {
  return (
    <>
      <Header />
      <ReactFullpage
        scrollingSpeed={1000}
        render={() => {
          return (
            <ReactFullpage
              navigation
              render={({ fullpageApi }: Props) => (
                <ReactFullpage.Wrapper>
                  <MainSection
                    title="영화, 드라마, 예능, 다큐멘터리를 무제한으로"
                    desc="매주 5백 여편의 신작이 업데이트 되며, 추가 요금은 전혀 없어요."
                    background="/images/main_01.jpg"
                    className="section section01"
                  >
                    <DownBtn type="button" onClick={() => fullpageApi.moveSectionDown()}>
                      <img src="/images/main_down.svg" alt="다음 섹션으로 이동하기" />
                    </DownBtn>
                  </MainSection>

                  <MainSection
                    title="여럿이 함께, 하나의 이용권으로"
                    desc="동시 4개 기기에서 재생이 가능한 프리미엄 이용권을 이용해보세요."
                    background="/images/main_02.jpg"
                    className="section section02"
                  >
                    <DownBtn type="button" onClick={() => fullpageApi.moveSectionDown()}>
                      <img src="/images/main_down.svg" alt="다음 섹션으로 이동하기" />
                    </DownBtn>
                  </MainSection>

                  <MainSection
                    title="이제 TV로 최고의 화질을 경험하세요"
                    desc="최대 Ultra HD 4K 해상도로 생생한 감동을 느껴보세요."
                    background="/images/main_03.jpg"
                    className="section section03"
                  >
                    <DownBtn type="button" onClick={() => fullpageApi.moveSectionDown()}>
                      <img src="/images/main_down.svg" alt="다음 섹션으로 이동하기" />
                    </DownBtn>
                  </MainSection>

                  <MainSection
                    title="이동 중에도 감상을 멈추지 마세요"
                    desc="보고 싶은 콘텐츠를 다운로드하여 오프라인으로 즐기세요."
                    background="/images/main_04.jpg"
                    className="section section04"
                  >
                    <DownBtn type="button" className="top" onClick={() => fullpageApi.moveTo(1)}>
                      <img src="/images/main_down.svg" alt="다음 섹션으로 이동하기" />
                    </DownBtn>
                  </MainSection>
                </ReactFullpage.Wrapper>
              )}
            />
          )
        }}
      />
    </>
  )
}

export default Fullpage
