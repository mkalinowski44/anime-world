var DoubleSlider = function() {

}

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