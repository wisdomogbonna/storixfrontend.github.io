import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function StoryPage() {
  const { id } = useParams();
    const [story, setStory] = useState(null);

      useEffect(() => {
          axios
                .get(`${process.env.REACT_APP_API_URL}/stories/${id}`)
                      .then((res) => setStory(res.data))
                            .catch((err) => console.error("Error fetching story:", err));
                              }, [id]);

                                if (!story) return <p>Loading story...</p>;

                                  return (
                                      <div style={styles.container}>
                                            <h2>{story.title}</h2>
                                                  <h4>By {story.author}</h4>
                                                        <p>{story.description}</p>

                                                              {story.price > 0 ? (
                                                                      <p style={{ color: "red" }}>
                                                                                💎 This is a premium story. Subscribe to read full content.
                                                                                        </p>
                                                                                              ) : (
                                                                                                      <p style={{ color: "green" }}>Enjoy this free story!</p>
                                                                                                            )}
                                                                                                                </div>
                                                                                                                  );
                                                                                                                  }

                                                                                                                  const styles = {
                                                                                                                    container: {
                                                                                                                        padding: "20px",
                                                                                                                            textAlign: "center",
                                                                                                                                fontFamily: "Arial, sans-serif",
                                                                                                                                  },
                                                                                                                                  };

                                                                                                                                  export default StoryPage;