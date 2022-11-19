import "./Slider.css";
import lico from "./lico.png";
const Slider = () => {
  return (
    <div className="slider">
      <div className="slider-container">
        <div className="slider-left">
          <h3>
            What our clients<br></br> say about us
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur <br></br>adipiscing elit
            sed.
          </p>
        </div>
        <div className="slider-right">
          <h5>
            "The best agency we’ve worked with so far. They <br></br>understand
            our product and are able to add new <br></br>features with a great
            focus."
          </h5>
          <div className="slider-right-slide">
            <div className="slider-right-slide-blog">
              <div>
                <img src={lico} alt="" />
              </div>
              <div className="slider-right-slide-left">
                <p>Jenny Wilson</p>
                <p>Vice President</p>
              </div>
            </div>
            <div className="slider-right-slide-right">
              <div className="slider-right-slide-right-krug">
                <p>&lt;</p>
              </div>
              <div className="slider-right-slide-right-krug">
                <p>&gt;</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Slider;
