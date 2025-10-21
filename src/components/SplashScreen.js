import React, { useEffect, useState } from "react";
import "./SplashScreen.css";

export default function SplashScreen({ onFinish }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Hide splash after 3 seconds
    const timer = setTimeout(() => {
      setVisible(false);
      onFinish();
    }, 3000);
    return () => clearTimeout(timer);
  }, [onFinish]);

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