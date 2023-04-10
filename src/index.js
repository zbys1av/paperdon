import Swiper, { Navigation, Pagination } from 'swiper';
import './style.scss';

'use strict';

document.addEventListener('DOMContentLoaded', ()=> {

  const swiper = new Swiper('.swiper', {
    modules: [Navigation, Pagination],
    direction: 'horizontal',
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }

  });


//BURGER
  const menuButton = document.querySelector(".burger");
  const menuShow = document.querySelector(".header__list");
  const body = document.querySelector("body");
  const html = document.querySelector("html");

//BURGER__MENU
  function toggleMenu() {
    menuButton.classList.toggle('open');      //change to burger
    menuShow.classList.toggle('show');        //hide menu
    html.classList.toggle('scroll-hidden');
    body.classList.toggle('scroll-hidden');
  }

  if (menuButton) {
    menuButton.addEventListener("click", toggleMenu);
  }

});
