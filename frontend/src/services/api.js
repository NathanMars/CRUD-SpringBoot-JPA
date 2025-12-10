import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8080/api',
});

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
