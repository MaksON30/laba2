import "./Blog.css";
import plus from "./+.png";
const Blog = () => {
  return (
    <>
      <div className="blog">
        <div className="blog-container">
          <div className="blog-left">
            <h3>
              Frequently<br></br> asked questions
            </h3>
            <p>Contact us for more info</p>
          </div>
          <div className="blog-right">
            <div className="blog-right-number">
              <div className="blog-right-number-left">
                <h6 id="number">01</h6>
                <h6 id="blog-text-1">How much time does it take?</h6>
              </div>
              <img src={plus} alt="" />
            </div>
            <div className="blog-line"></div>
            <div className="blog-right-number">
              <div className="blog-right-number-left">
                <h6 id="number">02</h6>
                <h6 id="blog-text">What is your class naming convention?</h6>
              </div>
              <img src={plus} alt="" />
            </div>
            <div className="blog-line"></div>
            <div className="blog-right-number">
              <div className="blog-right-number-left">
                <h6 id="number">03</h6>
                <h6 id="blog-text">How do you communicate?</h6>
              </div>
              <img src={plus} alt="" />
            </div>
            <div className="blog-line"></div>
            <div className="blog-right-number">
              <div className="blog-right-number-left">
                <h6 id="number">04</h6>
                <h6 id="blog-text">
                  I have a bigger project. Can you handle it?
                </h6>
              </div>
              <img src={plus} alt="" />
            </div>
            <div className="blog-line"></div>
            <div className="blog-right-number">
              <div className="blog-right-number-left">
                <h6 id="number">05</h6>
                <h6 id="blog-text">What is your class naming convention?</h6>
              </div>
              <img src={plus} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Blog;
