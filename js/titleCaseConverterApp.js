'use strict';

//Selecting DOM
const input = document.querySelector('.titleCaseAppInput');
const output = document.querySelector('.titleCaseAppOutput');
const clearBtn = document.querySelector('.titleCaseAppClearBtn');
const copyBtn = document.querySelector('.titleCaseAppCopyBtn');
const convertBtn = document.querySelector('.titleCaseAppConvertBtn');

//
const specialWords = ['and', 'an', 'a', 'or', 'the', 'is', 'of', 'but', 'as', 'in'];

// functions
const convertString = (string) => {
  const correctOutput = (output) => output.at(0).toUpperCase() + output.slice(1);

  const output = string
    .toLowerCase()
    .split(' ')
    .map((word) => (specialWords.includes(word) ? word : correctOutput(word)))
    .join(' ');

  return correctOutput(output);
};

const copyToClipboard = (text) => {
  if (navigator.clipboard.writeText) return navigator.clipboard.writeText(text);
};

//event handlers
convertBtn.addEventListener('click', function () {
  output.textContent = convertString(input.value);
  output.style.display = 'flex';
  console.log(output);
});

clearBtn.addEventListener('click', function () {
  input.value = '';
  output.textContent = '';
  copyBtn.style.color = '';
  copyBtn.style.border = '';
  output.style.display = 'none';
});

copyBtn.addEventListener('click', function () {
  copyToClipboard(output.textContent);
  copyBtn.style.color = '#02c2a9';
  copyBtn.style.border = '#02c2a9 0.1rem solid';
});
