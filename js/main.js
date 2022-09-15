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
  let documentName = document.location.pathname.replace('.html', '').replaceAll('/', '').replace('index', '');
  let navEl = document.querySelector(`.nav-list a[href="/${documentName}"]`);

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

const displayPopup = e => {
  let targetAttr = e.target.dataset.popupclass;
  document.querySelector(targetAttr).classList.remove('hide');
  backgroundOverlay.classList.remove('hide');
};

const hidePopup = () => {
  popups.forEach(popup => popup.classList.add('hide'));
  backgroundOverlay.classList.add('hide');
};

otherEducationBtn?.addEventListener('click', displayPopup);
courseworkBtn?.addEventListener('click', displayPopup);
closeBtns?.forEach(btn => btn.addEventListener('click', hidePopup));
backgroundOverlay?.addEventListener('click', hidePopup);

////Displaying cookies container if not accepted
const cookiesContainer = document.querySelector('.cookies-container');
const cookiesAcceptBtn = document.querySelector('.accept-cookies-btn');

//check in localStorage if cookies were accepted and if not display cookies container
const displayCookies = () => {
  let storageStatus = localStorage.getItem('maciejkuran.com:cookies');

  if (storageStatus === null) cookiesContainer?.classList.remove('hide');

  if (storageStatus !== null) cookiesContainer?.classList.add('hide');
};

document.addEventListener('DOMContentLoaded', displayCookies);

//Save cookies to localStorage on button click
const acceptCookies = () => {
  localStorage.setItem('maciejkuran.com:cookies', 'accepted');
  cookiesContainer.classList.add('hide');
};

cookiesAcceptBtn?.addEventListener('click', acceptCookies);

////Code colors <pre> tag
const preTags = document.querySelectorAll('pre');

const calc = preTags.forEach(function (preTag) {
  const string = preTag.innerHTML;
  const newString = string

    .replaceAll('function', '<span style="color:#B5FFFE">function</span>')
    .replaceAll('const', '<span style="color:#0AFFFB">const</span>')
    .replaceAll('let ', '<span style="color:#0AFFFB">let </span>')
    .replaceAll('class=', '<span style="color:#0AFFFB">class=</span>')
    .replaceAll(' = ', '<span style="color:#E53613"> = </span>')
    .replaceAll(' + ', '<span style="color:#E53613"> + </span>')
    .replaceAll(' += ', '<span style="color:#E53613"> += </span>')
    .replaceAll('${', '<span style="color:#E53613">${</span>')
    .replaceAll(' === ', '<span style="color:#E53613"> === </span>')
    .replaceAll('(', '<span style="color:#FE755A">(</span>')
    .replaceAll(')', '<span style="color:#FE755A">)</span>')
    .replaceAll('[', '<span style="color:#39F18D">[</span>')
    .replaceAll(']', '<span style="color:#39F18D">]</span>')
    .replaceAll('{', '<span style="color:#F66F0B">{</span>')
    .replaceAll('}', '<span style="color:#F66F0B">}</span>')
    .replaceAll('console.log', '<span style="color:#10E48D">console.log</span>')
    .replaceAll('=&gt;', '<span style="color:#E53613">=&gt;</span>')
    .replaceAll('if ', '<span style="color:#FC3535">if </span>')
    .replaceAll('else if ', '<span style="color:#FC3535">else if </span>')
    .replaceAll('else ', '<span style="color:#FC3535">else </span>')
    .replaceAll('return', '<span style="color:#EF593B">return</span>')
    .replaceAll('addEventListener', '<span style="color:#E8704B">addEventListener</span>')
    .replaceAll('div', '<span style="color:#E8704B">div</span>')
    .replaceAll('h1', '<span style="color:#F66F0B">h1</span>');

  preTag.innerHTML = newString;
});
