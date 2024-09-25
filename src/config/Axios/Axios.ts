// Axios Framework:
import axios from "axios";

const Axios = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_GATEWAY,
  maxRedirects: 5,
  timeout: 10000,
  headers: {
    "Content-Type": "*",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Credentials": "true",
  },
});

export default Axios;
