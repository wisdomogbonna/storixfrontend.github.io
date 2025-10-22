import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SplashScreen.css";

export default function SplashScreen() {
  const [visible, setVisible] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      navigate("/login"); // 👈 Redirect after splash
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  if (!visible) return null;

  return (
    <div className="splash-container">
      <div className="book">
        <div className="left-page"></div>
        <div className="right-page"></div>
      </div>
      <h1 className="splash-text">Storix</h1>
    </div>
  );
}