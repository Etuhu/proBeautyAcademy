//Слайдеры
const feedbackSwiper = new Swiper(".feedback-swiper", {
    slidesPerView: 5,
    slidesPerGroup: 5,
    speed: 1000,
    simulateTouch: true,
    spaceBetween: 10,
    watchOverflow: true,
    navigation: {
        nextEl: ".feedback-swiper-button-next",
        prevEl: ".feedback-swiper-button-prev",
    },
    breakpoints: {
        300: {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 10,
        },
        576: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 10,
        },
        992: {
            slidesPerView: 4,
            slidesPerGroup: 4,
            spaceBetween: 10,
        },
    },
});

// const marqueeSwiper = new Swiper(".marquee-swiper", {
//     speed: 6000,
//     slidesPerView: 'auto',
//     slidesPerGroupAuto: true,
//     spaceBetween: 75,
//     loop: true,
//     allowTouchMove: false,
//     autoplay: {
//       delay: 0,
//     },
//     breakpoints: {
//       300: {
//         spaceBetween: 30,
//     },
//       576: {
//         spaceBetween: 75,
//     }
//    }
// });

let marqueeSwiperParams = {
    speed: 6000,
    slidesPerView: 'auto',
    slidesPerGroupAuto: true,
    spaceBetween: 75,
    loop: true,
    allowTouchMove: false,
    autoplay: {
      delay: 0,
    },
    breakpoints: {
      300: {
        spaceBetween: 30,
    },
      576: {
        spaceBetween: 75,
    }
   }
};

new Swiper(".marquee-swiper--bottom", marqueeSwiperParams);


//Подключение кастомного скролла при ширине экрана больше 991 пикселя
if ($(window).width() > 991) {
    (function ($) {
        $(window).on("load", function () {
            $(".text-content-scroll").mCustomScrollbar({
                theme: 'dark',
                scrollInertia: "300",
                advanced: {
                    updateOnContentResize: "true",
                },
            });
        });
    })(jQuery);
};

let mobileMenu = document.querySelector(".top-menu-wrapper");
let openMobileMenuButton = document.querySelector(".header-wrapper .open-menu-btn");
let closeMobileMenuButton = document.querySelector(".header-wrapper .close-btn");
let marqueeSwiperTop;

if (mobileMenu && openMobileMenuButton && closeMobileMenuButton) {
    openMobileMenuButton.addEventListener('click', function (e) {
        e.preventDefault();
        openMobileMenuButton.classList.toggle("show");
        closeMobileMenuButton.classList.toggle("show");
        mobileMenu.classList.toggle("show");
        document.body.classList.toggle("fixed");
        marqueeSwiperTop = new Swiper(".marquee-swiper--top", marqueeSwiperParams);
    });
    closeMobileMenuButton.addEventListener('click', function (e) {
        e.preventDefault();
        openMobileMenuButton.classList.toggle("show");
        closeMobileMenuButton.classList.toggle("show");
        mobileMenu.classList.toggle("show");
        document.body.classList.toggle("fixed");
    });
}