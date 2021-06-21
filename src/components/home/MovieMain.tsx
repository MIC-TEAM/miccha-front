import React, { memo } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { EffectFade, Navigation, Pagination } from 'swiper/core'
import { MovieMainWrap } from '../../styles/home_movie'

SwiperCore.use([EffectFade, Navigation, Pagination])
import 'swiper/swiper.min.css'
import 'swiper/components/effect-fade/effect-fade.min.css'
import 'swiper/components/navigation/navigation.min.css'
import 'swiper/components/pagination/pagination.min.css'

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
          <img src="/images/home/main01.jpeg" alt="애니메이션" />
          <div className="movieDetail">
            <h2>힐링되는 애니메이션</h2>
            <button type="button">목록보기</button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/home/main02.jpeg" alt="" />
          <div className="movieDetail">
            <h2>심장 쫄깃쫄깃 스릴러</h2>
            <button type="button">목록보기</button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/home/main03.jpeg" alt="" />
          <div className="movieDetail">
            <h2>어린이를 위한 키즈물</h2>
            <button type="button">목록보기</button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/home/main04.jpeg" alt="" />
          <div className="movieDetail">
            <h2>싱기방기 화려함 SF</h2>
            <button type="button">목록보기</button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/home/main05.jpeg" alt="" />
          <div className="movieDetail">
            <h2>누구보다 빠르게 액션</h2>
            <button type="button">목록보기</button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/home/main06.jpeg" alt="" />
          <div className="movieDetail">
            <h2>대리만족 로맨스</h2>
            <button type="button">목록보기</button>
          </div>
        </SwiperSlide>
      </Swiper>
    </MovieMainWrap>
  )
}

export default memo(MovieMain)
