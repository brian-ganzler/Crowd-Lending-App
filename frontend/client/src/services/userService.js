import axios from "axios";  // Library to make HTTP request to backend


const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export async function createUser(userData) {
    try {
        const response = await axios.post(`${API_BASE_URL}/api/users/create`, userData);
        return response.data;
    } catch (error) {
        console.error("Failed to create user:", error);
        throw error;
    }
}

