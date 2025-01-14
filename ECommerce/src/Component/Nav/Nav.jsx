import "./Nav.css";
import AuraLogo from "./img/Aura Logo.png";

function Nav() {
  return (
    <div className="navbar">
      <div className="logo">
        <a href="">
          <img src={AuraLogo} alt="" />
        </a>
        <p>Elevate Your Shopping Experience</p>
      </div>
      <div className="Links">
        <ul>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Electronics</a>
          </li>
          <li>
            <a href="">Jewellery</a>
          </li>
          <li>
            <a href="">Mens</a>
          </li>
          <li>
            <a href="">Womens</a>
          </li>
        </ul>
      </div>
      <div className="btns">
        <ul>
          <li>
            <i class="fa-solid fa-heart"></i>
          </li>
          <li>
            <i class="fa-solid fa-bag-shopping"></i>
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
