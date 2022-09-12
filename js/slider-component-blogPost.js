'use strict';

const slides = document.querySelectorAll('.slide');
const slideRightBtn = document.querySelector('.slide-img-right-btn');
const slideLeftBtn = document.querySelector('.slide-img-left-btn');
const instructionSlider = document.querySelector('.instruction-slider-label');

let currentSlide = 0;
const maxSlides = slides.length;

//setting slide
const setSlide = (slide) => {
  slides.forEach((sl, i) => {
    sl.style.transform = `translateX(${100 * (i - slide)}%)`;
  });
};

setSlide(0);

//Changing to next slide
const nextSlide = () => {
  if (currentSlide === maxSlides - 1) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }

  setSlide(currentSlide);
};

//Changing to previous slide

const previousSlide = () => {
  if (currentSlide === 0) {
    currentSlide = maxSlides - 1;
  } else {
    currentSlide--;
  }
  setSlide(currentSlide);
};

//Handlers
slideRightBtn.addEventListener('click', nextSlide);

slideLeftBtn.addEventListener('click', previousSlide);
