class Footer extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
    <footer>
    <div class="footer-element white-color">
        <div class="footer-box one">
            <a href="./index.html">
                <img class="footer-logo" src="./images/footer/logo_potrait.png" alt="" class="logo-icon">
            </a>
            <div class="desc accent-color">
                We are committed to providing world-class education and empowering your career journey as an
                international student.
            </div>
        </div>
        <div class="vline one"></div>
        <div class="footer-box two">
            <ul class="footer-menu-list">
                <li><a href="about_us.html">About us</a></li>
                <li><a href="">Become a partner</a></li>
                <li><a href="scholarship.html">Apply for Scholarships</a></li>
                <li><a href="events.html">News and Events</a></li>
                <li><a href="contact-us.html">Contact us</a></li>
            </ul>
        </div>
        <div class="vline two"></div>
        <div class="footer-box three">
            <div class="connect-holder">
                <div class="connect-text em1-4 bold-txt">Connect with HIT</div>
                <div class="h-24"></div>
                <div class="icon-text">
                    <img src="images/footer/locate.png" alt="" class="icon">
                    <div class="w-16"></div>
                    <div class="text">10000 North Eldridge Pkwy Houston, Texas(TX) 77065
                    </div>
                </div>
                <div class="h-16"></div>
                <div class="icon-text">
                    <img src="images/footer/call.png" alt="" class="icon">
                    <div class="w-16"></div>
                    <div class="text"> +1 (979) 661-0789</div>
                </div>
                <div class="h-16"></div>
                <div class="icon-text">
                    <img src="images/footer/mail.png" alt="" class="icon">
                    <div class="w-16"></div>
                    <div class="text">support@HIT.com</div>
                </div>
                <div class="h-24"></div>
                <div class="social-icons">
                    <img src="images/footer/facebook.png" alt="" class="icon">
                    <div class="w-24"></div>
                    <img src="images/footer/instagram.png" alt="" class="icon">
                    <div class="w-24"></div>
                    <img src="images/footer/twitter.png" alt="" class="icon">
                    <div class="w-24"></div>
                    <img src="images/footer/youtube.png" alt="" class="icon">
                    <div class="w-24"></div>
                    <img src="images/footer/linkedin.png" alt="" class="icon">
                    <div class="w-24"></div>
                </div>
            </div>
        </div>
    </div>
    <div class="policy-box white-color">
        <div class="terms">© Harness International Talent, 2022</div>
        <div class="w-24"></div>
        <div class="w-24"></div>
        <button id="back-to-top">Back to top</button>
        <!-- <div class="privacy">Privacy Policies</div> -->
    </div>
</footer>
    `;
  }
}
window.customElements.define("custom-footer", Footer);
