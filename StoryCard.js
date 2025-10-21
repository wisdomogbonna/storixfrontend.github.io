import React from "react";
import { Link } from "react-router-dom";

export default function StoryCard({ story }) {
  return (
    <div
      style={{
        border: "1px solid #b30000",
        borderRadius: "5px",
        padding: "15px",
        margin: "10px",
        width: "250px",
      }}
    >
      <h3>{story.title}</h3>
      <p>{story.description?.slice(0, 100)}...</p>
      <Link to={`/story/${story._id}`}>Read More</Link>
    </div>
  );
}