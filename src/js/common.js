$(document).ready(function () { 

    $('.js--attention-slider').slick({
        arrows: false,
        infinite: false,
        dots: true,
        slidesPerRow: 4,
        rows: 2,
        swipe: false,
        vertical: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesPerRow: 3
                }
            },
            {
                breakpoint: 920,
                settings: {
                    slidesPerRow: 2
                }
            }
        ]
    });

    $('.js--category-slider').slick({
        arrows: false,
        infinite: false,
        dots: true,
        slidesPerRow: 4,
        rows: 3,
        swipe: false,
        vertical: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesPerRow: 3
                }
            },
            {
                breakpoint: 920,
                settings: {
                    slidesPerRow: 2
                }
            }
        ]
    });

});