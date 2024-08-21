import axios from "axios";

const AxiosInstance = axios.create({
    baseURL: "https://v3.football.api-sports.io",
    headers: {
        "x-apisports-key": import.meta.env.VITE_FOOTBALL_API_KEY
    }
});

export default AxiosInstance;