import axios from "axios";

const isDevelopment = false;

const baseUrl = isDevelopment
  ? "http://127.0.0.1:8000/api/v1/"
  : "https://artant.shop/api/v1/";

// const baseUrl = "https://artant.shop/api/v1/";

export const IMAGE_DELIVERY_URL =
  "https://imagedelivery.net/bsWtnSHPIyo_nZ9jFOblFw";

export const instance = axios.create({
  baseURL: baseUrl,
  withCredentials: true,
});

instance.interceptors.request.use(
  (config) => {
    const jwtToken = localStorage.getItem("jwtToken");
    if (jwtToken) {
      config.headers["Authorization"] = `Bearer ${jwtToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
