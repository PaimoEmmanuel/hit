class SideMenu extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
      this.innerHTML = `
      <div class="side-menu">
      <div class="close">
          <div class="close-menu" onclick="closeSideMenu()">
              <div class="line one"></div>
              <div class="line two"></div>
          </div>
      </div>
      <div class="menu-column">
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
          <div class="h-32"></div>
          <div class="account-btn">
              <a href="./register.html" class="a-no-deco">
                  <button class="sign-up btn border">Sign Up</button>
              </a>
              <div class="w-24"></div>

              <a href="./login.html" class="a-no-deco">
                  <button class="sign-in btn solid">Sign In</button>
              </a>
          </div>
          <div class="h-56"></div>

      </div>
  </div>
          `;
    }
  }
  window.customElements.define("side-menu", SideMenu);
  