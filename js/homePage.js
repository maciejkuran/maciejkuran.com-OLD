'use strict';

//DOM elements

const startBtn = document.querySelector('.click_to_start');
const homeIntroduction = document.querySelector('.home_introduction');
const homeNavigation = document.querySelector('.home_navigation');
const closeBtn = document.querySelector('.close_nav_btn');

//button delay
window.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    startBtn.style.display = 'flex';
  }, 1500);
});

// Clicking on start button

startBtn.addEventListener('click', (e) => {
  homeIntroduction.style.display = 'none';
  homeNavigation.style.display = 'flex';
});

//Closing nav
closeBtn.addEventListener('click', (e) => {
  homeIntroduction.style.display = 'flex';
  homeNavigation.style.display = 'none';
});
