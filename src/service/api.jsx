import axios from "axios";

// const BASE_URL = 'http://10.1.44.104:8888/';
// const BASE_URL = 'http://learn-to-earn.io:8888/';
const BASE_URL = 'http://localhost:8888/';

const api = axios.create({
    'baseURL': BASE_URL,
    'contentType': 'application/json',
    'accept': 'application/json',
    'Access-Control-Allow-Origin': '*'
});

api.interceptors.request.use(function (config) {
    // Do something before request is sent
    const access_token = localStorage.getItem("jwt_token");

    if (access_token) {
        config.headers = {
            'Authorization': `Bearer ${access_token}`,
            'Accept': 'application/json',
        }
    }
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

api.interceptors.response.use((response) => {
    return response
}, async function (error) {
    if (error.response.status == 403 || error.response.status == 401) {
        window.location.replace("/")
    }
    return Promise.reject(error);
});

export default api;