import React from "react";
import { Helmet } from "react-helmet";
import "../Component-Style/Login.css";

function Login() {
  return (
    <div className="login-background">
      <Helmet>
        <title>Login Sowthanya</title>
        <link rel="icon" type="image/png" href="/logo_pto.png"></link>
      </Helmet>

      <div className="regform">
        <h2 className="login-title">Login</h2>
        <form action="">
          <div className="inputgroup">
            <label htmlFor="name" className="login-label">
              User Name
            </label>
            <input type="text" id="name" className="login-input" />
          </div>

          <div className="inputgroup">
            <label htmlFor="No" className="login-label">
              GST No
            </label>
            <input type="text" id="No" className="login-input" />
          </div>

          <div className="inputgroup">
            <label htmlFor="pass" className="login-label">
              Password
            </label>
            <input type="password" id="pass" className="login-input" />
          </div>

          <div className="inputgroup">
            <label htmlFor="confirmPassword" className="login-label">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              className="login-input"
            />
          </div>

          <div className="btn">
            <button type="submit" className="login-button">
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
