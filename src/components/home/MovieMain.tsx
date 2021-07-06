import React, { memo } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { EffectFade, Navigation, Pagination } from 'swiper/core'

SwiperCore.use([EffectFade, Navigation, Pagination])
import 'swiper/swiper.min.css'
import 'swiper/components/effect-fade/effect-fade.min.css'
import 'swiper/components/navigation/navigation.min.css'
import 'swiper/components/pagination/pagination.min.css'
import MovieDetail from './MovieDetail'
import styled from '@emotion/styled'

const MovieMain: React.FC = () => {
  return (
    <MovieMainWrap>
      <Swiper
        spaceBetween={30}
        effect={'fade'}
        navigation={true}
        loop={true}
        pagination={{
          clickable: true,
        }}
        className="movieMainSlider"
      >
        <SwiperSlide>
          <img src="/images/home/main01.jpg" alt="" className="backgroundImg" />
          <MovieDetail title="힐링되는 애니메이션" desc="울림있는 메시지를 던지는 다양성 영화에 빠져보세요." />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/home/main02.jpg" alt="" className="backgroundImg" />
          <MovieDetail title="심장이 쫄깃쫄깃 스릴러" desc="더울 땐? 오싹한 차가운 맛 영화들" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/home/main03.jpg" alt="" className="backgroundImg" />
          <MovieDetail title="어린이를 위한 키즈물" desc="어린이들 시선집중! 키덜트도 모여라!" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/home/main04.jpg" alt="" className="backgroundImg" />
          <MovieDetail title="싱기방기 화려함 SF 액션" desc="극강의 비주얼, 눈이 호강하는 작품 베스트" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/home/main05.jpg" alt="" className="backgroundImg" />
          <MovieDetail title="영화로 배우는 로맨스" desc="마음이 몽글몽글해지는 영화 모음" />
        </SwiperSlide>
      </Swiper>
    </MovieMainWrap>
  )
}

export default memo(MovieMain)

export const MovieMainWrap = styled.div`
  position: relative;
  background: rgb(20, 21, 23);
  .swiper-wrapper {
    height: 100vh;
    position: relative;
  }
  .movieMainSlider {
    width: 100%;
    overflow: hidden;
    box-sizing: border-box;
    .backgroundImg {
      width: 100%;
      height: 100vh;
      object-fit: cover;
      position: absolute;
    }
  }
  .swiper-pagination {
    padding-right: 50px;
    padding-bottom: 20px;
    display: flex;
    justify-content: flex-end;
    span {
      display: inline-block;
      background-color: #ffffff;
      width: 0.78125vw;
      height: 0.78125vw;
      border-radius: 50%;
      margin: 0 0.3125vw;
      opacity: 0.25;
      cursor: pointer;
      &.swiper-pagination-bullet-active {
        opacity: 1;
      }
    }
  }
  div[class*='swiper-button'] {
    --swiper-navigation-size: 25px;
    color: #ffffff;
    opacity: 0.5;
    &:hover {
      opacity: 1;
    }
  }
  .swiper-button-prev {
    left: 20px;
  }
  .swiper-button-next {
    right: 20px;
  }
`
