'use strict';

//Navbar
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

//Footer
class webFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <footer class="web-footer">
      <p>Copyright©, Maciej Kuran-Janowski</p>

      <div><a href="/privacy-policy">Privacy policy</a></div>
    </footer>
    `;
  }
}

customElements.define('web-footer', webFooter);

//Cookies popup
class cookiesPopup extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <div class="cookies-container hide">
      <h3>Cookies 🍪</h3>
      <p>My website can use cookies! Privacy policy section is <a href="/privacy-policy">available here.</a></p>
      <div>
        <button class="primary-button accept-cookies-btn">ACCEPT<i class="fa-solid fa-arrow-right-long"></i></button>
      </div>
    </div>
    `;
  }
}

customElements.define('cookies-popup', cookiesPopup);
