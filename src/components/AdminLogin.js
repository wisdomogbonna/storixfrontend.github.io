import React, { useState } from "react";
import AdminDashboard from "./AdminDashboard";

function AdminLogin() {
  const [password, setPassword] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);

      const handleLogin = () => {
          if (password === "Storix/Wiz.2025") {
                setIsLoggedIn(true);
                    } else {
                          alert("❌ Incorrect password!");
                              }
                                };

                                  if (isLoggedIn) return <AdminDashboard />;

                                    return (
                                        <div style={styles.container}>
                                              <h2>🔐 Storix Admin Login</h2>
                                                    <input
                                                            type="password"
                                                                    placeholder="Enter admin password"
                                                                            value={password}
                                                                                    onChange={(e) => setPassword(e.target.value)}
                                                                                            style={styles.input}
                                                                                                  />
                                                                                                        <button onClick={handleLogin} style={styles.button}>
                                                                                                                Login
                                                                                                                      </button>
                                                                                                                          </div>
                                                                                                                            );
                                                                                                                            }

                                                                                                                            const styles = {
                                                                                                                              container: {
                                                                                                                                  textAlign: "center",
                                                                                                                                      padding: "50px",
                                                                                                                                          fontFamily: "Arial, sans-serif",
                                                                                                                                            },
                                                                                                                                              input: {
                                                                                                                                                  padding: "10px",
                                                                                                                                                      width: "250px",
                                                                                                                                                          marginBottom: "10px",
                                                                                                                                                              borderRadius: "5px",
                                                                                                                                                                  border: "1px solid #ccc",
                                                                                                                                                                    },
                                                                                                                                                                      button: {
                                                                                                                                                                          padding: "10px 20px",
                                                                                                                                                                              backgroundColor: "#ff0000",
                                                                                                                                                                                  color: "white",
                                                                                                                                                                                      border: "none",
                                                                                                                                                                                          borderRadius: "5px",
                                                                                                                                                                                              cursor: "pointer",
                                                                                                                                                                                                },
                                                                                                                                                                                                };

                                                                                                                                                                                                export default AdminLogin;