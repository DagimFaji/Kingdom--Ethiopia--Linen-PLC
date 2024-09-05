var swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    spaceBetween: 10, // Adjust the space between slides as needed
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1.5,
        slideShadows: true,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    autoplay: {
        delay: 7000, // Adjust the delay (in milliseconds) as needed
        disableOnInteraction: false,
    },
    simulateTouch: true,
    shortSwipes: true,
    loop: true,
    on: {
        slideChange: function () {
            // Remove active class from all bullets
            $('.swiper-pagination-bullet-active').removeClass('swiper-pagination');
            // Add active class to the current bullet
            $('.swiper-pagination-bullet-active').eq(this.activeIndex).addClass('swiper-pagination');
        },
    },
});
