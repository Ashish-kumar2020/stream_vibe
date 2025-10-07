import axios from "axios";

export const apiClient = axios.create({
    baseURL : "https://serpapi.com",
    headers: {
        "Content-Type" : "application/json",
    },
});