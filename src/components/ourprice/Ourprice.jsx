import "./Ourprice.css";
import pgreen from "./Pointer.png";
import pgrey from "./Pointergrey.png";
const Ourprice = () => {
  return (
    <div className="our-price">
      <h2>Our Pricing Plans</h2>
      <p>
        When you’re ready to go beyond prototyping in Figma, Webflow is<br></br>
        ready to help you bring your designs to life — without coding them.
      </p>
      <div className="our-price-container">
        <div className="our-price-container-item">
          <div className="our-price-container-item-up">
            <div className="our-price-container-item-header-text">
              <h3>$299</h3>
              <a href="">Per Design</a>
            </div>
            <h6>Landing Page </h6>
            <p>
              When you’re ready to go beyond<br></br>prototyping in Figma,{" "}
            </p>

            <ul className="our-price-container-item-list">
              <li>
                <div id="li-item">
                  <img src={pgreen} alt="" />
                  <p id="li-item-black">All limited links</p>
                </div>
              </li>
              <li>
                <div id="li-item">
                  <img src={pgreen} alt="" />
                  <p id="li-item-black">Own analytics platform</p>
                </div>
              </li>
              <li>
                <div id="li-item">
                  <img src={pgreen} alt="" />
                  <p id="li-item-black">Chat support</p>
                </div>
              </li>
              <li>
                <div id="li-item">
                  <img src={pgrey} alt="" />
                  <p id="li-item-grey">Optimize hashtags</p>
                </div>
              </li>
              <li>
                <div id="li-item">
                  <img src={pgrey} alt="" />
                  <p id="li-item-grey">Unlimited users</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="our-price-container-item-but">
            <button className="our-price-container-item-button">
              Get started
            </button>
          </div>
        </div>
        <div className="our-price-container-item-even">
          <div className="our-price-container-item-up-even">
            <div className="our-price-container-item-header-text">
              <h3>$299</h3>
              <a href="">Multi Design</a>
            </div>
            <h6>Landing Page </h6>
            <p>
              When you’re ready to go beyond<br></br>prototyping in Figma,{" "}
            </p>

            <ul className="our-price-container-item-list">
              <li>
                <div id="li-item">
                  <img src={pgreen} alt="" />
                  <p id="li-item-white">All limited links</p>
                </div>
              </li>
              <li>
                <div id="li-item">
                  <img src={pgreen} alt="" />
                  <p id="li-item-white">Own analytics platform</p>
                </div>
              </li>
              <li>
                <div id="li-item">
                  <img src={pgreen} alt="" />
                  <p id="li-item-white">Chat support</p>
                </div>
              </li>
              <li>
                <div id="li-item">
                  <img src={pgreen} alt="" />
                  <p id="li-item-white">Optimize hashtags</p>
                </div>
              </li>
              <li>
                <div id="li-item">
                  <img src={pgreen} alt="" />
                  <p id="li-item-white">Unlimited users</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="our-price-container-item-but-even">
            <button className="our-price-container-item-button-even">
              Get started
            </button>
          </div>
          <div className="our-price-container-item-even-fon"></div>
        </div>
        <div className="our-price-container-item">
          <div className="our-price-container-item-up">
            <div className="our-price-container-item-header-text">
              <h3>$299 + </h3>
              <a href="">Per Design</a>
            </div>
            <h6>Complex Project</h6>
            <p>
              When you’re ready to go beyond<br></br>prototyping in Figma,{" "}
            </p>

            <ul className="our-price-container-item-list-right">
              <li>
                <div id="li-item">
                  <img src={pgreen} alt="" />
                  <p id="li-item-black">All limited links</p>
                </div>
              </li>
              <li>
                <div id="li-item">
                  <img src={pgreen} alt="" />
                  <p id="li-item-black">Own analytics platform</p>
                </div>
              </li>
              <li>
                <div id="li-item">
                  <img src={pgreen} alt="" />
                  <p id="li-item-black">Chat support</p>
                </div>
              </li>
              <li>
                <div id="li-item">
                  <img src={pgreen} alt="" />
                  <p id="li-item-black">Optimize hashtags</p>
                </div>
              </li>
              <li>
                <div id="li-item">
                  <img src={pgreen} alt="" />
                  <p id="li-item-black">Unlimited users</p>
                </div>
              </li>
              <li>
                <div id="li-item">
                  <img src={pgreen} alt="" />
                  <p id="li-item-black">Assist and Help</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="our-price-container-item-but-right">
            <button className="our-price-container-item-button">
              Get started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Ourprice;
