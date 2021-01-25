$(document).ready(function() {
    $('.carousel__slider').slick({
        speed: 1200,
        adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="./assets/images/carousel/carousel__arrow-left.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="./assets/images/carousel/carousel__arrow-right.svg"></button>'
    });
});