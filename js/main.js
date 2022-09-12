'use strict';

////Navbar
const hamburgerBtn = document.querySelector('.nav-hamburger-btn');
const navContainer = document.querySelector('.nav-list');
const navCloseBtn = document.querySelector('.close-nav-btn');
const backgroundOverlay = document.querySelector('.background-overlay');

//Showing and hiding navbar on mobile
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
