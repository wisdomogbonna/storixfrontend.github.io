import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SplashScreen from "./components/SplashScreen";
import Home from "./pages/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Premium from "./pages/Premium";
import Contact from "./pages/Contact";
import StoryPage from "./pages/StoryPage";
import OwnerDashboard from "./components/OwnerDashboard";

function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <Router>
      {showSplash ? (
        <SplashScreen onFinish={() => setShowSplash(false)} />
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/premium" element={<Premium />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/story/:id" element={<StoryPage />} />
          <Route path="/owner" element={<OwnerDashboard />} />
        </Routes>
      )}
    </Router>
  );
}

export default App;;