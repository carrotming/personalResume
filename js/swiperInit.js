(function () {
    $(function () {
        new Swiper('.swiper-container', {
            mousewheelControl: true,
            direction: 'vertical',
            // effect: 'cube',
            flip: {
                slideShadows : true,
                limitRotation : true,
            },
            onInit: function (swiper) {
                swiperAnimateCache(swiper);
                swiperAnimate(swiper);
            },
            onSlideChangeEnd: function (swiper) {
                if (swiper.activeIndex == 4 || swiper.activeIndex == 3) {
                    $('#canvas').fadeOut();
                } else {
                    $('#canvas').fadeIn();
                }
                if (swiper.activeIndex == 4) {
                    $('.scroll').fadeOut()
                } else {
                    $('.scroll').fadeIn()
                }
                swiperAnimate(swiper);
            }
        });
    })
})();