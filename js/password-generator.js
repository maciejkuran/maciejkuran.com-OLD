import {
  lowercase_PW,
  caseSensitive_PW,
  caseSensitive_numbs_PW,
  caseSensitive_SpecialCharacters_PW,
  caseSensitive_Numbs_SpecialCharacters_PW,
} from '/node_modules/super-strong-password-generator-es/pw-generator.js';

//Adjust password length inputs - type number & range
const nbInput = document.querySelector('.pw-number-input');
const rangeInput = document.querySelector('.pw-range-input');

const adjustInput = (e, inputType) => {
  e.preventDefault();

  let target = e.target;
  let value = target.value;

  rangeInput.style.backgroundSize = ((value - target.min) * 100) / (target.max - target.min) + '% 100%';
  inputType.value = value;

  if (nbInput.value === '') {
    rangeInput.value = 0;
    rangeInput.style.backgroundSize = '0%';
  }
};

rangeInput.addEventListener('input', e => adjustInput(e, nbInput));
nbInput.addEventListener('input', e => adjustInput(e, rangeInput));

//Switching options
const checkboxes = document.querySelectorAll('.option-checkbox');

let activeCheckbox = checkboxes[0]; //active el. by default

const switchOption = e => {
  activeCheckbox.classList.remove('option-checkbox--active');
  let target = e.target;
  target.classList.add('option-checkbox--active');
  activeCheckbox = target;
};

checkboxes.forEach(cb => cb.addEventListener('click', switchOption));

//Generate password based on chosen option
const output = document.querySelector('.pw-output');
const generateBtn = document.querySelector('.generate-pw-btn');

const generatePWBasedOnOption = () => {
  const attr = activeCheckbox.dataset.generate;

  if (+nbInput.value === '') return;

  if (attr.includes('fn1')) output.textContent = caseSensitive_Numbs_SpecialCharacters_PW(+nbInput.value);

  if (attr.includes('fn2')) output.textContent = caseSensitive_SpecialCharacters_PW(+nbInput.value);

  if (attr.includes('fn3')) output.textContent = caseSensitive_numbs_PW(+nbInput.value);

  if (attr.includes('fn4')) output.textContent = caseSensitive_PW(+nbInput.value);

  if (attr.includes('fn5')) output.textContent = lowercase_PW(+nbInput.value);

  showStrength();
};

generateBtn.addEventListener('click', generatePWBasedOnOption);
document.addEventListener('DOMContentLoaded', generatePWBasedOnOption);

//Show the password strength - the strength is displayed in color from red to green
const strengthMeter = document.querySelector('.pw-strength-meter div');

const showStrength = () => {
  if (output.textContent.length < 6) {
    strengthMeter.style.width = '20%';
    strengthMeter.style.backgroundColor = 'red';
  }

  if (output.textContent.length >= 6) {
    strengthMeter.style.width = '40%';
    strengthMeter.style.backgroundColor = '#FFA624';
  }

  if (output.textContent.length >= 10) {
    strengthMeter.style.width = '60%';
    strengthMeter.style.backgroundColor = '#EBBE0B';
  }

  if (output.textContent.length >= 12) {
    strengthMeter.style.width = '80%';
    strengthMeter.style.backgroundColor = '#4bff9c';
  }

  if (output.textContent.length >= 16) {
    strengthMeter.style.width = '100%';
    strengthMeter.style.backgroundColor = '#00BC55';
  }
};

//Implementing tooltips on mouseover
const actionBtns = document.querySelectorAll('[data-tooltip]');
const tooltipContainer = document.querySelector('.pw-generator-tooltip');
const mediaQuery = window.matchMedia('(max-width: 1043.98px)');

let tooltipState;

const showTooltip = e => {
  const coords = e.target.getBoundingClientRect();
  const top = coords.top + 'px';
  const left = coords.left + 'px';
  const dataAttr = e.target.dataset.tooltip;

  if (!mediaQuery.matches) {
    tooltipState = setTimeout(() => {
      tooltipContainer.textContent = dataAttr;
      tooltipContainer.style.top = top;
      tooltipContainer.style.left = left;
      tooltipContainer.classList.remove('hide');
    }, 300);
  }
};

//clear timeout if 'mouseleave' and set class 'hide'
const clearTooltip = () => {
  clearTimeout(tooltipState);

  setTimeout(() => {
    tooltipContainer.classList.add('hide');
  }, 0);
};

actionBtns.forEach(btn => btn.addEventListener('mouseenter', showTooltip));

actionBtns.forEach(btn => btn.addEventListener('mouseleave', clearTooltip));

//Copy to clipboard
const clipboardAlert = document.querySelector('.clipboard-alert');
const counter = document.querySelector('.clipboard-alert p span');
const copyBtn = document.querySelector('.copy-pw-btn');
const closeAlertBtn = document.querySelector('.close-alert-btn');

const copyToClipboard = output => {
  if (navigator.clipboard) {
    showAndHideCopyAlert();
    return navigator.clipboard.writeText(output);
  }
};

const showAndHideCopyAlert = () => {
  setTimeout(() => {
    clipboardAlert.classList.remove('hide');

    setTimeout(() => clipboardAlert.classList.add('hide'), 3000);
  }, 0);
};

const closeClipboardAlert = () => {
  clipboardAlert.classList.add('hide');
};

copyBtn.addEventListener('click', () => copyToClipboard(output.textContent));
closeAlertBtn.addEventListener('click', closeClipboardAlert);
