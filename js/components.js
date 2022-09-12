'use strict';

class webNavbar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <nav class="primary-nav">
      <div class="nav-items">
        <a href="/"><img src="./img/Logo Maciej Kuran-Janowski.png" alt="logo Maciej Kuran-Janowski" /></a>

        <div class="nav-list">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/my-projects">Projects</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a target="_blank" href="https://github.com/maciejkuran">GitHub</a></li>
            <li><a href="mailto:maciejkuran@gmail.com">Email_me</a></li>
          </ul>
          <button class="close-nav-btn"><i class="fa-solid fa-xmark"></i></button>
        </div>

        <button class="nav-hamburger-btn">
          <i class="fa-solid fa-ellipsis"></i>
        </button>
      </div>
    </nav>
        `;
  }
}

customElements.define('web-navbar', webNavbar);
