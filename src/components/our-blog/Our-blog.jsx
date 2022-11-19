import "./Our-blog.css";
import apple from "./apple.jpg";
import arabic from "./arabic.jpg";
import woman from "./woman.jpg";
import Arrow from "./Arrowblack.png";
const OurBlog = () => {
  return (
    <div className="our-blog">
      <h2>Our blog</h2>
      <div className="our-blog-container">
        <div className="our-blog-container-block">
          <img src={arabic} alt="" />
          <div className="our-blog-container-block-about">
            <p>19 Jan 2022</p>
            <h6>
              How one Webflow user grew his<br></br>single person consultancy
              from<br></br> $0-100K in 14 months
            </h6>
            <p>
              See how pivoting to Webflow changed one<br></br> person’s sales
              strategy and allowed him to attract
            </p>
          </div>
          <div className="our-blog-container-block-read-more">
            <a href="">Read More</a>
            <img src={Arrow} alt="" />
          </div>
        </div>
        <div className="our-blog-container-block">
          <img src={woman} alt="" />
          <div className="our-blog-container-block-about">
            <p>19 Jan 2022</p>
            <h6>
              How one Webflow user grew his<br></br>single person consultancy
              from<br></br> $0-100K in 14 months
            </h6>
            <p>
              See how pivoting to Webflow changed one<br></br> person’s sales
              strategy and allowed him to attract
            </p>
          </div>
          <div className="our-blog-container-block-read-more">
            <a href="">Read More</a>
            <img src={Arrow} alt="" />
          </div>
        </div>
        <div className="our-blog-container-block">
          <img src={apple} alt="" />
          <div className="our-blog-container-block-about">
            <p>19 Jan 2022</p>
            <h6>
              How one Webflow user grew his<br></br>single person consultancy
              from<br></br> $0-100K in 14 months
            </h6>
            <p>
              See how pivoting to Webflow changed one<br></br> person’s sales
              strategy and allowed him to attract
            </p>
          </div>
          <div className="our-blog-container-block-read-more">
            <a href="">Read More</a>
            <img src={Arrow} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default OurBlog;
