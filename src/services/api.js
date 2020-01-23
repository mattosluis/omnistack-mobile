import axios from 'axios';

const api = axios.create({
    baseURL: 'http://10.3.140.136:3000'
})

export default api;