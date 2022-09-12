//Tab component

//DOM elements
const tabBtns = document.querySelectorAll('.tab-btn');
const tabBtnsWrapper = document.querySelector('.tab-component-btns-wrapper');
const tabContent = document.querySelectorAll('.tab-content');

// 1st way of doing this
// tabBtnsWrapper.addEventListener('click', (e) => {
//   tabContent.forEach((tab) => tab.classList.add('hide'));
//   tabBtns.forEach((btn) => {
//     addStyles(btn, '', '');
//   });

//   if (!e.target.closest('.tab-btn')) {
//     tabContent[0].classList.remove('hide');
//     addStyles(tabBtns[0], '1px solid white', 'white');
//   }

//   if (e.target.closest('.tab-btn')) {
//     let currentBtn = e.target;
//     const item = document.querySelector(`.tab-content-${currentBtn.dataset.tab}`);
//     item.classList.remove('hide');
//     addStyles(currentBtn, '1px solid white', 'white');
//   }
// });

// const addStyles = (el, border, color) => {
//   el.style.border = border;
//   el.style.color = color;
// };

//2nd way of doing this
const addStyles = (el, border, color) => {
  el.style.border = border;
  el.style.color = color;
};

tabBtns.forEach((btn, i) => {
  addStyles(tabBtns[0], '1px solid white', 'white');

  btn.addEventListener('click', () => {
    tabBtns.forEach((btn) => addStyles(btn, '', ''));
    tabContent.forEach((tab) => tab.classList.add('hide'));

    const target = tabBtns[i];

    if (!target) return false;

    if (target) {
      tabContent[i].classList.remove('hide');
      addStyles(target, '1px solid white', 'white');
    }
  });
});
