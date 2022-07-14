'use strict';
//Mobile nav

const hamburgerMenu = document.querySelector('.hamburgerMenu');
const navMenu = document.querySelector('nav');

hamburgerMenu.addEventListener('click', () => {
  navMenu.classList.toggle('showNav');
  hamburgerMenu.classList.toggle('active');
});

//Code colors <pre> tag

const preTags = document.querySelectorAll('pre');

const calc = preTags.forEach(function (preTag) {
  const string = preTag.innerHTML;
  const newString = string

    .replaceAll('function', '<span style="color:#B5FFFE">function</span>')
    .replaceAll('const', '<span style="color:#0AFFFB">const</span>')
    .replaceAll('let ', '<span style="color:#0AFFFB">let </span>')
    .replaceAll('class', '<span style="color:#0AFFFB">class</span>')
    .replaceAll(' = ', '<span style="color:#E53613"> = </span>')
    .replaceAll(' + ', '<span style="color:#E53613"> + </span>')
    .replaceAll(' += ', '<span style="color:#E53613"> += </span>')
    .replaceAll('${', '<span style="color:#E53613">${</span>')
    .replaceAll(' === ', '<span style="color:#E53613"> === </span>')
    .replaceAll('(', '<span style="color:#FE755A">(</span>')
    .replaceAll(')', '<span style="color:#FE755A">)</span>')
    .replaceAll('[', '<span style="color:#39F18D">[</span>')
    .replaceAll(']', '<span style="color:#39F18D">]</span>')
    .replaceAll('{', '<span style="color:#F66F0B">{</span>')
    .replaceAll('}', '<span style="color:#F66F0B">}</span>')
    .replaceAll('console.log', '<span style="color:#10E48D">console.log</span>')
    .replaceAll('=&gt;', '<span style="color:#E53613">=&gt;</span>')
    .replaceAll('if ', '<span style="color:#FC3535">if </span>')
    .replaceAll('else if ', '<span style="color:#FC3535">else if </span>')
    .replaceAll('else ', '<span style="color:#FC3535">else </span>')
    .replaceAll('return', '<span style="color:#EF593B">return</span>')
    .replaceAll('addEventListener', '<span style="color:#fe00fe">addEventListener</span>');

  preTag.innerHTML = newString;
});
