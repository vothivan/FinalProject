import axios from "axios";

const BASE_URL = 'http://10.1.26.163:8888/';

const api = axios.create({
    'baseURL': BASE_URL,
    'contentType': 'application/json',
    'accept': 'application/json',
    'Access-Control-Allow-Origin': '*'
});

export default api;