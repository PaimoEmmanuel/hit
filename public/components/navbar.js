class Navbar extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
      <header class="transparent">
      <a href="./index.html">
          <img src="./images/logo.png" alt="logo">
      </a>
      <div class="menu-row f-we-300">
          <a href="./about_us.html" class="menu about">
              <div>About us</div>
              <div class="hover-line"></div>
          </a>
          <a href="./scholarship.html" class="menu scholarship">
              <div>Scholarship Type</div>
              <div class="hover-line"></div>
          </a>
          <a href="./events.html" class="menu events">
              <div>News & Events</div>
              <div class="hover-line"></div>
          </a>
          <a href="./contact-us.html" class="menu home">
              <div>Contact Us</div>
              <div class="hover-line"></div>
          </a>
          <a href="welcome.html" class="btn solid space">Get Started</a>


      </div>
      <!-- <div class="search"></div> 
      <div class="account-btn">
          <a href="./register.html" class="a-no-deco">
              <button class="sign-up btn border">Sign Up</button>
          </a>
          <div class="w-24"></div>

          <a href="./login.html" class="a-no-deco">
              <button class="sign-in btn solid">Sign In</button>
          </a>
      </div> -->
      <div class="ham-menu" onclick="openSideMenu(event)">
          <div class="line one"></div>
          <div class="line two"></div>
          <div class="line three"></div>
      </div>
  </header>
        `;
  }
}
window.customElements.define("navigation-bar", Navbar);
