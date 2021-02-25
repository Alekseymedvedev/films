"use strict"

/****
 * кнопка меню
 */

let menuBtn = document.querySelectorAll('.menu__btn');

menuBtn.forEach((item) => {
  item.addEventListener('click', function () {
    item.classList.toggle('menu__btn--active');
    document.querySelector('.menu').classList.toggle('menu__active');

  });
});





/*****
 * слайдеры
 */

var swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  spaceBetween: 35,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    clickable: true,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  keyboard: true,
  breakpoints: {
   
    480: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    1140: {
      slidesPerView: 5,
      spaceBetween: 40
    }
  }

});








