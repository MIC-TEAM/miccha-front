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
