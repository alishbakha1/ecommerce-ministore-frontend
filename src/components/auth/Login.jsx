import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

const user = JSON.parse(localStorage.getItem("user"))

if(user){
  return <navigate to ="/shop"/>
}


  const loginUser = async (e) => {
    e.preventDefault();

    const user = {
      email,
      password,
    };

    try {
      // ✅ register ki jagah login API
      const response = await axios.post(
        "http://localhost:4000/login",
        user
      );

      localStorage.setItem(
        "user",
        JSON.stringify(response.data.user)
      );

      alert("Login successfully");

      navigate("/shop");

      setEmail("");
      setPassword("");

    } catch (error) {
      alert(error.response?.data?.message || "Invalid Email Or Password");
      console.log(error);
    }
  };

  return (
    <>
      <div className="login-container">
        {/* LEFT SIDE */}
        <div className="login-left">
          <img
            src="https://images.unsplash.com/photo-1705675451868-014a161e591b?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="brand"
          />

          <div className="overlay">
            <div className="brand-box">
              <h1>Mini Store</h1>

              <p>
                Discover premium fashion, gadgets and trending
                products with modern shopping experience.
              </p>

              <div className="social-icons">
                <a href="#">
                  <i className="fab fa-facebook-f"></i>
                </a>

                <a href="#">
                  <i className="fab fa-instagram"></i>
                </a>

                <a href="#">
                  <i className="fab fa-twitter"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="login-right">
          <div className="login-card">

            <div className="login-header">
              <h2>Welcome Back</h2>
              <p>Login to continue shopping</p>
            </div>

            <form onSubmit={loginUser}>

              {/* EMAIL */}
              <div className="form-group">
                <label>Username or Email</label>

                <div className="input-box">
                  <i className="fa fa-user"></i>

                  <input
                    type="email"
                    placeholder="Enter username or email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>

              {/* PASSWORD */}
              <div className="form-group">
                <label>Password</label>

                <div className="input-box">
                  <i className="fa fa-lock"></i>

                  <input
                    type="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
              </div>

              {/* FORGOT */}
              <div className="forgot">
                <a href="#">Forgot Password?</a>
              </div>

              <button type="submit" className="login-btn">
                Login Account
              </button>

              <Link
                className="register-btn text-center text-decoration-none"
                to="/register"
              >
                Create Account
              </Link>

            </form>

            <div className="divider">
              <span>OR CONTINUE WITH</span>
            </div>

            <div className="social-login">
              <a href="#">
                <i className="fab fa-facebook-f"></i>
              </a>

              <a href="#">
                <i className="fab fa-google"></i>
              </a>

              <a href="#">
                <i className="fab fa-github"></i>
              </a>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Login;