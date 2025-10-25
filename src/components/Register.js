import React, { useState } from "react";
import axios from "axios";
import "./Login.css"; // Reuse the same styles

const API_URL = "https://storixback.onrender.com";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await axios.post(`${API_URL}/api/auth/register`, { name, email, password });
      alert("✅ Account created successfully! Please log in.");
      window.location.href = "/login";
    } catch (err) {
      console.error("Registration failed:", err);
      alert("❌ Registration failed. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1 className="app-title">Storix</h1>
        <p className="tagline">Create your account</p>

        <form onSubmit={handleRegister}>
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit" className="login-btn" disabled={loading}>
            {loading ? "Creating..." : "Sign Up"}
          </button>
        </form>

        <div className="divider"></div>

        <a href="/login" className="create-account">
          Already have an account? Log In
        </a>
      </div>
    </div>
  );
}