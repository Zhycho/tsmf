$(document).ready(function () { 

    // Слайдер блока "обрати внимание"
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
                breakpoint: 1201,
                settings: {
                    slidesPerRow: 3
                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesPerRow: 2,
                    rows: 2,
                }
            },
            {
                breakpoint: 481,
                settings: {
                    slidesPerRow: 1,
                    rows: 2,
                }
            }
        ]
    });

    // слайдер в категории
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
                breakpoint: 769,
                settings: {
                    slidesPerRow: 2
                }
            }
        ]
    });

    // Слайдер в товаре
    $('.js--product-slider__projector').slick({
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipe: false,
        speed: 700,
        fade: true,
        asNavFor: '.js--product-slider__nav',
        responsive: [
            {
                breakpoint: 661,
                settings: {
                    swipe: true
                }
            }
        ]
    });

    $('.js--product-slider__nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.js--product-slider__projector',
        dots: false,
        prevArrow: $('.js--product-slider__nav-prev'),
        nextArrow: $('.js--product-slider__nav-next'),
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 1201,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 577,
                settings: {
                    slidesToShow: 4,
                }
            }
        ]
    });

    // Табулятор в странице товаров
    const tabLinks = document.querySelectorAll(".product-main-tab__item a");
    const tabPanels = document.querySelectorAll(".product-main-panel");

    for(let el of tabLinks) {
        el.addEventListener("click", e => {
            e.preventDefault();
            
            document.querySelector('.product-main-tab__item.active').classList.remove("active");
            document.querySelector('.product-main-panel.active').classList.remove("active");
            
            const parentListItem = el.parentElement;
            parentListItem.classList.add("active");
            const index = [...parentListItem.parentElement.children].indexOf(parentListItem);
            
            const panel = [...tabPanels].filter(el => el.getAttribute("data-index") == index);
            panel[0].classList.add("active");
        });
    }

    // Раскрывашки в характеристиках товара
    $(document).on('click','.js--product-main-characteristic__detail',function(){
        $(this).toggleClass('active');
    });

    // Поиск в хедере
    $(document).on('click','.js--header-nav__buttons-item-search',function(){
        $('#header-search').toggleClass('active');
    });
});