'use strict';

////Displaying dynamically all blog posts on 'blog' page;
const postsContainer = document.querySelector('.posts-grid-container');

const Post = class {
  posts = [];
  constructor(url, img, imgAlt, title, tags) {
    this.url = url;
    this.img = img;
    this.imgAlt = imgAlt;
    this.title = title;
    this.tags = tags;

    this.insertPostsToDOM();
  }

  getPosts() {
    this.posts.push(this);
    return this.posts;
  }

  insertPostsToDOM() {
    let allPosts = this.getPosts();

    allPosts.forEach(post => {
      const a = document.createElement('a');
      a.setAttribute('href', post.url);
      a.classList.add('post');
      a.innerHTML = `
      <div class="item post-internal-wrapper">
            <img src="${post.img}" alt="${post.imgAlt}" />
            <div class="item-content post-data">
              <h3>${post.title}</h3>
              <div class="tag-cloud">
               
              </div>
            </div>
          </div>
      `;

      postsContainer?.prepend(a);
      this.insertTags(post.tags, a.children[0].children[1].children[1]);
    });
  }

  insertTags(tags, el) {
    tags.forEach(tag => {
      const p = document.createElement('p');
      p.classList.add('tag-primary');
      p.textContent = tag;
      el.append(p);
    });
  }
};

const post_1 = new Post(
  './function-sums-indefinite-number-of-numbers',
  '/img/icons/javascript.png',
  'function sums indefinite number of numbers as arguments javascript',
  'The function that sums an indefinite number of numbers as arguments.',
  ['JavaScript']
);

const post_2 = new Post(
  './the-function-that-returns-corrected-first-name',
  '/img/icons/javascript.png',
  'function returns corrected name in case a user capitalizes some letters js',
  'The function returns the corrected name in case a user capitalizes some letters.',
  ['JavaScript']
);

const post_3 = new Post(
  './removing-capital-letters-spaces-login-email',
  '/img/icons/javascript.png',
  'removing capital letters/spaces from login email address javascript',
  'Removing capital letters/spaces from login email address.',
  ['JavaScript']
);

const post_4 = new Post(
  './text-checker-function',
  '/img/icons/javascript.png',
  'Text checker checking if text contains forbidden words/characters js',
  'Text checker - checking if text contains forbidden words/characters.',
  ['JavaScript']
);

const post_5 = new Post(
  './function-converts-the-first-value-of-each-word-uppercase',
  '/img/icons/javascript.png',
  'function converts the first value of word to uppercase js',
  'Converting the first value of each word to uppercase.',
  ['JavaScript']
);

const post_6 = new Post(
  './function-masks-credit-card-digits',
  '/img/icons/javascript.png',
  'function masks credit card digits javascript',
  'Masking credit card digits, showing only the last 4.',
  ['JavaScript']
);

const post_7 = new Post(
  './the-ticket-number-generator-function',
  '/img/icons/javascript.png',
  'ticket number generator function javascript',
  'The ticket number generator.',
  ['JavaScript']
);

const post_8 = new Post(
  './converting-unordered-string-into-clean-formatted-output',
  '/img/icons/javascript.png',
  'Converting unordered string into clean formatted output javascript',
  'Converting an unordered, long string into a clean formatted output.',
  ['JavaScript']
);

const post_9 = new Post(
  './bank-deposit-for-12-months',
  '/img/icons/javascript.png',
  'higher-order function callbacks javascript',
  'Bank deposit for 12 months. Higher-order function and callbacks exercise.',
  ['JavaScript']
);

const post_10 = new Post(
  './part-1-tax-calculator-javascript',
  '/img/icons/javascript.png',
  'Tax calculator javascript',
  'Part 1: Tax calculator - the function that returns another function.',
  ['JavaScript']
);

const post_11 = new Post(
  './part-2-tax-calculator-javascript',
  '/img/icons/javascript.png',
  'Tax calculator javascript',
  'Part 2: Tax calculator - the partial application and bind() method.',
  ['JavaScript']
);

const post_12 = new Post(
  './function-calculates-percentage-of-nationality',
  '/img/icons/javascript.png',
  'function calculates a percentage of nationality javascript',
  'Calculating a percentage of nationality.',
  ['JavaScript']
);

const post_13 = new Post(
  './palindrome-checker-functions-javascript',
  '/img/icons/javascript.png',
  'Palindrome checker javascript',
  'Palindrome checker.',
  ['JavaScript']
);

const post_14 = new Post(
  './function-returns-highest-number-array-javascript',
  '/img/icons/javascript.png',
  'function returns the highest number from array javascript',
  'Returning the highest number from an array.',
  ['JavaScript']
);

const post_15 = new Post(
  './function-finds-users-over-18-years',
  '/img/icons/javascript.png',
  'function finds users who are over 18 years old javascript',
  'Finding users over 18 years old.',
  ['JavaScript']
);

const post_16 = new Post(
  './function-computes-overal-family-income',
  '/img/icons/javascript.png',
  'function computes overall family income javascript',
  'Computing overal family income.',
  ['JavaScript']
);

const post_17 = new Post(
  './title-case-converter-function',
  '/img/icons/javascript.png',
  'title case converter javascript',
  'Title Case Converter - excluding specific words from being capitalized.',
  ['JavaScript']
);

const post_18 = new Post(
  './creating-dynamically-array-that-contains-100-random-numbers',
  '/img/icons/javascript.png',
  'Creating dynamically array contains 100 random numbers between 1 10 javascript',
  'Creating dynamically an array that contains 100 random numbers between 1-10.',
  ['JavaScript']
);

