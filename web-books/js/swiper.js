const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    spaceBetween: 10,

    pagination: {
        el: '.swiper-pagination',
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },

    breakpoints: {
        428: {
            slidesPerView: 1
        },

        560: {
            slidesPerView: 2
        },

        1024: {
            slidesPerView: 3
        }
    }
});