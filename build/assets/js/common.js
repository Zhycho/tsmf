$(document).ready(function () { 

    $('.js--attention-slider').slick({
        arrows: false,
        infinite: false,
        dots: true,
        slidesPerRow: 4,
        rows: 2,
        swipe: false,
        vertical: false,
        // prevArrow: $('.js--special-products__list-nav-prev'),
        // nextArrow: $('.js--special-products__list-nav-next'),
        // customPaging : function(slider, i) {
        //     var thumb = $(slider.$slides[i]).data('thumb');
        //     return '<div class="special-products__list-nav-numbers-item">'+(i+1)+'</div>';
        // },
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