import "./Navbar.css";
import logo from "./Logo.svg";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav>
      <div className="nav-container">
        <div>
          <img src={logo} alt="" />
        </div>
        <div className="navigation">
          <ul>
            <li>
              <Link to="/"> Home</Link>
            </li>
            <li>About us</li>
            <li>Features</li>
            <li>
              <Link to="/price">Pricing</Link>
            </li>
            <li>FAQ</li>
            <li>Blog</li>
            <li>
              <div>
                <button className="button">Contact us</button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
