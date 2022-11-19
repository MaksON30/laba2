import "./Main.css";
import ilustration from "./illustration.svg";
import arrow from "./Arrow.svg";
import p1 from "./1.png";
import p2 from "./2.png";
import p3 from "./3.png";
import p4 from "./4.png";
import arrow1 from "./Arrow2.png";
import arrow2 from "./Arrow3.png";
import icon1 from "./icon1.png";
import icon2 from "./icon2.png";
import icon3 from "./icon3.png";
import icon4 from "./icon4.png";
import icon5 from "./icon5.png";
import icon6 from "./icon6.png";
import arrow3 from "./Arrow5.png";

const Main = () => {
  return (
    <>
      <div className="main-bg">
        <div className="main-bg-container">
          <div className="main-left">
            <h1>
              Building stellar <br></br>websites for early <br></br>startups
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              <br></br> eiusmod tempor incididunt.
            </p>

            <div className="left-buttons">
              <button className="button-main-bg">View our Work</button>
              <div className="view-price">
                <a href="#">View Pricing</a>
                <img src={arrow} alt="arrow" />
              </div>
            </div>
          </div>
          <div className="main-right">
            <img src={ilustration} alt="" />
          </div>
        </div>
      </div>
      <div className="how-we-work">
        <div className="how-we-work-container">
          <div className="how-we-work-left">
            <h2>How we work</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur <br></br> adipiscing elit,
              sed do eiusmod tempor.
            </p>
            <div className="how-we-work-left-buttons">
              <a href="">Get in touch with us</a>
              <img src={arrow1} alt="" />
            </div>
          </div>
          <div className="how-we-work-right">
            <div>
              <img src={p1} alt="" />
              <h5>Strategy</h5>
              <p>
                Euismod faucibus turpis eu gravida<br></br> mi. Pellentesque et
                velit aliquam .
              </p>
            </div>
            <div>
              <img src={p2} alt="" />
              <h5>Wireframing</h5>
              <p>
                Euismod faucibus turpis eu gravida<br></br> mi. Pellentesque et
                velit aliquam .
              </p>
            </div>
            <div>
              <img src={p3} alt="" />
              <h5>Design</h5>
              <p>
                Euismod faucibus turpis eu gravida<br></br> mi. Pellentesque et
                velit aliquam .
              </p>
            </div>
            <div>
              <img src={p4} alt="" />
              <h5>Development</h5>
              <p>
                Euismod faucibus turpis eu gravida <br></br>mi. Pellentesque et
                velit aliquam .
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="our-projects">
        <div className="our-projects-header">
          <h2>View our projects</h2>
          <div className="our-project-header-link">
            <a href="">View More</a>
            <img src={arrow2} alt="arrow2" />
          </div>
        </div>
        <div className="our-projects-left">
          <div className="our-projects-left-side">
            <div className="our-projects-left-side-fon">
              <h6>
                Workhub office Webflow <br></br>Webflow Design
              </h6>
              <p>
                Euismod faucibus turpis eu gravida<br></br> mi. Pellentesque et
                velit aliquam
              </p>
              <div className="our-projects-left-side-fon-block">
                <a href="">View project</a>
                <img src={arrow3} alt="" />
              </div>
            </div>
          </div>
          <div className="our-project-right">
            <div className="card3">
              <div className="card3-fon">
                <h6>
                  Unisaas Website<br></br>
                  Design
                </h6>
                <div className="card3-fon-block">
                  <a href="">View portfolio</a>
                  <img src={arrow3} alt="" />
                </div>
              </div>
            </div>
            <div className="card2">
              <div className="card2-fon"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="fetures">
        <p>Features</p>
        <h2>Design that solves</h2>
        <h2>problems, one product at</h2>
        <h2>a time</h2>

        <div className="feautre-blocks">
          <div className="feature-blocks-block">
            <img src={icon1} alt="icon1" />
            <h6>Uses Client First</h6>
            <p>
              Euismod faucibus turpis eu gravida mi.<br></br> Pellentesque et
              velit aliquam sed faucib <br></br>turpis eu gravida mi.
              Pellentesque et<br></br> velit aliquam sed mi.
            </p>
          </div>
          <div className="feature-blocks-block">
            <img src={icon2} alt="icon1" />
            <h6>Two Free Revision Round</h6>
            <p>
              Euismod faucibus turpis eu gravida mi.<br></br> Pellentesque et
              velit aliquam sed faucib <br></br>turpis eu gravida mi.
              Pellentesque et<br></br> velit aliquam sed mi.
            </p>
          </div>
          <div className="feature-blocks-block">
            <img src={icon3} alt="icon1" />
            <h6>Template Customization</h6>
            <p>
              Euismod faucibus turpis eu gravida mi.<br></br> Pellentesque et
              velit aliquam sed faucib <br></br>turpis eu gravida mi.
              Pellentesque et<br></br> velit aliquam sed mi.
            </p>
          </div>
          <div className="feature-blocks-block">
            <img src={icon4} alt="icon1" />
            <h6>24/7 Support</h6>
            <p>
              Euismod faucibus turpis eu gravida mi.<br></br> Pellentesque et
              velit aliquam sed faucib <br></br>turpis eu gravida mi.
              Pellentesque et<br></br> velit aliquam sed mi.
            </p>
          </div>
          <div className="feature-blocks-block">
            <img src={icon5} alt="icon1" />
            <h6>Quick Delivery</h6>
            <p>
              Euismod faucibus turpis eu gravida mi.<br></br> Pellentesque et
              velit aliquam sed faucib <br></br>turpis eu gravida mi.
              Pellentesque et<br></br> velit aliquam sed mi.
            </p>
          </div>
          <div className="feature-blocks-block">
            <img src={icon6} alt="icon1" />
            <h6>Hands-on approach</h6>
            <p>
              Euismod faucibus turpis eu gravida mi.<br></br> Pellentesque et
              velit aliquam sed faucib <br></br>turpis eu gravida mi.
              Pellentesque et<br></br> velit aliquam sed mi.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Main;
