// src/components/ProtectedRoute.js
import React from "react";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children, ownerOnly = false }) {
  const storedUser = localStorage.getItem("user");
    const user = storedUser ? JSON.parse(storedUser) : null;

      if (!user) {
          // If not logged in, go to login
              return <Navigate to="/login" replace />;
                }

                  if (ownerOnly && user.role !== "owner") {
                      // If not an owner but trying to access owner dashboard
                          return <Navigate to="/stories" replace />;
                            }

                              // Otherwise, show the requested page
                                return children;
                                }