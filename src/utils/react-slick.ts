export const reactSlickSettings = {
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
