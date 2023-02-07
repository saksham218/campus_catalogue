import axios from 'axios';

const Backend_URL = 'http://localhost:5000';
const client = axios.create({
    baseURL: Backend_URL,
    headers: {
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem('admin_token')
    }
});

export { Backend_URL, client };
