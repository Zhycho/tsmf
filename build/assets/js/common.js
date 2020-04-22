$(document).ready(function () { 

    // Слайдер акций на главной
    $('.js--main-slider').slick({
        arrows: false,
        infinite: false,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipe: false,
        vertical: false,
        responsive: [
            {
                breakpoint: 993,
                settings: {
                    dots: false,
                    arrows: true,
                    infinite: true,
                }
            },
            {
                breakpoint: 577,
                settings: {
                    dots: false,
                    arrows: true,
                    infinite: true,
                    swipe: true,
                }
            }
        ]
    });

    // Слайдер услуг на главной
    $('.js--services-slider').slick({
        prevArrow: $('.js--services-slider__nav-prev'),
        nextArrow: $('.js--services-slider__nav-next'),
        infinite: true,
        dots: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        swipe: false,
        vertical: false,
        responsive: [
            {
                breakpoint: 1201,
                settings: {
                    slidesToShow: 3,
                }
            }
        ]
    });

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

    // Слайдер блока "обрати внимание"
    $('.js--news-slider').slick({
        arrows: false,
        infinite: false,
        dots: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        swipe: false,
        vertical: false,
        responsive: [
            {
                breakpoint: 769,
                settings: "unslick"
            }
        ]
    });
    // Мобильный
    $('.js--attention-slider_mobile').slick({
        arrows: false,
        infinite: false,
        dots: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        swipe: false,
        vertical: false,
        responsive: [
            {
                breakpoint: 481,
                settings: {
                    slidesToShow: 1,
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
                breakpoint: 1201,
                settings: {
                    slidesPerRow: 3,
                    rows: 2,
                }
            },
            {
                breakpoint: 993,
                settings: {
                    slidesPerRow: 2
                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesPerRow: 2
                }
            },
            {
                breakpoint: 481,
                settings: {
                    slidesPerRow: 1
                }
            },
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
                breakpoint: 577,
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
                breakpoint: 993,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 577,
                settings: "unslick"
            }
        ]
    });

    // Смена текста заголовка у блока choose-zone

    let chooseZoneHeadline = document.querySelector('.js--block-headline_choose-zone');

    if (document.documentElement.clientWidth < 769 ) {
        chooseZoneHeadline.innerHTML = "Фурнитура по помещениям";
    } else {
        chooseZoneHeadline.innerHTML = "Выберете зону на карте и мы предоставим решение Вашей ситуации";
    }


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