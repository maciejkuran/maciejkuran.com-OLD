'use strict';

////Navbar
const hamburgerBtn = document.querySelector('.nav-hamburger-btn');
const navContainer = document.querySelector('.nav-list');
const navCloseBtn = document.querySelector('.close-nav-btn');
const backgroundOverlay = document.querySelector('.background-overlay');

//Showing and hiding navbar mobile on hamburger btn click
const showNav = () => {
  navContainer.classList.add('nav-list--active');
  backgroundOverlay.classList.remove('hide');
};

hamburgerBtn?.addEventListener('click', showNav);

const closeNav = () => {
  navContainer?.classList.remove('nav-list--active');
  backgroundOverlay?.classList.add('hide');
};

backgroundOverlay?.addEventListener('click', closeNav);
navCloseBtn?.addEventListener('click', closeNav);

//Highlight active nav li (add active class)
const navEls = document.querySelectorAll('.nav-list ul li');

const highlightActiveLi = () => {
  let documentName = document.location.pathname.replace('.html', '');
  let navEl = document.querySelector(`.nav-list a[href="${documentName}"]`);

  if (!navEl) return;

  navEl.classList.add('nav-el-active');
};

highlightActiveLi();

//Show or hide navbar on scroll
const entireNav = document.querySelector('.primary-nav');

let previousPos;
const showNavbarOnScrollUp = () => {
  let currentPos = window.pageYOffset;

  if (currentPos < previousPos) {
    entireNav.classList.remove('primary-nav-hide');
  } else {
    entireNav.classList.add('primary-nav-hide');
  }

  if (currentPos <= 100) entireNav.classList.remove('primary-nav-hide');

  previousPos = currentPos;
};

window.addEventListener('scroll', showNavbarOnScrollUp);

const closeBtns = document.querySelectorAll('.close-popup-btn');
const popups = document.querySelectorAll('.popup');
const otherEducationBtn = document.querySelector('.othereducation-btn');
const courseworkBtn = document.querySelector('.coursework-btn');

const displayPopup = (e) => {
  let targetAttr = e.target.dataset.popupclass;
  document.querySelector(targetAttr).classList.remove('hide');
  backgroundOverlay.classList.remove('hide');
};

const hidePopup = () => {
  popups.forEach((popup) => popup.classList.add('hide'));
  backgroundOverlay.classList.add('hide');
};

otherEducationBtn?.addEventListener('click', displayPopup);
courseworkBtn?.addEventListener('click', displayPopup);
closeBtns?.forEach((btn) => btn.addEventListener('click', hidePopup));
backgroundOverlay?.addEventListener('click', hidePopup);
