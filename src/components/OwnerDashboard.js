import React, { useState, useEffect } from "react";
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

export default function OwnerDashboard() {
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [visits, setVisits] = useState(0);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  const handleLogin = () => {
    if (password === "Storix/Wiz.2025") {
      setLoggedIn(true);
      fetchVisits();
    } else {
      alert("Invalid owner password!");
    }
  };

  const fetchVisits = async () => {
    try {
      const res = await axios.get(`${API_URL}/api/visits`);
      setVisits(res.data.count || 0);
    } catch (err) {
      console.log("Error fetching visits");
    }
  };

  const handlePost = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${API_URL}/api/stories`, { title, description, price });
      alert("Story posted!");
      setTitle("");
      setDescription("");
      setPrice("");
    } catch (err) {
      alert("Failed to post story.");
    }
  };

  if (!loggedIn)
    return (
      <div style={{ textAlign: "center", padding: "60px" }}>
        <h2>Owner Login</h2>
        <input
          type="password"
          placeholder="Enter owner password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button onClick={handleLogin}>Login</button>
      </div>
    );

  return (
    <div style={{ textAlign: "center", padding: "30px" }}>
      <h2>📊 Owner Dashboard</h2>
      <p>Total Visits: {visits}</p>

      <h3>✍️ Post a New Story</h3>
      <form onSubmit={handlePost}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <br />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        ></textarea>
        <br />
        <input
          type="number"
          placeholder="Price (Naira, optional)"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <br />
        <button type="submit">Post Story</button>
      </form>
    </div>
  );
}