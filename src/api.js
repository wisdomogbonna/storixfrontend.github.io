import axios from "axios";

const API_URL = "https://storixback.onrender.com"; // Your live backend

export const api = axios.create({
  baseURL: API_URL,
});

// Example calls:
export const getStories = () => api.get("/api/stories");
export const getStory = (id) => api.get(`/api/stories/${id}`);
export const registerUser = (data) => api.post("/api/users/register", data);
export const loginUser = (data) => api.post("/api/users/login", data);