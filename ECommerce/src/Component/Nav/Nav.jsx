import { Link } from "react-router-dom";
import "./Nav.css";
import AuraLogo from "./img/Aura Logo.png";

function Nav() {
  return (
    <div className="navbar">
      <div className="logo">
        <Link to="">
          <img src={AuraLogo} alt="" />
        </Link>
        <p>Elevate Your Shopping Experience</p>
      </div>
      <div className="Links">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Electronics">Electronics</Link>
          </li>
          <li>
            <Link to="/Jewellery">Jewellery</Link>
          </li>
          <li>
            <Link to="/Mens">Mens</Link>
          </li>
          <li>
            <Link to="/Womens">Womens</Link>
          </li>
        </ul>
      </div>
      <div className="btns">
        <ul>
          <li>
            <i className="fa-solid fa-heart"></i>
          </li>
          <li>
            <i className="fa-solid fa-bag-shopping"></i>
          </li>
          <li>
            <button>Login</button>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Nav;
