import React, { useState } from "react";
import "./Login.css";
import { FaGoogle, FaFacebook, FaGithub } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Login = () => {
  const [control, setControl] = useState(false);
  const [loginError, setLoginError] = useState("");
  return (
    <section className="login-container">
      <h1>Login</h1>

      <form>
        <div>
          <label>Email Address</label>
          <input
            type="email"
            name="email"
            placeholder="Your Email Address"
            required
          />
        </div>

        <div>
          <label>Password</label>
          {control ? (
            <input
              type="text"
              name="password"
              placeholder="Your Password"
              required
            />
          ) : (
            <input
              type="password"
              name="password"
              placeholder="Your Password"
              required
            />
          )}
        </div>

        <div className="login-text">
          <p onClick={() => setControl(!control)}>
            {control ? <span>Hide Password</span> : <span>Show Password</span>}
          </p>
        </div>

        <div>
          <button className="common-button">Login</button>
        </div>

        <div>
          <p className="error-message">{loginError}</p>
        </div>
      </form>

      <div className="social-media-login">
        <button>
          <FaGoogle /> <span>Login with Google</span>
        </button>
        <button>
          <FaFacebook /> <span>Login with Facebook</span>
        </button>
        <button>
          <FaGithub /> <span>Login with Github</span>
        </button>
      </div>

      <div className="log-reg-link">
        <p>
          New Here? <Link to="/register">Please Register</Link>
        </p>
      </div>
    </section>
  );
};

export default Login;