$(document).ready(function() {
    /*<----- Header menu button ----->*/
    $('.header__menu-btn').on('click', function() {
        $(this).toggleClass('header__menu-btn_active');
        $('.header__inner').toggleClass('header__inner_active');
    });

    /*<----- Carousel ----->*/
    $('.carousel__slider').slick({
        speed: 1200,
        adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="./assets/images/carousel/carousel__arrow-left.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="./assets/images/carousel/carousel__arrow-right.svg"></button>',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    dots: true
                }
            }
        ]
    });
});