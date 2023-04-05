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
const menuButton = document.querySelector(".burger");
const menuShow = document.querySelector(".header__list");

//BURGER__MENU
// document.addEventListener('click', function handleClick(event){
//   if (menuButton.classList.contains("open")){
//     menuButton.classList.remove('open');      //change to burger
//     menuShow.classList.remove('show');        //hide menu
//   } else {
//     menuButton.classList.add('open');         //change to "X"
//     menuShow.classList.add('show');           //show menu
//   }
// });

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