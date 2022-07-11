'use strict';

//DOM Elements
const palindromeInput = document.querySelector('.palindromeTextInput');
const palindromeCheckBtn = document.querySelector('.palindromeCheckBtn');
const palindromeClearBtn = document.querySelector('.palindromeClearBtn');
const palindromeOutput = document.querySelector('.palindromeOutput');

//Lottie files animations
const palindromeHappyFace = document.querySelector('.palindromeHappyFace');
const palindromeSadFace = document.querySelector('.palindromeSadFace');
const palindromeThinkingFace = document.querySelector('.palindromeThinkingFace');

//Function
const checkPalindrome = (text, output) => {
  const inputToLowerCase = String(text.toLowerCase());
  const convertToArray = inputToLowerCase.split('');
  const newString = convertToArray.reverse().join('').toLowerCase();

  if (inputToLowerCase === newString) {
    output.innerHTML = `Reversed text: ${newString}<br>Hurra! ${inputToLowerCase} is a palindrome !`;
    palindromeThinkingFace.style.display = 'none';
    palindromeSadFace.style.display = 'none';
    palindromeHappyFace.style.display = 'flex';
  } else {
    output.innerHTML = `Reversed text: ${newString}<br>Sorry! ${inputToLowerCase} is NOT a palindrome !`;
    palindromeThinkingFace.style.display = 'none';
    palindromeSadFace.style.display = 'flex';
    palindromeHappyFace.style.display = 'none';
  }
};

//Check Button
palindromeCheckBtn.addEventListener('click', function () {
  palindromeOutput.style.display = 'flex';
  checkPalindrome(palindromeInput.value, palindromeOutput);
});

//Clear Button
palindromeClearBtn.addEventListener('click', function () {
  palindromeOutput.style.display = 'none';
  palindromeInput.value = '';
  palindromeThinkingFace.style.display = 'flex';
  palindromeSadFace.style.display = 'none';
  palindromeHappyFace.style.display = 'none';
});
