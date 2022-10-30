//adjust password length inputs - type number & range
const nbInput = document.querySelector('.pw-number-input');
const rangeInput = document.querySelector('.pw-range-input');

let prevValue;

const adjustNbInput = e => {
  let target = e.target;
  let value = target.value;

  rangeInput.style.backgroundSize = `${value - 5}%`;
  nbInput.value = value;
};

const adjustRangeInput = e => {
  let target = e.target;
  let value = target.value;

  rangeInput.style.backgroundSize = `${value - 5}%`;
  rangeInput.value = value;
};

rangeInput.addEventListener('input', adjustNbInput);
nbInput.addEventListener('change', adjustRangeInput);
