import React from "react";
import "./LogIn.css";

function Login() {
  const goToSignUpPage = () => {
    // You can use React Router navigation here (if using react-router-dom)
    console.log("Redirect to signup page...");
  };

  return (
    <section className="login">
      <div className="container">
        <div className="img-holder">
          <img src="./img/shopping-girl.jpg" alt="shopping-girl" />
        </div>

        <div className="form-section">
          <h3>Log In to the, Aura!</h3>

          <input type="tel" placeholder="+91 | Mobile Number" />

          <p>
            By continuing, I agree to the{" "}
            <span>
              <b>Terms of Use</b>
            </span>{" "}
            &{" "}
            <span>
              <b>Privacy Policy</b>
            </span>
          </p>

          <button className="continue-btn">Continue</button>
          <p>Or</p>

          <button className="sign-up-btn" onClick={goToSignUpPage}>
            Sign Up
          </button>
          <p>
            Having trouble logging in?{" "}
            <span>
              <b>Get help</b>
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Login;
