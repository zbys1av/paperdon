// import Swiper from 'swiper';

import Swiper, { Navigation, Pagination } from 'swiper';
// import './style.scss';

// import Swiper from 'swiper/bundle';
// import 'swiper/css/bundle';

import 'swiper/css/navigation';
// import 'swiper/css/pagination';


// const swiper = new Swiper();
// const swiper = new Swiper('.swiper', {
//   modules: [Navigation, Pagination]
// });

const swiper = new Swiper('.swiper', {

  direction: 'horizontal',
  // loop: true,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }

});


//BURGER
const menuButton = document.querySelector(".burger");
const menuShow = document.querySelector(".header__list");

//BURGER__MENU
function toggleMenu(){
  if (menuButton.classList.contains("open")){
    menuButton.classList.remove('open');      //change to burger
    menuShow.classList.remove('show');        //hide menu
  } else {
    menuButton.classList.add('open');         //change to "X"
    menuShow.classList.add('show');           //show menu
  }
}

menuButton.addEventListener("click", toggleMenu);