import React, { memo } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { EffectFade, Navigation, Pagination } from 'swiper/core'
import { MovieMainWrap } from '../../styles/home_movie'

SwiperCore.use([EffectFade, Navigation, Pagination])
import 'swiper/swiper.min.css'
import 'swiper/components/effect-fade/effect-fade.min.css'
import 'swiper/components/navigation/navigation.min.css'
import 'swiper/components/pagination/pagination.min.css'
import MovieDetail from './MovieDetail'

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
          <img src="/images/home/main01.jpeg" alt="" className="backgroundImg" />
          <MovieDetail title="힐링되는 애니메이션" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/home/main02.jpeg" alt="" className="backgroundImg" />
          <MovieDetail title="심장 쫄깃쫄깃 스릴러" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/home/main03.jpeg" alt="" className="backgroundImg" />
          <MovieDetail title="어린이를 위한 키즈물" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/home/main04.jpeg" alt="" className="backgroundImg" />
          <MovieDetail title="싱기방기 화려함 SF" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/home/main05.jpeg" alt="" className="backgroundImg" />
          <MovieDetail title="누구보다 빠르게 액션" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/home/main06.jpeg" alt="" className="backgroundImg" />
          <MovieDetail title="대리만족 로맨스" />
        </SwiperSlide>
      </Swiper>
    </MovieMainWrap>
  )
}

export default memo(MovieMain)
