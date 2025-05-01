import axios from "axios";


const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export async function createInvestor(userData) {
    try {
        const response = await axios.post(`${API_BASE_URL}/api/investors/create`, userData)
        return response.data;
    } catch (error) {
        console.error("Failed to create investor", error);
        throw error;
    }
}