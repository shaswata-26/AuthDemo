import axios from "axios";

const API_URL = "http://localhost:4000/api"; // change to your backend URL

export const register = (data: any) => axios.post(`${API_URL}/register`, data);
export const login = (data: any) => axios.post(`${API_URL}/login`, data);
