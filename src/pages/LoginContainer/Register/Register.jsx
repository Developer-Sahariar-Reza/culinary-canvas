import React, { useState, useContext } from "react";
import "./Register.css";
import { FaGoogle, FaFacebook, FaGithub } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";
import toast from "react-hot-toast";

const Register = () => {
  const [control, setControl] = useState(false);
  const [registerError, setRegisterError] = useState("");

  const { createUser, loginWithGoogle, loginWithGithub, loginWithFacebook } =
    useContext(AuthContext);

  const handleRegister = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then((result) => {
        const createdUser = result.user;
        toast.success("Registration Successful");
        form.reset();
      })
      .catch((error) => {
        const errorMessage = error.message;
        setRegisterError(errorMessage);
      });
  };

  const handleGoogleLogin = () => {
    loginWithGoogle()
      .then((result) => {
        const loggedUser = result.user;
        toast.success("Registration Successful");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleGitHub = () => {
    loginWithGithub()
      .then((result) => {
        const loggedUser = result.user;
        toast.success("Registration Successful");
      })
      .catch((error) => {
        setRegisterError(error.message);
      });
  };

  const handleFacebook = () => {
    loginWithFacebook()
      .then((result) => {
        const loggedUser = result.user;
        toast.success("Registration Successful");
      })
      .catch((error) => {
        setRegisterError(error.message);
      });
  };

  return (
    <section className="register-container">
      <h1>Registration Form</h1>

      <form onSubmit={handleRegister}>
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
          <p className="error-message">{registerError}</p>
        </div>
      </form>

      <div className="social-media-login">
        <button onClick={handleGoogleLogin}>
          <FaGoogle /> <span>Register with Google</span>
        </button>
        <button onClick={handleFacebook}>
          <FaFacebook /> <span>Register with Facebook</span>
        </button>
        <button onClick={handleGitHub}>
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
