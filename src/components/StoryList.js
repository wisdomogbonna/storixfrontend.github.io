import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function StoryList() {
  const [stories, setStories] = useState([]);

    useEffect(() => {
        axios
              .get(`${process.env.REACT_APP_API_URL}/api/stories`)
                    .then((res) => setStories(res.data))
                          .catch((err) => console.error("Error fetching stories:", err));
                            }, []);

                              return (
                                  <div style={styles.container}>
                                        <h2>📚 Available Stories</h2>
                                              {stories.length === 0 ? (
                                                      <p>Loading stories...</p>
                                                            ) : (
                                                                    stories.map((story) => (
                                                                              <div key={story._id} style={styles.storyCard}>
                                                                                          <h3>{story.title}</h3>
                                                                                                      <p>{story.description}</p>
                                                                                                                  {story.price > 0 ? (
                                                                                                                                <p style={{ color: "red" }}>💎 Premium — ₦{story.price}</p>
                                                                                                                                            ) : (
                                                                                                                                                          <p style={{ color: "green" }}>✅ Free Story</p>
                                                                                                                                                                      )}
                                                                                                                                                                                  <Link to={`/story/${story._id}`} style={styles.readButton}>
                                                                                                                                                                                                Read Story
                                                                                                                                                                                                            </Link>
                                                                                                                                                                                                                      </div>
                                                                                                                                                                                                                              ))
                                                                                                                                                                                                                                    )}
                                                                                                                                                                                                                                        </div>
                                                                                                                                                                                                                                          );
                                                                                                                                                                                                                                          }

                                                                                                                                                                                                                                          const styles = {
                                                                                                                                                                                                                                            container: { padding: "20px", textAlign: "center" },
                                                                                                                                                                                                                                              storyCard: {
                                                                                                                                                                                                                                                  border: "1px solid #ddd",
                                                                                                                                                                                                                                                      borderRadius: "8px",
                                                                                                                                                                                                                                                          padding: "15px",
                                                                                                                                                                                                                                                              margin: "10px auto",
                                                                                                                                                                                                                                                                  width: "90%",
                                                                                                                                                                                                                                                                      maxWidth: "400px",
                                                                                                                                                                                                                                                                          textAlign: "left",
                                                                                                                                                                                                                                                                              backgroundColor: "#fafafa",
                                                                                                                                                                                                                                                                                },
                                                                                                                                                                                                                                                                                  readButton: {
                                                                                                                                                                                                                                                                                      display: "inline-block",
                                                                                                                                                                                                                                                                                          padding: "8px 15px",
                                                                                                                                                                                                                                                                                              backgroundColor: "#ff0000",
                                                                                                                                                                                                                                                                                                  color: "white",
                                                                                                                                                                                                                                                                                                      borderRadius: "5px",
                                                                                                                                                                                                                                                                                                          textDecoration: "none",
                                                                                                                                                                                                                                                                                                            },
                                                                                                                                                                                                                                                                                                            };

                                                                                                                                                                                                                                                                                                            export default StoryList;