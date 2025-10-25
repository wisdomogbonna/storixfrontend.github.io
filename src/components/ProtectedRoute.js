// src/components/ProtectedRoute.js
import React from "react";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const user = JSON.parse(localStorage.getItem("user"));

    // If no user is found, redirect to login
      if (!user) {
          return <Navigate to="/login" replace />;
            }

              // Otherwise, render the child components
                return children;
                }