import React, { useState } from "react";
import "./Login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const API_URL = process.env.REACT_APP_API_URL || "https://storixback.onrender.com";

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      if (isLogin) {
        // LOGIN
        const res = await axios.post(`${API_URL}/api/users/login`, {
          email,
          password,
        });
        localStorage.setItem("token", res.data.token);
        navigate("/stories");
      } else {
        // REGISTER
        await axios.post(`${API_URL}/api/users/register`, {
          name,
          email,
          password,
        });
        alert("Registration successful! Please log in.");
        setIsLogin(true);
      }
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong. Try again.");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h1 className="logo">Storix</h1>
        <p className="tagline">Read. Imagine. Discover.</p>

        {error && <div className="error-box">{error}</div>}

        <form className="auth-form" onSubmit={handleSubmit}>
          {!isLogin && (
            <input
              type="text"
              placeholder="Full name"
              className="input-field"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          )}
          <input
            type="email"
            placeholder="Email address"
            className="input-field"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="input-field"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit" className="auth-btn">
            {isLogin ? "Login" : "Register"}
          </button>
        </form>

        <div className="toggle-text">
          {isLogin ? (
            <>
              Don’t have an account?{" "}
              <span onClick={() => setIsLogin(false)}>Create one</span>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <span onClick={() => setIsLogin(true)}>Login</span>
            </>
          )}
        </div>
      </div>

      <footer className="auth-footer">
        <p>© 2025 Storix Entertainment</p>
      </footer>
    </div>
  );
}