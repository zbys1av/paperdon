import Swiper, { Navigation, Pagination } from 'swiper';
import './style.scss';

// import Swiper from 'swiper/bundle';
// import 'swiper/css/bundle';

import 'swiper/css/navigation';
// import 'swiper/css/pagination';


// const swiper = new Swiper();
// const swiper = new Swiper('.swiper', {
//   modules: [Navigation, Pagination]
// });

  const swiper = new Swiper('.swiper', {
    modules: [Navigation, Pagination],
    direction: 'horizontal',
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },      
    pagination: {
      el: '.swiper-pagination',
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
}

menuButton.addEventListener("click", toggleMenu);

//FAQ
// const card = document.querySelectorAll(".faq__card");
// const question = document.querySelectorAll(".faq__question");
// const text = document.querySelectorAll(".faq__text");

// function showAnswer(){
//   if (card.classList.contains("card-sel-js")){
//     card.classList.remove('card-sel-js');
//     question.classList.remove('qstn-sel-js');
//     text.classList.remove('txt-sel-js');
//   } else {
//     card.classList.add('card-sel-js');
//     question.classList.add('qstn-sel-js');
//     text.classList.add('txt-sel-js');
//   }
// }

// card.addEventListener("click", showAnswer);

//TRY THIS:
//https://www.w3schools.com/howto/howto_js_accordion.asp
const card = document.getElementsByClassName("faq__card");
const question = document.getElementsByClassName(".faq__question");
const text = document.getElementsByClassName(".faq__text");
var i;
var j;
var k;

for (i = 0; i < card.length; i++) {
  card[i].addEventListener("click", function() {
    this.classList.toggle("crd-faq-js");

    // var panel = this.nextElementSibling;
    // if (panel.style.display === "block") {      //adds to the next element???
    //   panel.style.display = "none";
    // } else {
    //   panel.style.display = "block";
    // }
  });
}

//HOW TO
const readMore = document.querySelector(".how-to__button");
const addText = document.querySelector(".how-to__text-add");

//чомусь при натиску на кнопку, сторінка прогортується в сам верх
function showMore(){
  if (addText.classList.contains("hide-text")){
    addText.classList.remove('hide-text');  
  } else {
    addText.classList.add('hide-text');  
  }
}

readMore.addEventListener("click", showMore);