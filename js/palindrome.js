'use strict';

//DOM Elements
const userInput = document.querySelector('.palindrome-text-input');
const checkBtn = document.querySelector('.palindrome-check-btn');
const clearBtn = document.querySelector('.palindrome-clear-btn');
const output = document.querySelector('.palindrome-output');

//Lottie files animations
const happyFace = document.querySelector('.palindrome-face--happy');
const sadFace = document.querySelector('.palindrome-face--sad');
const thinkingFace = document.querySelector('.palindrome-face--thinking');
const allFaces = document.querySelectorAll('.face');

//Checking if palindrome

const checkIfPalindrome = () => {
  const input = userInput.value.toLowerCase();
  const revertInput = input.split('').reverse().join('');

  if (input === revertInput) {
    output.innerHTML = `Reversed text: ${revertInput}<br>Hurra! ${input} is a palindrome!`;
    showFace(happyFace, thinkingFace, sadFace);
  } else {
    output.innerHTML = `Reversed text: ${revertInput}<br>Sorry! ${input} is NOT a palindrome!`;
    showFace(sadFace, thinkingFace, happyFace);
  }
};

const showFace = (activeFace, inactive2, inactive3) => {
  activeFace.classList.remove('hide');
  inactive2.classList.add('hide');
  inactive3.classList.add('hide');
};

checkBtn.addEventListener('click', checkIfPalindrome);

const reset = () => {
  userInput.value = '';
  output.textContent = '';
  showFace(thinkingFace, sadFace, happyFace);
};

clearBtn.addEventListener('click', reset);
