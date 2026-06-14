import axios from "axios";

const axiosInstance = axios.create({
  baseURL:
    import.meta.env.VITE_API_URL ||
    "http://localhost:5000/api",

  timeout: 60000,

  headers: {
    "Content-Type":
      "application/json",
  },
});

/* Request Interceptor */
axiosInstance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) =>
    Promise.reject(error)
);

/* Response Interceptor */
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (!error.response) {
      console.error(
        "Backend server unavailable"
      );
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;