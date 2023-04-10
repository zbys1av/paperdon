import Swiper, { Navigation, Pagination } from 'swiper';
import './style.scss';

'use strict';       //check if code was written strictly to avoid any issues in different browsers

document.addEventListener('DOMContentLoaded', ()=> {    //js will run only when html loaded

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
    html.classList.toggle('scroll-hidden');   //disable scrolling page option
    body.classList.toggle('scroll-hidden');   //disable scrolling page option
  }

  if (menuButton) {         //check if element exists
    menuButton.addEventListener("click", toggleMenu);
  }

});


//FAQ
const faq = document.querySelectorAll(".faq__card");
const question = document.querySelectorAll(".faq__question");
const plus = document.querySelectorAll(".plus");
const answer = document.querySelectorAll(".faq__text");

function showAnswer(){
  faq.classList.toggle('selected-card-js');
  question.classList.toggle('selected-question-js');
  plus.classList.toggle('selected-question-js');
  answer.classList.toggle('selected-text-js');
}

if (faq) {
  faq.addEventListener("click", showAnswer);
}