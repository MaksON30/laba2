import Blog from "../blog/Blog";
import Main from "../main/Main";
import OurBlog from "../our-blog/Our-blog";
import Reg from "../registration/Reg";
import Slider from "../slider/Slider";

const Home = () => {
  return (
    <>
      <Main></Main>
      <Slider></Slider>
      <Blog></Blog>
      <Reg></Reg>
      <OurBlog></OurBlog>
    </>
  );
};
export default Home;
