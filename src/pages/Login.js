import React from "react";
import "../pagescss/login.css";
import { Link } from "react-router-dom";
function Login() {
  return (
    <div className="container">
      <div className="login-container">
        <div className="heading">
          <h1>Login</h1>
        </div>
        <div className="instruction">
          <p>Please enter your e-mail and password:</p>
        </div>
        <div className="logos">
          <img
            className="img1"
            sty
            src="https://www.edigitalagency.com.au/wp-content/uploads/Facebook-logo-blue-circle-large-white-f.png"
            alt=""
          />
          <img
            src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png"
            alt=""
          />
        </div>
        <div className="input-section">
          <div className="first-input">
            <input type="text" placeholder="E-mail" />
          </div>
          <div className="second-input">
            <input type="text" placeholder="Password" />
            <a href="/" className="forgot-password">
              forgot password ?
            </a>
          </div>
          <div className="btn-login">
            <button className="btn btn-danger">Login</button>
          </div>
          <div className="new-custumer">
            <Link to="/signup">
              <span>New customer? </span>
              <span> Create an account</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