const post_19 = new Post(
  './function-checks-if-number-is-in-array-of-arrays',
  '/img/icons/javascript.png',
  'function checks if a number is in an array of arrays javascript',
  'The function checks if a number is in an array of arrays.',
  ['JavaScript']
);

const post_20 = new Post(
  './implementing-login-functionality-and-logout-timer',
  '/img/icons/javascript.png',
  'log-in functionality and an automatic log-out timer javascript',
  'Implementing basic log-in functionality and an automatic log-out timer.',
  ['JavaScript']
);

const post_21 = new Post(
  './function-checks-if-number-is-even',
  '/img/icons/javascript.png',
  'function checks if a number is even javascript',
  'The function checks if a number is even.',
  ['JavaScript']
);

const post_22 = new Post(
  './function-computes-number-of-days-between-dates',
  '/img/icons/javascript.png',
  'function computes the number of days between dates javascript',
  'The function computes the number of days between dates.',
  ['JavaScript']
);

const post_23 = new Post(
  './creating-slider-component-javascript',
  '/img/icons/javascript.png',
  'slider component javascript',
  'Creating a slider component.',
  ['JavaScript']
);

const post_24 = new Post(
  './implementing-tab-component-js',
  '/img/icons/javascript.png',
  'tab component javascript',
  'Implementing a tab component.',
  ['JavaScript']
);

//Blog page - search filter based on user input (tag or title)

const searchInput = document.querySelector('.posts-search-input');
const allPosts = document.querySelectorAll('.post');

const findArticles = () => {
  const searchInputToLower = searchInput.value.toLowerCase().replaceAll(' ', '');

  allPosts.forEach(post => {
    post.innerText.toLowerCase().replaceAll(' ', '').indexOf(searchInputToLower) > -1
      ? (post.style.display = '')
      : (post.style.display = 'none');
  });
};

searchInput?.addEventListener('keyup', findArticles);

//Blog page - search filter based on category tag
const categoryTags = document.querySelectorAll('.category-btn');

const filterBasedOnTag = e => {
  let tagValue = e.target.textContent;
  allPosts.forEach(post =>
    post.innerText.indexOf(tagValue) > -1 ? (post.style.display = '') : (post.style.display = 'none')
  );
};

categoryTags.forEach(tag => tag.addEventListener('click', filterBasedOnTag));

//Removing blank lines in <pre> HTML
const code = document.querySelectorAll('pre code');

const removeBlankLines = () => {
  [...code].forEach(el => {
    el.textContent = el.textContent.replace(/^\s+/gm, '');
  });
};

removeBlankLines();

//******FUNCTIONALITY REPLACED BY prism.js library*******
// ////Code colors <pre> tag
// const preTags = document.querySelectorAll('pre code');

// const calc = preTags.forEach(function (preTag) {
//   const string = preTag.innerHTML;
//   const newString = string

//     .replaceAll('function', '<span style="color:#B5FFFE">function</span>')
//     .replaceAll('const', '<span style="color:#0AFFFB">const</span>')
//     .replaceAll('let ', '<span style="color:#0AFFFB">let </span>')
//     .replaceAll('class=', '<span style="color:#0AFFFB">class=</span>')
//     .replaceAll(' = ', '<span style="color:#E53613"> = </span>')
//     .replaceAll(' + ', '<span style="color:#E53613"> + </span>')
//     .replaceAll(' += ', '<span style="color:#E53613"> += </span>')
//     .replaceAll('${', '<span style="color:#E53613">${</span>')
//     .replaceAll(' === ', '<span style="color:#E53613"> === </span>')
//     .replaceAll('(', '<span style="color:#FE755A">(</span>')
//     .replaceAll(')', '<span style="color:#FE755A">)</span>')
//     .replaceAll('[', '<span style="color:#39F18D">[</span>')
//     .replaceAll(']', '<span style="color:#39F18D">]</span>')
//     .replaceAll('{', '<span style="color:#F66F0B">{</span>')
//     .replaceAll('}', '<span style="color:#F66F0B">}</span>')
//     .replaceAll('console.log', '<span style="color:#10E48D">console.log</span>')
//     .replaceAll('=&gt;', '<span style="color:#E53613">=&gt;</span>')
//     .replaceAll('if ', '<span style="color:#FC3535">if </span>')
//     .replaceAll('else if ', '<span style="color:#FC3535">else if </span>')
//     .replaceAll('else ', '<span style="color:#FC3535">else </span>')
//     .replaceAll('return', '<span style="color:#EF593B">return</span>')
//     .replaceAll('addEventListener', '<span style="color:#E8704B">addEventListener</span>')
//     .replaceAll('div', '<span style="color:#E8704B">div</span>');

//   preTag.innerHTML = newString;
// });

// //Copy to clipboard code
// const copiedAlert = document.querySelector('.copied-alert');
// const copyCodeBtns = document.querySelectorAll('.copy-code-btn');

// const copyToClipboard = e => {
//   let contentToCopy = e.target.previousElementSibling.textContent;

//   if (navigator.clipboard) navigator.clipboard.writeText(contentToCopy);

//   setTimeout(() => {
//     copiedAlert.classList.add('copied-alert--active');
//   }, 0);

//   setTimeout(() => {
//     copiedAlert.classList.remove('copied-alert--active');
//   }, 1200);
// };

// copyCodeBtns.forEach(btn => btn.addEventListener('click', copyToClipboard));
