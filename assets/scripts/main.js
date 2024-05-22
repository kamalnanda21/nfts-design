// slick slider

$(document).ready(function() {
$('.slick-slider').slick({
    fade: true,
    speed: 500,
    infinite: true,
    speed: 500,
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 5000,
    arrows: false,
    pauseOnHover: false,
    adaptiveHeight: true,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});
});