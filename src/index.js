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
//TRY THIS:
//https://www.w3schools.com/howto/howto_js_accordion.asp
const card = document.getElementsByClassName("faq__card");
const question = document.getElementsByClassName(".faq__question");
const text = document.getElementsByClassName(".faq__text");
var i;
var j = 0;

for (i = 0; i < card.length; i++) {
  card[i].addEventListener("click",openQuestion);
}

function openQuestion(){
  this.classList.toggle("open");
  for (i = 0; i< card.length; i++){
    if (this !== card[i]){
      card[i].classList.remove('open');
    }
  }
}


//HOW TO
const readMore = document.querySelector(".how-to__button");
const addText = document.querySelector(".how-to__text-add");

//чомусь при натиску на кнопку, сторінка прогортується в сам верх
function showMore(){
  if (addText.classList.contains("hide-text")){
    addText.classList.remove('hide-text');  
    readMore.innerHTML  = 'Show Less';
  } else {
    addText.classList.add('hide-text');  
    readMore.innerHTML  = 'Read More';
  }
}

readMore.addEventListener("click", showMore);