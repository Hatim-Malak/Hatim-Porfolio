import axios from "axios"

export const axiosInstance = axios.create({
    baseURL : import.meta.env.MODE ==="development"? 'http://localhost:8000':"https://portfolio-ai-9m3n.onrender.com",
    withCredentials:true,
})