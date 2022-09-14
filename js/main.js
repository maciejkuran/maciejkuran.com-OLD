'use strict';

////Navbar
const hamburgerBtn = document.querySelector('.nav-hamburger-btn');
const navContainer = document.querySelector('.nav-list');
const navCloseBtn = document.querySelector('.close-nav-btn');
const backgroundOverlay = document.querySelector('.background-overlay');

//Showing and hiding navbar mobile on hamburger btn click
const showNav = () => {
  navContainer.classList.add('nav-list--active');
  backgroundOverlay.classList.remove('hide');
};

hamburgerBtn?.addEventListener('click', showNav);

const closeNav = () => {
  navContainer?.classList.remove('nav-list--active');
  backgroundOverlay?.classList.add('hide');
};

backgroundOverlay?.addEventListener('click', closeNav);
navCloseBtn?.addEventListener('click', closeNav);

//Highlight active nav li (add active class)
const navEls = document.querySelectorAll('.nav-list ul li');

const highlightActiveLi = () => {
  let documentName = document.location.pathname.replace('.html', '');
  let navEl = document.querySelector(`.nav-list a[href="${documentName}"]`);

  if (!navEl) return;

  navEl.classList.add('nav-el-active');
};

highlightActiveLi();

//Show or hide navbar on scroll
const entireNav = document.querySelector('.primary-nav');

let previousPos;
const showNavbarOnScrollUp = () => {
  let currentPos = window.pageYOffset;

  if (currentPos < previousPos) {
    entireNav.classList.remove('primary-nav-hide');
  } else {
    entireNav.classList.add('primary-nav-hide');
  }

  if (currentPos <= 100) entireNav.classList.remove('primary-nav-hide');

  previousPos = currentPos;
};

window.addEventListener('scroll', showNavbarOnScrollUp);

const closeBtns = document.querySelectorAll('.close-popup-btn');
const popups = document.querySelectorAll('.popup');
const otherEducationBtn = document.querySelector('.othereducation-btn');
const courseworkBtn = document.querySelector('.coursework-btn');

const displayPopup = (e) => {
  let targetAttr = e.target.dataset.popupclass;
  document.querySelector(targetAttr).classList.remove('hide');
  backgroundOverlay.classList.remove('hide');
};

const hidePopup = () => {
  popups.forEach((popup) => popup.classList.add('hide'));
  backgroundOverlay.classList.add('hide');
};

otherEducationBtn?.addEventListener('click', displayPopup);
courseworkBtn?.addEventListener('click', displayPopup);
closeBtns?.forEach((btn) => btn.addEventListener('click', hidePopup));
backgroundOverlay?.addEventListener('click', hidePopup);

////Displaying cookies container if not accepted
const cookiesContainer = document.querySelector('.cookies-container');
const cookiesAcceptBtn = document.querySelector('.accept-cookies-btn');

//check in localStorage if cookies were accepted and if not display cookies container
const displayCookies = () => {
  let storageStatus = localStorage.getItem('maciejkuran.com:cookies');

  if (storageStatus === null) cookiesContainer.classList.remove('hide');

  if (storageStatus !== null) cookiesContainer.classList.add('hide');
};

document.addEventListener('DOMContentLoaded', displayCookies);

//Save cookies to localStorage on button click
const acceptCookies = () => {
  localStorage.setItem('maciejkuran.com:cookies', 'accepted');
  cookiesContainer.classList.add('hide');
};

cookiesAcceptBtn?.addEventListener('click', acceptCookies);

////Inserting all other-projects to DOM
const projectsContainer = document.querySelector('.projects-grid-container');

const Project = class {
  projects = [];

  constructor(title, description, img, alt, webLink, githubLink, csLink, tags) {
    this.title = title;
    this.description = description;
    this.img = img;
    this.alt = alt;
    this.webLink = webLink;
    this.githubLink = githubLink;
    this.csLink = csLink;
    this.tags = tags;
    this.insertProjectsToDOM();
  }

  getProjects() {
    this.projects.push(this);
    return this.projects;
  }

  insertProjectsToDOM() {
    let projects = this.getProjects();

    projects.forEach((project) => {
      const container = document.createElement('div');
      container.className = 'item project';
      container.innerHTML = `
            <img src="${project.img}" alt="${project.alt}" />
            <div class="item-content">
              <h2>${project.title}</h2>
              <p>${project.description}</p>

              <a target="_blank" href="${project.webLink}">
                <button class="primary-button">live<i class="fa-solid fa-arrow-right-long"></i></button>
              </a>

              <a target="_blank" href="${project.githubLink}">
                <button class="primary-button">GitHub<i class="fa-solid fa-arrow-right-long"></i></button>
              </a>

            </div>
    `;

      // <div class="tag-cloud tag-cloud-my-projects tag-cloud-other-projects">
      // ${this.insertTags(project.tags)}
      // </div>

      const tagsDiv = document.createElement('div');
      tagsDiv.className = 'tag-cloud tag-cloud-my-projects tag-cloud-other-projects';

      projectsContainer.append(container);
      container.children[1].append(tagsDiv);
      this.insertTags(project.tags, tagsDiv);
    });
  }

  insertTags(tags, container) {
    tags.forEach((tag) => {
      const p = document.createElement('p');
      p.classList.add('tag-primary');
      p.textContent = tag;
      container.append(p);
    });
  }
};

//prettier-ignore
const project_1 = new Project('PugHouse.pl', 'Cosy blog and community 🐾❤️ for Pug Lovers & Owners.', '/img/icons/Pug House.png', 'colorala color palette generator app', 'https://pughouse.pl/', 'https://github.com/maciejkuran/PugHouse.pl', '', ['Xd', 'Ps', 'Ai', 'HTML5', 'SCSS', 'JavaScript', 'Git', 'GitHub']);
//prettier-ignore
const project_2 = new Project('yhome', 'Property listing demo app. yhome is a fake brand that I designed and created for learning purposes.', '/img/icons/yhome.png', 'yhome project', 'https://yhome.maciejkuran.com/', 'https://github.com/maciejkuran/yhome-Property-Listing-App', '', ['Xd','Ai', 'HTML5', 'SCSS', 'JavaScript', 'Git', 'GitHub'])
