import './style.scss';
console.log('Webpack starter with SCSS and dev server');

const slidesContainer = document.getElementsByClassName("experts__list");
const slide = document.querySelector(".card");

const prevButton = document.getElementById("left");
const nextButton = document.getElementById("right");

nextButton.addEventListener("click", () => {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft += slideWidth;
});

prevButton.addEventListener("click", () => {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft -= slideWidth;
});