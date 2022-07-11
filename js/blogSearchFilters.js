//Blog page - search filter based on user input (tag or title)

const articleSearchInput = document.querySelector('.articlesSearchInput');
const allPosts = document.querySelectorAll('.post');

const findArticles = function () {
  const searchInputToLower = articleSearchInput.value.toLowerCase().replaceAll(' ', '');

  allPosts.forEach(function (post) {
    post.innerText.toLowerCase().replaceAll(' ', '').indexOf(searchInputToLower) > -1
      ? (post.style.display = '')
      : (post.style.display = 'none');
  });
};

articleSearchInput.addEventListener('keyup', findArticles);

//Blog page - search filter based on category tag

const categoryJavascript = document.querySelector('.categoryJavascript');

const chooseCategory = function (category) {
  allPosts.forEach(function (post) {
    post.innerText.indexOf(category) > -1 ? (post.style.display = '') : (post.style.display = 'none');
  });
};

categoryJavascript.addEventListener('click', function () {
  chooseCategory('Javascript');
});
