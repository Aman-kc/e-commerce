import axios from "axios";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

// Create axios instance
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor
api.interceptors.request.use(
  (config) => {
    // Add auth token if available
    const token =
      typeof window !== "undefined" ? localStorage.getItem("token") : null;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// Response interceptor
api.interceptors.response.use(
  (response) => response.data,
  (error) => {
    if (error.response) {
      // Server responded with error
      console.error("API Error:", error.response.data);
      return Promise.reject(error.response.data);
    } else if (error.request) {
      // Request made but no response
      console.error("Network Error:", error.request);
      return Promise.reject({
        message: "Network error. Please check your connection.",
      });
    } else {
      // Something else happened
      console.error("Error:", error.message);
      return Promise.reject({ message: error.message });
    }
  },
);

// Products API
export const getAllProducts = async (params = {}) => {
  try {
    return await api.get("/products", { params });
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};

export const getProductById = async (id) => {
  try {
    return await api.get(`/products/${id}`);
  } catch (error) {
    console.error("Error fetching product:", error);
    return null;
  }
};

export const getFeaturedProducts = async () => {
  try {
    return await api.get("/products/featured");
  } catch (error) {
    console.error("Error fetching featured products:", error);
    return [];
  }
};

export const getProductsByCategory = async (category) => {
  try {
    return await api.get(`/products/category/${category}`);
  } catch (error) {
    console.error("Error fetching products by category:", error);
    return [];
  }
};

export const searchProducts = async (query) => {
  try {
    return await api.get("/products/search", { params: { q: query } });
  } catch (error) {
    console.error("Error searching products:", error);
    return [];
  }
};

// Orders API
export const createOrder = async (orderData) => {
  return await api.post("/orders", orderData);
};

export const getOrders = async () => {
  return await api.get("/orders");
};

export const getOrderById = async (id) => {
  return await api.get(`/orders/${id}`);
};

// Newsletter API
export const subscribeNewsletter = async (email) => {
  return await api.post("/newsletter/subscribe", { email });
};

// Contact API
export const sendContactMessage = async (data) => {
  return await api.post("/contact", data);
};

// Auth API (for future use)
export const login = async (credentials) => {
  const response = await api.post("/auth/login", credentials);
  if (response.token) {
    localStorage.setItem("token", response.token);
  }
  return response;
};

export const register = async (userData) => {
  return await api.post("/auth/register", userData);
};

export const logout = () => {
  if (typeof window !== "undefined") {
    localStorage.removeItem("token");
  }
};

export default api;
