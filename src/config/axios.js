import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'https://jobify-backend-05by.onrender.com/api';

const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true, // ✅ Allow sending cookies if backend uses them
});

// Add a request interceptor to attach token from localStorage or cookies
axiosInstance.interceptors.request.use(
  (config) => {
    try {
      const user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;
      if (user?.token) {
        config.headers.Authorization = `Bearer ${user.token}`;
      }
    } catch (error) {
      console.error('Error parsing user token:', error);
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Add a response interceptor to handle token expiry (401 errors)
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      console.warn('Unauthorized! Logging out...');
      localStorage.removeItem('user');
      
      // Redirect only if on the client side
      if (typeof window !== 'undefined') {
        window.location.href = '/login'; 
      }
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
