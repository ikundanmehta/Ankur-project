import React from "react";

const FooterBody = () => {
  const styles = {
    border: "2px solid rgba(0, 0, 0, 0.05)",
    backgroundColor: "light",
    color: "#FFFFD4",
    margin: 15,
    padding: 15,
  };

  const Mystyle = {
    width: "20px",
    height: "20px",
    margin: "10px",
  };

  return (
    <footer class="footer" style={styles}>
      <div class="container">
        <div class="d-md-flex flex-wrap row">
          <div class="col-md-3 footer--col">
            <ul class="list-unstyled">
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/about#contact">Contact</a>
              </li>
            </ul>
          </div>
          <div class="col-md-3 footer--col">
            <ul class="list-unstyled">
              <li>
                <a href="/terms" style={Mystyle}>
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="/privacy" style={Mystyle}>
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/privacy" style={Mystyle}>
                  California Privacy Rights
                </a>
              </li>
              <li>
                <a href="/affiliate-disclosure" style={Mystyle}>
                  Affiliate Disclosure
                </a>
              </li>
              <li>
                <a href="/accessibility" style={Mystyle}>
                  Accessibility
                </a>
              </li>
              <li>
                <a href="/reviews" style={Mystyle}>
                  Reviews
                </a>
              </li>
            </ul>
          </div>
          <div class="col-md-3 footer--col connect--col">
            <h4 class="social--headline">Keep in Touch</h4>
            <div class="footer--social">
              <a href="https://www.instagram.com/ankur33657/" target="_blank">
                <img
                  src="//cdn.shopify.com/s/files/1/0071/9814/6645/t/66/assets/instagram.svg?v=98054375203272575171655850148"
                  alt="instagram"
                  class="social--img"
                  style={Mystyle}
                />
              </a>
              <a href="#" target="_blank">
                <img
                  src="//cdn.shopify.com/s/files/1/0071/9814/6645/t/66/assets/pinterest.svg?v=176167605362485864351655850151"
                  alt="pinterest"
                  class="social--img"
                  style={Mystyle}
                />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100024836880615"
                target="_blank"
              >
                <img
                  src="//cdn.shopify.com/s/files/1/0071/9814/6645/t/66/assets/facebook.svg?v=174829991834560357331655850140"
                  alt="facebook"
                  class="social--img"
                  style={Mystyle}
                />
              </a>
              <a href="#" target="_blank">
                <img
                  src="//cdn.shopify.com/s/files/1/0071/9814/6645/t/66/assets/twitter.svg?v=158263765203808446351655850156"
                  alt="twitter"
                  class="social--img"
                  style={Mystyle}
                />
              </a>
              <a href="#" target="_blank">
                <img
                  src="//cdn.shopify.com/s/files/1/0071/9814/6645/t/66/assets/youtube.svg?v=12858135943521761121655850158youtube.svg"
                  alt="youtube"
                  class="social--img"
                  style={Mystyle}
                />
              </a>
              <a href="#" target="_blank">
                <img
                  src="//cdn.shopify.com/s/files/1/0071/9814/6645/t/66/assets/mail.svg?v=27368785549984883681655850150"
                  alt="join newsletter"
                  class="social--img"
                  style={Mystyle}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterBody;
