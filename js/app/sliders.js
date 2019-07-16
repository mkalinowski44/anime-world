if($('#home-slider').length) {
   $('#home-slider .background').slick({
      appendArrows: false,
      appendDots: false,
      fade: true,
   });

   $('#home-slider .content').slick({
      appendDots: false,
      prevArrow: '<button type="button" class="arrow-prev">'
      + '<i class="material-icons">arrow_back_ios</i>'
      + '<div class="background"></div>'
      + '</button>',
      nextArrow: '<button type="button" class="arrow-next">'
      + '<i class="material-icons">arrow_forward_ios</i>'
      + '<div class="background"></div>'
      + '</button>',
      asNavFor: $('#home-slider .background'),
      focusOnSelect: false,
      autoplay: true,
      autoplaySpeed: 5000
   });
}

if($('#header-slider').length) {
   $('#header-slider .background').slick({
      appendArrows: false,
      appendDots: false,
      fade: true,
   });

   $('#header-slider .content').slick({
      appendDots: false,
      prevArrow: '<button type="button" class="arrow-prev">'
      + '<i class="material-icons">arrow_back_ios</i>'
      + '<div class="background"></div>'
      + '</button>',
      nextArrow: '<button type="button" class="arrow-next">'
      + '<i class="material-icons">arrow_forward_ios</i>'
      + '<div class="background"></div>'
      + '</button>',
      asNavFor: $('#header-slider .background'),
      focusOnSelect: false,
      autoplay: true,
      autoplaySpeed: 5000
   });
}

if($('.col-slider').length) {
   $('.col-slider').each(function() {
      $(this).slick({
         slidesToShow: 4,
         slidesToScroll: 4,
         appendDots: false,
         prevArrow: '<button type="button" class="btn-floating btn-large waves-effect waves-light secondary-dark arrow-prev">'
         + '<i class="material-icons">arrow_back_ios</i>'
         + '</button>',
         nextArrow: '<button type="button" class="btn-floating btn-large waves-effect waves-light secondary-dark arrow-next">'
         + '<i class="material-icons">arrow_forward_ios</i>'
         + '</button>',
         responsive: [
            {
               breakpoint: 1024,
               settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3
               }
            },
            {
               breakpoint: 768,
               settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2
               }
            },
            {
               breakpoint: 480,
               settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  prevArrow: '<button type="button" class="btn-floating btn-large waves-effect waves-dark secondary-dark arrow-prev">'
                  + '<i class="material-icons">arrow_back_ios</i>'
                  + '</button>',
                  nextArrow: '<button type="button" class="btn-floating btn-large waves-effect waves-dark secondary-dark arrow-next">'
                  + '<i class="material-icons">arrow_forward_ios</i>'
                  + '</button>',
               }
            }
         ]
      });
   });
}