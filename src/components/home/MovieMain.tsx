import React from 'react'
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
          <img
            src="https://an2-img.amz.wtchn.net/image/v2/6c0ea4bb926c442d53be3c31be98ab84.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKaVlXTnJaM0p2ZFc1a0lqcDdJbklpT2pJMU5Td2laeUk2TWpVMUxDSmlJam95TlRWOUxDSndZWFJvSWpvaUwzWXlMM04wYjNKbEwybHRZV2RsTHpFMk1qTXpPREE1TVRRd01UZzFOVEEyTkRZaUxDSnhkV0ZzYVhSNUlqbzRNSDAuZzlPajE3SU95dW1KR0ZoUTczUERCWWg4MFBiWjZDMHdFMnU5TWM1SGtBWQ"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://an2-img.amz.wtchn.net/image/v2/7a1c6c1ef9895f5997a927e00e0b0ad2.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKaVlXTnJaM0p2ZFc1a0lqcDdJbklpT2pJMU5Td2laeUk2TWpVMUxDSmlJam95TlRWOUxDSndZWFJvSWpvaUwzWXlMM04wYjNKbEwybHRZV2RsTHpFMk1qTXpNalEzT0RrMk56WXhPVEF4TURraUxDSnhkV0ZzYVhSNUlqbzRNSDAuU1Y2Vzd0R0I0WHo2SURONUp2M2wtMnBoRUxveTVrTG5rb0tJdXMzV01mUQ"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://an2-img.amz.wtchn.net/image/v2/6db34a01ba851cca1d842bc70b4c5500.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKaVlXTnJaM0p2ZFc1a0lqcDdJbklpT2pJMU5Td2laeUk2TWpVMUxDSmlJam95TlRWOUxDSndZWFJvSWpvaUwzWXlMM04wYjNKbEwybHRZV2RsTHpFMk1qTXpNalV6TlRrd05Ua3hPREU0TXpjaUxDSnhkV0ZzYVhSNUlqbzRNSDAuaF9heWtyazlMb2JyTEthOG5sWjJDU1dFbEM4TjJROXg2VEJ0YTNsYTJ5dw"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://an2-img.amz.wtchn.net/image/v2/ee35c54f725d1c4287da4776197418dd.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKaVlXTnJaM0p2ZFc1a0lqcDdJbklpT2pJMU5Td2laeUk2TWpVMUxDSmlJam95TlRWOUxDSndZWFJvSWpvaUwzWXlMM04wYjNKbEwybHRZV2RsTHpFMk1qTTNNelF6T0RrME9USTBNVGN6TWpnaUxDSnhkV0ZzYVhSNUlqbzRNSDAuS2hYNVgySnV4VzZEc3d5ZHRVWmRvR1lIQU1IZGRteGFqRHRxTHlwWlpJWQ"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </MovieMainWrap>
  )
}

export default MovieMain
