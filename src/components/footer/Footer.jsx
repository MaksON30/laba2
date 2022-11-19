import "./Footer.css";
import logo from "./Logo.svg";
import face from "./face.png";
import inst from "./inst.png";
import twit from "./twit.png";
import li from "./Negative.png";
const Footer = () => {
  return (
    <footer>
      <div className="footer-up">
        <div className="footer-up-container">
          <div className="footer-up-left">
            <div className="footer-up-left-container">
              <div id="logo-footer">
                <img src={logo} alt="" />
              </div>
              <p id="footer-up-left-container-text">
                We are always open to discuss your project and <br></br>improve
                your online presence.
              </p>
              <div className="footer-up-left-yellow-block">
                <div className="footer-up-left-yellow-block-left">
                  <p id="header-yellow-block">Email me at</p>
                  <p id="text-yellow-block">contact@website.com</p>
                </div>
                <div>
                  <p id="header-yellow-block">Call us</p>
                  <p id="text-yellow-block">0927 6277 28525</p>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-up-right">
            <h2>Lets Talk!</h2>
            <p>
              We are always open to discuss your project, <br></br>improve your
              online presence and help with your<br></br>UX/UI design
              challenges.
            </p>
            <div>
              <ul>
                <li>
                  <img src={inst} alt="" />
                </li>
                <li>
                  <img src={li} alt="" />
                </li>
                <li>
                  <img src={face} alt="" />
                </li>
                <li>
                  <img src={twit} alt="" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-down">
        <div className="footer-down-container">
          <div className="footer-down-logo">
            <p>Copyright 2022, Finsweet.com</p>
          </div>
          <ul>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">About us</a>
            </li>
            <li>
              <a href="">Feautres</a>
            </li>
            <li>
              <a href="">Pricing</a>
            </li>
            <li>
              <a href="">FAQ</a>
            </li>
            <li>
              <a href="">Blog</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
