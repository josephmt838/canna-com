import axios from 'axios';

export const api = axios.create({
    baseURL: import.meta.env.VITE_SERVER_URL || 'http://localhost:3000/api',
    headers: {
        'Content-Type': 'application/json',
    },
});

// Add request interceptor for authentication if needed
api.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

// Add response interceptor for error handling
api.interceptors.response.use(
    (response) => response,
    (error) => {
        // Handle common errors here
        if (error.response?.status === 401) {
            // Handle unauthorized access
            localStorage.removeItem('token');
            window.location.href = '/login';
        }

        // For 404 errors, return null data instead of throwing
        if (error.response?.status === 404) {
            return Promise.resolve({ data: null });
        }

        return Promise.reject(error);
    },
);
