import axios from "axios";
import { loadState } from "../services/storage";

export const request = axios.create({
  baseURL: "https://site-backend-6.onrender.com/",
});
