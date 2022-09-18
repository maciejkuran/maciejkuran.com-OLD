'use strict';

//Selecting DOM elements
const input = document.querySelector('.titlecase-text-input');
const output = document.querySelector('.titlecase-output');
const clearBtn = document.querySelector('.titlecase-clear-btn');
const copyBtn = document.querySelector('.titlecase-copy-btn');
const convertBtn = document.querySelector('.titlecase-convert-btn');
const copiedAlert = document.querySelector('.copied-alert-label');
const clearedAlert = document.querySelector('.cleared-alert-label');

//setting restricted words
const specialWords = ['and', 'an', 'a', 'or', 'the', 'is', 'of', 'but', 'as', 'in'];

// converting input string
const convertString = () => {
  const correctOutput = string => string.at(0).toUpperCase() + string.slice(1);

  const converted = input.value
    .toLowerCase()
    .split(' ')
    .map(word => (specialWords.includes(word) ? word : correctOutput(word)))
    .join(' ');

  output.textContent = correctOutput(converted);
};

//copy to clipboard
const copyToClipboard = () => {
  if (navigator.clipboard.writeText) {
    setAlert(copiedAlert, 'copied-alert-label');
    navigator.clipboard.writeText(output.textContent);
  }
};

//clearing app
const clearApp = () => {
  setAlert(clearedAlert, 'cleared-alert-label');
  input.value = '';
  output.textContent = '';
};

//displaying alert
const setAlert = (el, classname) => {
  setTimeout(() => el.classList.add(`${classname}--active`), 0);
  setTimeout(() => el.classList.remove(`${classname}--active`), 1200);
};

//attaching handlers
convertBtn.addEventListener('click', convertString);
copyBtn.addEventListener('click', copyToClipboard);
clearBtn.addEventListener('click', clearApp);
