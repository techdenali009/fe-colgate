export const sliderSettings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: false,
  swipeToSlide: true,
  
  responsive: [
    {
      breakpoint: 1350,
      settings: {
        slidesToShow: 3,
        centerPadding: '15px',
      },
    },
    {
      breakpoint: 1020,
      settings: {
        slidesToShow: 2.099,
        centerPadding: '10px',
      },
    },
  
    {
      breakpoint: 670,
      settings: {
        slidesToShow: 1.09,
        centerPadding: '5px',
      },
    },
  ],
};