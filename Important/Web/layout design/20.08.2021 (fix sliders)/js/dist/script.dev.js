"use strict";

console.log("Hello world!");
var swiper = new Swiper('.logo-slider', {
  // Optional parameters
  loop: true,
  slidesPerView: 1,
  observer: true,
  observeParents: true,
  breakpoints: {
    // when window width is >= 320px
    420: {
      slidesPerView: 2
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 3
    },
    // when window width is >= 800px
    800: {
      slidesPerView: 5
    }
  },
  // If we need pagination
  pagination: {
    el: '.swiper-pagination'
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar'
  }
});