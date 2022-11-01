("use strict");

const alpha = Array.from({ length: 26 }, (val = 65, i) => val + i);
const alphabetLowercase = alpha.map((x) => String.fromCharCode(x)).map((x) => x.toLowerCase());

//prettier-ignore
const sC = ['!', '?', '@', '#', '$', '%', '^', '&', '*', '>', '<', '(', ')', '{', '}', '[', ']', '/', "|", '-', '_', "=", "+", "*", "~", "`"];
//prettier-ignore
const specialCharacters = [...sC, ...sC, ...sC, ...sC, ...sC, ...sC, ...sC, ...sC, ...sC, ...sC, ...sC, ...sC, ...sC, ...sC, ...sC, ...sC];

const randomNb = (max) => {
  return Math.trunc(Math.random() * max);
};

const randomNumbs = (pw) => {
  let numbers;

  if (pw.length <= 8) {
    numbers = [randomNb(pw.length), randomNb(pw.length)];
  }

  if (pw.length > 8) {
    numbers = [randomNb(pw.length), randomNb(pw.length), randomNb(pw.length), randomNb(pw.length)];
  }

  if (pw.length > 16) {
    numbers = [
      randomNb(pw.length),
      randomNb(pw.length),
      randomNb(pw.length),
      randomNb(pw.length),
      randomNb(pw.length),
      randomNb(pw.length),
    ];
  }

  return numbers;
};

//____________________________________________
//1) Output = string: lowerCased password, simply provide the password length as argument
let output = [];
let holder = [];

const lowercase_PW = (length) => {
  let index = randomNb(alphabetLowercase.length);
  if (holder.length === length) {
    output = holder;
    holder = [];
    return output.join("");
  }

  holder.push(alphabetLowercase[index]);
  output = [];

  return lowercase_PW(length);
};

//____________________________________________
//2) Output = string: lowercased password, simply provide the password length as argument
const caseSensitive_PW = (length) => {
  const upperLetters = lowercase_PW(length).split("");
  const indexes = randomNumbs(upperLetters);

  indexes.forEach((i) => upperLetters.splice(i, 1, upperLetters[i].toUpperCase()));

  return upperLetters.join("");
};

//____________________________________________
//3) Output = string: Case-sensitive password, simply provide the password length as argument
const caseSensitive_numbs_PW = (length) => {
  const caseSensitive = caseSensitive_PW(length).split("");
  const indexes = randomNumbs(caseSensitive);

  indexes.forEach((i) => caseSensitive.splice(i, 1, String(randomNb(10))));

  return caseSensitive.join("");
};

//____________________________________________
//4) Output = string: Case-sensitive with special characters password, simply provide the password length as argument
const caseSensitive_SpecialCharacters_PW = (length) => {
  const caseSensitiveNumbs = caseSensitive_PW(length).split("");
  const indexes = randomNumbs(caseSensitiveNumbs);
  indexes.forEach((i) => caseSensitiveNumbs.splice(i, 1, specialCharacters[i]));

  return caseSensitiveNumbs.join("");
};

//____________________________________________
//5) Output = string: Case-sensitive with numbers and special characters password, simply provide the password length as argument
const caseSensitive_Numbs_SpecialCharacters_PW = (length) => {
  const caseSensitiveNumbs = caseSensitive_numbs_PW(length).split("");
  const indexes = randomNumbs(caseSensitiveNumbs);

  indexes.forEach((i) => caseSensitiveNumbs.splice(i, 1, specialCharacters[i]));

  return caseSensitiveNumbs.join("");
};

export {
  lowercase_PW,
  caseSensitive_PW,
  caseSensitive_numbs_PW,
  caseSensitive_SpecialCharacters_PW,
  caseSensitive_Numbs_SpecialCharacters_PW,
};
