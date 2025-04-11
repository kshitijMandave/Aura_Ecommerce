import React from "react";
import "./signup.css";
import logo from "./img/Aura logo.png";
import facebook from "./img/facebook.png";
import google from "./img/google.png";

const SignUp = () => {
  return (
    <div className="signup">
      <div className="container">
        <div className="brand-logo">
          <div className="logo">
            <img src={logo} alt="Aura logo" />
          </div>
          <p>Log In to the, Aura!</p>
        </div>
        <div className="login-with">
          <p>EASILY USING</p>
          <div className="img-wrapper">
            <div>
              <img src={facebook} alt="Facebook logo" />
              <p>FACEBOOK</p>
            </div>
            <div>
              <img src={google} alt="Google logo" />
              <p>GOOGLE</p>
            </div>
          </div>
        </div>
        <div className="login-input">
          <p>OR USING EMAIL</p>
          <div>
            <input type="email" placeholder="Email Address" />
          </div>
          <div>
            <input type="password" placeholder="Password" />
          </div>
          <div>
            <button>Sign Up</button>
          </div>
          <p>
            <a href="/">FORGOT PASSWORD</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
