import "./Reg.css";
import Arrow from "./Arrow4.png";

const Reg = () => {
  return (
    <div className="registration">
      <div className="registration-left">
        <div className="registration-left-img">
          <div className="registration-left-img-fon">
            <h1>Building stellar websites for early startups</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br></br>
              sed do eiusmod tempor incididunt ut labore et dolore<br></br>
              magna aliqua ut enim.
            </p>
          </div>
        </div>
      </div>
      <div className="registration-right">
        <div className="registration-right-container">
          <div className="registration-right-header">
            <h5>Send inquiry</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing<br></br> elit,
              sed do eiusmod tempor incididunt ut labore.
            </p>
          </div>
          <div className="registration-right-inputs">
            <input type="text" name="" id="" placeholder="Your Name" />
            <input type="text" name="" id="" placeholder="Email" />
            <input
              type="text"
              name=""
              id=""
              placeholder="Paste your Figma design URL"
            />
          </div>
          <button className="registration-button">Send an inquiry</button>
          <div className="registration-right-container-footer">
            <a href="">Get in touch with us</a>
            <img src={Arrow} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Reg;
