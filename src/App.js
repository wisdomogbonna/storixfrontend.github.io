import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SplashScreen from "./components/SplashScreen";
import Login from "./components/Login";
import Register from "./components/Register";
import StoryList from "./components/StoryList";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem("token"));

  return (
    <Router>
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/login" element={<Login onLogin={() => setIsAuthenticated(true)} />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/stories"
          element={
            <ProtectedRoute>
              <StoryList />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;