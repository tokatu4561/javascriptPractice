const swiper = new Swiper(".swiper", {
  // Optional parameters
  // direction: "vertical",
  loop: true,
  grabCursor: true,
  effect: "coverflow",
  centeredSlides: true,
  slidesPerView: 1,
  speed: 1000,
  breakpoints: {
    1024: {
      slidesPerView: 2,
    },
  },
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
