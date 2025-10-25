import React from "react";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  // Check if a user exists in localStorage (from login)
    const user = JSON.parse(localStorage.getItem("user"));

      // If not logged in, send to /login
        if (!user) {
            return <Navigate to="/login" replace />;
              }

                // Otherwise, show the protected content (stories, etc.)
                  return children;
                  }6