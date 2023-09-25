import React, { useState } from "react";
import "./Register.css";
import { FaGoogle, FaFacebook, FaGithub } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Register = () => {
  const [control, setControl] = useState(false);
  const [loginError, setLoginError] = useState("");
  return (
    <section className="register-container">
      <h1>Registration Form</h1>

      <form>
        <div>
          <label>Name</label>
          <input type="text" name="name" placeholder="Your Name" required />
        </div>

        <div>
          <label>Photo URL</label>
          <input
            type="text"
            name="photo"
            placeholder="Your photo url"
            required
          />
        </div>

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
          <button className="common-button">Register</button>
        </div>

        <div>
          <p className="error-message">{loginError}</p>
        </div>
      </form>

      <div className="social-media-login">
        <button>
          <FaGoogle /> <span>Register with Google</span>
        </button>
        <button>
          <FaFacebook /> <span>Register with Facebook</span>
        </button>
        <button>
          <FaGithub /> <span>Register with Github</span>
        </button>
      </div>

      <div className="log-reg-link">
        <p>
          Already Have an Account? <Link to="/login">Please Login</Link>
        </p>
      </div>
    </section>
  );
};

export default Register;
