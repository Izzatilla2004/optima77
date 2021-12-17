var swiper1 = new Swiper('.swiper', {
    loop: true,

    pagination: {
        el: '.swiper-pagination',
    },
    autoplay: {
        enabled: true,
        delay: 1500,
    },
    speed: 1500,
    breakpoints: {
        992: {
            slidesPerView: 4,
            spaceBetween: 0,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 0,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    }
});

//swiper-2

var swiper2 = new Swiper('.swiper-own', {
    loop: true,
    breakpoints: {
        768: {
            slidesPerView: 3,
            spaceBetween: 0,
        },
    },
    autoplay: {
        enabled: true,
        delay: 1500,
    },
    speed: 1500,
    pagination: {
        el: '.pagination-own',
    },
    navigation: {
        nextEl: '.button-next',
        prevEl: '.button-prev',
    },
})

// navbar-burger

$(".navbar__burger").on("click", function () {
    $('.media_nav').toggleClass('show');
});

$(".navbar__burger").on("click", function () {
    $(".navbar__burger_line").toggleClass('_active');
})

