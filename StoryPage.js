import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";

const API_URL = process.env.REACT_APP_API_URL;

export default function StoryPage() {
  const { id } = useParams();
  const [story, setStory] = useState(null);
  const [isPremium, setIsPremium] = useState(false);
  const [hasAccess, setHasAccess] = useState(false);

  useEffect(() => {
    axios
      .get(`${API_URL}/api/stories/${id}`)
      .then((res) => {
        setStory(res.data);
        setIsPremium(res.data.price && res.data.price > 0);
      })
      .catch(() => console.log("Story not found"));
  }, [id]);

  const handleUnlock = () => {
    window.location.href = "/premium";
  };

  if (!story) return <p>Loading story...</p>;

  return (
    <div>
      <Navbar />
      <div style={{ padding: "30px" }}>
        <h2>{story.title}</h2>
        {isPremium && !hasAccess ? (
          <div style={{ textAlign: "center" }}>
            <p>🔒 This episode is premium content.</p>
            <button onClick={handleUnlock}>Unlock with Premium</button>
          </div>
        ) : (
          <p>{story.content || story.description}</p>
        )}
      </div>
    </div>
  );
}