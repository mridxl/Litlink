import axios from 'axios';

// Create an Axios instance
export const api = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
});
