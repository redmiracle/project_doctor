import axios from "@/lib/api/axios";

const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL || "https://example.com/api", // внешний API
    headers: {
        "Content-Type": "application/json",
    },
    withCredentials: true,
});

export default api;