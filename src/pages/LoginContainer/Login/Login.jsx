import React, { useContext, useState } from "react";
import "./Login.css";
import { FaGoogle, FaFacebook, FaGithub } from "react-icons/fa6";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";
import toast from "react-hot-toast";

const Login = () => {
  const [control, setControl] = useState(false);
  const [loginError, setLoginError] = useState("");

  const { loginUser, loginWithGoogle, loginWithGithub, loginWithFacebook } =
    useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    loginUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        toast.success("Login Successful");
        navigate(from, { replace: true });
        form.reset();
      })
      .catch((error) => {
        const errorMessage = error.message;
        setLoginError(errorMessage);
      });
  };

  const handleGoogleLogin = () => {
    loginWithGoogle()
      .then((result) => {
        const loggedUser = result.user;
        toast.success("Login Successful");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setLoginError(error.message);
      });
  };

  const handleGitHub = () => {
    loginWithGithub()
      .then((result) => {
        const loggedUser = result.user;
        toast.success("Login Successful");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setLoginError(error.message);
      });
  };

  const handleFacebook = () => {
    loginWithFacebook()
      .then((result) => {
        const loggedUser = result.user;
        toast.success("Login Successful");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setLoginError(error.message);
      });
  };

  return (
    <section className="login-container">
      <h1>Login</h1>

      <form onSubmit={handleLogin}>
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
        <button onClick={handleGoogleLogin}>
          <FaGoogle /> <span>Login with Google</span>
        </button>
        <button onClick={handleFacebook}>
          <FaFacebook /> <span>Login with Facebook</span>
        </button>
        <button onClick={handleGitHub}>
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
