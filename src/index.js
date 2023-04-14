import Swiper, { Navigation, Pagination } from 'swiper';
import './style.scss';

'use strict';
document.addEventListener('DOMContentLoaded', ()=>{

  const swiper = new Swiper('.swiper', {

    modules: [Navigation, Pagination],
    direction: 'horizontal',
    loop: true,
    slidesPerView: "auto",
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },      
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    }

  });


  //BURGER
    const menuButton = document.querySelector(".burger");
    const menuShow = document.querySelector(".header__list");
    const body = document.querySelector("body");
    const html = document.querySelector("html");

  //BURGER__MENU
  function toggleMenu(){
      menuButton.classList.toggle('open');      //change to burger
      menuShow.classList.toggle('show');        //hide menu
      html.classList.toggle('scroll-hidden');
      body.classList.toggle('scroll-hidden');
  }

  if(menuButton && menuShow)  {
    menuButton.addEventListener("click", toggleMenu);
  }

  //FAQ
  const card = document.querySelectorAll(".faq__card");

  if (card) {
    card.forEach(e => {
      e.addEventListener("click",openQuestion);
    });
  }

  function openQuestion(){
    this.classList.toggle("open");
    card.forEach(e => {
      if (this !== e){
        e.classList.remove('open');
      }
    });
  }


  //HOW TO
  const readMore = document.querySelector(".how-to__button");
  const addText = document.querySelector(".how-to__text");

  function showMore(e){

    e.preventDefault();

    if (addText.classList.contains("show-text")){
      readMore.innerHTML  = 'Read More';
    } else {
      readMore.innerHTML  = 'Show Less';
    }

    addText.classList.toggle('show-text');
  }

  if(readMore && addText) {
    readMore.addEventListener("click", showMore);
  }

});