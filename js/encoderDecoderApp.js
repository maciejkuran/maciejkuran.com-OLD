const clearBtn = document.querySelector('.encoderDecoderClearBtn');
const entityInput = document.querySelector('.entityInput');
const encodeBtn = document.querySelector('.encodeBtn');
const decodeBtn = document.querySelector('.decodeBtn');
const entityOutput = document.querySelector('.entityOutput');
const entityConversionInfo = document.querySelector('.entityConversionInfo');
const encoderDecoderCopyBtn = document.querySelector('.encoderDecoderCopyBtn');

//Encode function
const encode = (x) => {
  x = x.replaceAll('&', '&amp;');
  x = x.replaceAll('<', '&lt;');
  x = x.replaceAll('>', '&gt;');
  x = x.replaceAll('"', '&quot;');
  return x;
};

//Decode function
const decode = (x) => {
  x = x.replaceAll('&amp;', '&');
  x = x.replaceAll('&lt;', '<');
  x = x.replaceAll('&gt;', '>');
  x = x.replaceAll('&quot;', '"');
  return x;
};

//Copy to clipboard function
const copyToClipboard = (x) => {
  if (navigator.clipboard.writeText) return navigator.clipboard.writeText(x);
};

let output = '';

//Clear Entity Input & Output Value
clearBtn.addEventListener('click', () => {
  entityInput.value = '';
  entityOutput.textContent = 'Your encoded / decoded text will be displayed here';
  entityConversionInfo.textContent = '';
  encoderDecoderCopyBtn.style.border = '';
  encoderDecoderCopyBtn.style.color = '';
});

//Encoding
encodeBtn.addEventListener('click', () => {
  output = encode(entityInput.value);
  entityOutput.textContent = output;
  entityConversionInfo.textContent = 'Encoded text result';
  encoderDecoderCopyBtn.style.border = '';
  encoderDecoderCopyBtn.style.color = '';
});

//Decoding
decodeBtn.addEventListener('click', () => {
  output = decode(entityInput.value);
  entityOutput.textContent = output;

  entityConversionInfo.textContent = 'Decoded text result';
  encoderDecoderCopyBtn.style.border = '';
  encoderDecoderCopyBtn.style.color = '';
});

//Copy
encoderDecoderCopyBtn.addEventListener('click', () => {
  copyToClipboard(entityOutput.textContent);
  encoderDecoderCopyBtn.style.border = '#02c2a9 0.1rem solid';
  encoderDecoderCopyBtn.style.color = '#02c2a9';
});
