import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const navStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#b30000",
    color: "white",
    padding: "15px 25px",
  };

  const logoSection = {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  };

  return (
    <nav style={navStyle}>
      <div style={logoSection}>
        <img
          src="/storix-logo-pro.svg"
          alt="Storix Logo"
          style={{ height: "40px", width: "40px" }}
        />
        <h2 style={{ margin: 0, fontSize: "1.5rem" }}>Storix</h2>
      </div>

      <div>
        <Link style={{ color: "white", margin: "0 10px" }} to="/">Home</Link>
        <Link style={{ color: "white", margin: "0 10px" }} to="/premium">Premium</Link>
        <Link style={{ color: "white", margin: "0 10px" }} to="/contact">Contact</Link>
        <Link style={{ color: "white", margin: "0 10px" }} to="/login">Login</Link>
      </div>
    </nav>
  );
}