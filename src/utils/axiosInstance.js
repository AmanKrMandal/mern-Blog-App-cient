import axios from "axios";

const axiosInterceptors = axios.create({
  baseURL: "https://mern-blog-app-server.onrender.com",
});

const setupInterceptors = (store) => {
  axiosInterceptors.interceptors.request.use(
    (config) => {
      const user = store.getState().users;
      const { token } = user?.userAuth || {};

      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
};

export { axiosInterceptors, setupInterceptors };
