'use strict'


// ハンバーガーメニュー

const btn = document.querySelector('.btn-hamburger');
const body = document.querySelector('body');
btn.addEventListener('click', () => body.classList.toggle('open'));

// swiper

const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });