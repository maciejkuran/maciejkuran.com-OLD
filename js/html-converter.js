'use strict';

const clearBtn = document.querySelector('.html-converter-clear-btn');
const entityInput = document.querySelector('.html-converter-input');
const encodeBtn = document.querySelector('.encode-btn');
const decodeBtn = document.querySelector('.decode-btn');
const entityOutput = document.querySelector('.html-converter-output');
const copyBtn = document.querySelector('.html-converter-copy-btn');
const copiedAlert = document.querySelector('.copied-alert-label');
const clearedAlert = document.querySelector('.cleared-alert-label');

//Encode
const encode = string => {
  string = string.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;');
  entityOutput.textContent = string;
};

//Decode
const decode = string => {
  string = string.replaceAll('&amp;', '&').replaceAll('&lt;', '<').replaceAll('&gt;', '>').replaceAll('&quot;', '"');
  entityOutput.textContent = string;
};

//Copy to clipboard
const copyToClipboard = x => {
  if (navigator.clipboard.writeText) {
    displayAlert(copiedAlert, 'copied-alert-label');
    return navigator.clipboard.writeText(x);
  }
};

//Display info alert
const displayAlert = (el, classname) => {
  setTimeout(() => el.classList.add(`${classname}--active`), 0);
  setTimeout(() => el.classList.remove(`${classname}--active`), 1200);
};

//Clear Entity Input & Output Value
const clearFields = () => {
  entityInput.value = '';
  entityOutput.textContent = 'Your encoded / decoded text will be displayed here';
  displayAlert(clearedAlert, 'cleared-alert-label');
};

//Event handlers
clearBtn.addEventListener('click', clearFields);

encodeBtn.addEventListener('click', () => encode(entityInput.value));

decodeBtn.addEventListener('click', () => decode(entityInput.value));

copyBtn.addEventListener('click', () => copyToClipboard(entityOutput.textContent));
