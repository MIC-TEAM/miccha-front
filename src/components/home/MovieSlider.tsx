import React from 'react'
import Slick from 'react-slick'
import { Image, SlickWrap, ContentHead, ContentTitle, SmallTitle, AllView } from '../../styles/home_movie'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

type Props = {
  title: string
  movieTitle: string
}

const Home = ({ title, movieTitle }: Props) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    initialSlide: 0,
    arrow: true,
    slide: 'ul',

    //반응형 1024, 768, 480
    responsive: [
      //iPad Pro
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          infinite: true,
        },
      },
      //iPad
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 2,
        },
      },
      //mobile
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  }

  const items = [
    {
      id: 1,
      url: 'https://t1.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/21H1/image/frnwiL8Kwpqe0OiAVdaJOU2Vl2g.jpg',
    },
    {
      id: 1,
      url: 'https://t1.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/21H1/image/frnwiL8Kwpqe0OiAVdaJOU2Vl2g.jpg',
    },
    {
      id: 1,
      url: 'https://t1.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/21H1/image/frnwiL8Kwpqe0OiAVdaJOU2Vl2g.jpg',
    },
    {
      id: 1,
      url: 'https://t1.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/21H1/image/frnwiL8Kwpqe0OiAVdaJOU2Vl2g.jpg',
    },
    {
      id: 1,
      url: 'https://t1.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/21H1/image/frnwiL8Kwpqe0OiAVdaJOU2Vl2g.jpg',
    },
    {
      id: 1,
      url: 'https://t1.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/21H1/image/frnwiL8Kwpqe0OiAVdaJOU2Vl2g.jpg',
    },
    {
      id: 1,
      url: 'https://t1.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/21H1/image/frnwiL8Kwpqe0OiAVdaJOU2Vl2g.jpg',
    },
    {
      id: 1,
      url: 'https://t1.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/21H1/image/frnwiL8Kwpqe0OiAVdaJOU2Vl2g.jpg',
    },
    {
      id: 1,
      url: 'https://t1.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/21H1/image/frnwiL8Kwpqe0OiAVdaJOU2Vl2g.jpg',
    },
    {
      id: 1,
      url: 'https://t1.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/21H1/image/frnwiL8Kwpqe0OiAVdaJOU2Vl2g.jpg',
    },
    {
      id: 1,
      url: 'https://t1.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/21H1/image/frnwiL8Kwpqe0OiAVdaJOU2Vl2g.jpg',
    },
    {
      id: 1,
      url: 'https://t1.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/21H1/image/frnwiL8Kwpqe0OiAVdaJOU2Vl2g.jpg',
    },
    {
      id: 1,
      url: 'https://t1.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/21H1/image/frnwiL8Kwpqe0OiAVdaJOU2Vl2g.jpg',
    },
    {
      id: 1,
      url: 'https://t1.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/21H1/image/frnwiL8Kwpqe0OiAVdaJOU2Vl2g.jpg',
    },
    {
      id: 1,
      url: 'https://t1.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/21H1/image/frnwiL8Kwpqe0OiAVdaJOU2Vl2g.jpg',
    },
  ]

  const itemsList = items.map((item) => (
    <li key={item.id}>
      <Image src={item.url} alt="" />
      <SmallTitle>{movieTitle}</SmallTitle>
    </li>
  ))

  return (
    <>
      <ContentHead>
        <ContentTitle>{title}</ContentTitle>
        <AllView href="#">
          모두 보기
          <img src="/images/common/arr_right.svg" alt="모두 보기 버튼" />
        </AllView>
      </ContentHead>

      <SlickWrap style={{ padding: '0 50px' }}>
        <Slick {...settings}>{itemsList}</Slick>
      </SlickWrap>
    </>
  )
}

export default Home
