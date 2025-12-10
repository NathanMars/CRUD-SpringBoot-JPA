import axios from 'axios';

// Create axios instance
// Base URL points to the backend. In Docker, this might need adjustment if not proxied.
// For browser running on host accessing backend on host port 8080:
const api = axios.create({
    baseURL: 'http://localhost:8080/api', 
});

// Add a request interceptor to inject the Basic Auth header
api.interceptors.request.use(
    (config) => {
        const user = JSON.parse(localStorage.getItem('user'));
        if (user && user.authdata) {
            config.headers.Authorization = 'Basic ' + user.authdata;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default api;
