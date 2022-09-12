'use strict';

//Selecting DOM
const loginInput = document.querySelector('.loginInput');
const passwordInput = document.querySelector('.passwordInput');
const inputFields = document.querySelector('.loginWrapper');
const welcomeMsg = document.querySelector('.welcomeMsg');
const shortNotice = document.querySelector('.shortNotice');
const loginBtn = document.querySelector('.loginBtn');
const timeCounter = document.querySelector('.timeCounter');

//users
const user1 = {
  name: 'John',
  login: 'user1',
  password: '1111',
};

const user2 = {
  name: 'Katie',
  login: 'user2',
  password: '2222',
};

//all users
const users = [user1, user2];

// Log-in functionality
let currentUser;

const logIn = (users) => {
  currentUser = users.find((user) => user.login === loginInput.value);

  if (currentUser?.password === passwordInput.value) {
    timerClock();
    welcomeMsg.textContent = `Welcome ${currentUser.name},`;
    shortNotice.textContent = 'TIK-TOK, time is running !';
    inputFields.style.display = 'none';
  } else {
    shortNotice.textContent = 'Incorrect credentials';
    shortNotice.style.color = '#02c2a9';
  }
};

//Timer functionality
const timerClock = () => {
  let time = 10;

  const tick = () => {
    timeCounter.textContent = `${time} sec. to get logged off`;
    if (time === 0) {
      clearInterval(timer);
      welcomeMsg.textContent = 'Log-in to Get Started';
      inputFields.style.display = 'inline';
      shortNotice.textContent = '';
      timeCounter.textContent = '';
    }
    time--;
  };

  tick();
  const timer = setInterval(tick, 1000);
  return timer;
};

// Event handlers - login button
loginBtn.addEventListener('click', () => {
  logIn(users);
});

//Smooth scrolling to login area
const logInForm = document.querySelector('#log-in-form');
const scrollBtn = document.querySelector('.check--login-functionality');

scrollBtn.addEventListener('click', (e) => {
  const logInFormCoords = logInForm.getBoundingClientRect();
  window.scrollTo({
    left: logInFormCoords.left + window.pageXOffset,
    top: logInFormCoords.top + window.pageYOffset,
    behavior: 'smooth',
  });
});

//Functions

//Generating random number
const randomNb = (min, max) => {
  return Math.trunc(Math.random() * (max - min) + 1);
};

// Random RGB color - returning full RGB
const randomRGB = () => {
  return `rgb(${randomNb(0, 250)},${randomNb(0, 250)},${randomNb(0, 250)})`;
};

// Random RGB color - returning array with RGB numbers
const randomRGBNumbs = () => {
  return [randomNb(0, 250), randomNb(0, 250), randomNb(0, 250)];
};

//RGB to HEX Converter
const RGBtoHEX = () => {
  const RGB = randomRGBNumbs();
  const HEX = RGB.map((nb) => {
    const number = nb.toString(16);
    return number.length === 1 ? number + 0 : number;
  });

  return `#${HEX.join('').toUpperCase()}`;
};

console.log(RGBtoHEX());
