import React, { useEffect, useState } from "react";
import { getStories } from "../api";

export default function Home() {
  const [stories, setStories] = useState([]);

    useEffect(() => {
        getStories()
              .then((res) => setStories(res.data))
                    .catch((err) => console.log(err));
                      }, []);

                        return (
                            <div style={{ padding: "20px" }}>
                                  <h1>📚 Welcome to Storix</h1>
                                        <p>Read stories, explore worlds, and unlock premium chapters.</p>
                                              <p className="notice">
                                                🌟 Premium access lasts for 30 days. Renew to keep enjoying exclusive stories!
                                                </p>

                                                      <div style={{ display: "flex", flexWrap: "wrap" }}>
                                                              {stories.map((story) => (
                                                                        <div
                                                                                    key={story._id}
                                                                                                style={{
                                                                                                              border: "1px solid #b30000",
                                                                                                                            borderRadius: "5px",
                                                                                                                                          margin: "10px",
                                                                                                                                                        padding: "15px",
                                                                                                                                                                      width: "250px",
                                                                                                                                                                                  }}
                                                                                                                                                                                            >
                                                                                                                                                                                                        <h3>{story.title}</h3>
                                                                                                                                                                                                                    <p>{story.description?.slice(0, 100)}...</p>
                                                                                                                                                                                                                                <a href={`/story/${story._id}`}>Read More</a>
                                                                                                                                                                                                                                          </div>
                                                                                                                                                                                                                                                  ))}
                                                                                                                                                                                                                                                        </div>
                                                                                                                                                                                                                                                            </div>
                                                                                                                                                                                                                                                              );
                                                                                                                                                                                                                                                              }