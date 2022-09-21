'use strict';

//Selecting DOM
const loginInput = document.querySelector('.login-input');
const passwordInput = document.querySelector('.password-input');
const inputFields = document.querySelector('.login-form');
const welcomeMsg = document.querySelector('.welcome-msg');
const logoutAlert = document.querySelector('.logout-alert');
const loginBtn = document.querySelector('.login-btn');
const allInputs = document.querySelectorAll('.login-form input');

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

const logIn = (users, e) => {
  e.preventDefault();

  currentUser = users.find(user => user.login === loginInput.value);

  if (currentUser?.password === passwordInput.value) {
    timerClock();
    welcomeMsg.classList.remove('hide');
    welcomeMsg.textContent = `Welcome ${currentUser.name},`;
    inputFields.classList.add('hide');
  } else {
    logoutAlert.textContent = 'Incorrect credentials';
  }
};

//Timer functionality
const timerClock = () => {
  let time = 10;

  const tick = () => {
    logoutAlert.textContent = `${time} sec. to get logged off`;
    if (time === 0) {
      clearInterval(timer);
      welcomeMsg.textContent = 'Log-in to Get Started';
      inputFields.classList.remove('hide');
      logoutAlert.textContent = '';
      allInputs.forEach(input => (input.value = ''));
    }
    time--;
  };

  tick();
  const timer = setInterval(tick, 1000);
  return timer;
};

// Event handlers - login button
loginBtn.addEventListener('click', logIn.bind(loginBtn, users));

//Smooth scrolling to login area
const scrollBtn = document.querySelector('.scroll-to-login-area');

const scrollToLogin = e => {
  e.preventDefault();

  inputFields.scrollIntoView({ behavior: 'smooth' });
};

scrollBtn.addEventListener('click', scrollToLogin);
