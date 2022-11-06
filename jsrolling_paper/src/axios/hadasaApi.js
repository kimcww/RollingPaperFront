import axios from 'axios';

const hadasaApi = axios.create({
    baseURL: process.env.REACT_APP_API_SERVER
});
