'use strict';

//HEADER COMPONENT

class myHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = ` <header class="header-elements">
        <a href="/"
          ><img src="/img/Maciej Kuran-Janowski logo.png" alt="Maciej Kuran-Janowski logo"
        /></a>
        <div>
          <nav>
            <a href="/about">About 👀</a>
            <a href="/my-projects">My Projects</a>
            <a href="/blog">Blog</a>
            <a href="/contact">Contact</a>
            <a href="https://github.com/maciejkuran" target="_blank"
              ><i class="fa-brands fa-github"></i
            ></a>
          </nav>
        </div>
        <button class="hamburgerMenu">
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
        </button>
      </header>`;
  }
}

customElements.define('my-header', myHeader);

//FOOTER COMPONENT
class myFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<footer>
        <div>
          <a href="/about">About 👀</a>
          <a href="/my-projects">My Projects</a>
          <a href="/blog">Blog</a>
          <a href="/contact">Contact</a>
          <a href="/privacy-policy">Privacy Policy</a>
          <a href="https://github.com/maciejkuran" target="_blank"
            ><i class="fa-brands fa-github"></i
          ></a>
        </div>
        <p>Copyright ©, maciejkuran.com. All Rights Reserved</p>
      </footer>`;
  }
}

customElements.define('my-footer', myFooter);
