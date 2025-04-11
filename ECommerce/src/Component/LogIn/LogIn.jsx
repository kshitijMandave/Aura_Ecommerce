import React from "react";
import "./LogIn.css"; // make sure this file exists and is correctly styled
import shoppingGirl from "./img/shopping-girl.jpg"; // adjust path if needed

const Login = () => {
  const goToSignUpPage = () => {
    // Replace with actual navigation logic
    console.log("Redirecting to sign-up page...");
  };

  return (
    <section className="login">
      <div className="container">
        <div className="img-holder">
          <img src={shoppingGirl} alt="Shopping girl" />
        </div>
        <div>
          <h3>Log In to the, Aura!</h3>
          <input type="tel" placeholder="+91  |  Mobile Number" />
          <p>
            by continuing, I agree to the{" "}
            <span>
              <b>Terms of Use</b>
            </span>{" "}
            &{" "}
            <span>
              <b>Privacy Policy</b>
            </span>
          </p>
        </div>
        <div>
          <button className="continue-btn">continue</button>
          <p>Or</p>
        </div>
        <div>
          <button className="sign-up-btn" onClick={goToSignUpPage}>
            Sign Up
          </button>
          <p>
            have trouble logging in?{" "}
            <span>
              <b>Get help</b>
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login;
