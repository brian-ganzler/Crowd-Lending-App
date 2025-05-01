import axios from "axios";


const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;


export async function authenticateUser(userData) {
    try {
        const response = await axios.post(`${API_BASE_URL}/api/auth/login`, userData);
        localStorage.setItem("user_id", response.data.user_id);
        return response.data;
    } catch (error) {
        console.error("Failed to authenticate user", error);
        throw error;
    }
}

export function getCurrentUserID() {
    return localStorage.getItem("user_id")
}