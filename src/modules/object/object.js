import 'slick-carousel';

$('.' + object_slider).slick({
  arrows:   false,
  dots:     true,
  asNavFor: '.' + object_thumbs,
});

$('.' + object_thumbs).slick({
  arrows:       false,
  slidesToShow: 7,
  asNavFor:     '.' + object_slider,
  responsive:   [
    {
      breakpoint: 1200 - 1,
      settings:   {
        slidesToShow: 6,
      }
    },
    {
      breakpoint: 992 - 1,
      settings:   {
        slidesToShow: 5,
      }
    },
    {
      breakpoint: 768 - 1,
      settings:   {
        slidesToShow: 4,
      }
    },
  ],
});