import axios from "axios";

const AxiosInstance = axios.create({
    baseURL: "https://v3.football.api-sports.io",
    headers: {
        "x-apisports-key": "505ba4f480b2817a28c69d3855fbd3b2"
    }
});

export default AxiosInstance;