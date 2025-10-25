import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SplashScreen from "./components/SplashScreen";
import Login from "./components/Login";
import Register from "./components/Register";
import StoryList from "./components/StoryList";
import ProtectedRoute from "./components/ProtectedRoute";
import OwnerDashboard from "./components/OwnerDashboard"; // ✅ ADD THIS

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem("user"));

    return (
        <Router>
              <Routes>
                      <Route path="/" element={<SplashScreen />} />
                              <Route path="/login" element={<Login onLogin={() => setIsAuthenticated(true)} />} />
                                      <Route path="/register" element={<Register />} />
                                              
                                                      {/* ✅ For normal users */}
                                                              <Route
                                                                        path="/stories"
                                                                                  element={
                                                                                              <ProtectedRoute>
                                                                                                            <StoryList />
                                                                                                                        </ProtectedRoute>
                                                                                                                                  }
                                                                                                                                          />

                                                                                                                                                  {/* ✅ For owner/admin */}
                                                                                                                                                          <Route
                                                                                                                                                                    path="/owner/dashboard"
                                                                                                                                                                              element={
                                                                                                                                                                                          <ProtectedRoute ownerOnly>
                                                                                                                                                                                                        <OwnerDashboard />
                                                                                                                                                                                                                    </ProtectedRoute>
                                                                                                                                                                                                                              }
                                                                                                                                                                                                                                      />
                                                                                                                                                                                                                                            </Routes>
                                                                                                                                                                                                                                                </Router>
                                                                                                                                                                                                                                                  );
                                                                                                                                                                                                                                                  }

                                                                                                                                                                                                                                                  export default App;