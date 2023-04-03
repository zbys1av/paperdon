import './style.scss';
// console.log('Webpack starter with SCSS and dev server');

//SWIPER 
// import Swiper, { Navigation, Pagination } from 'swiper';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

// const swiper = new Swiper('.swiper', {
//   direction: 'vertical',
//   loop: true,

//   pagination: {
//     el: '.swiper-pagination',
//   },

//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },

//   scrollbar: {
//     el: '.swiper-scrollbar',
//   },
// });

//BURGER
const menu = document.querySelector(".header__list");
const menuItems = document.querySelectorAll(".header__item");
const hamburger= document.querySelector(".burger");
// const closeIcon= document.querySelector(".closeIcon");
// const menuIcon = document.querySelector(".menuIcon");

function toggleManu(){
  if (menu.classList.contains("open")){
    menu.classList.remove("open")
  } else {
    menu.classList.add("open")
  }
}

hamburger.addEventListener("click", toggleMenu);
menuItems.forEach(
  function(menuItem){
    menuItem.addEventListener("click", toggleMenu);
  }
)