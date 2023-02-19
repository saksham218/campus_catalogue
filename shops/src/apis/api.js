import axios from 'axios';

export const Backend_URL = 'http://localhost:5000';
const client = axios.create({
    baseURL: Backend_URL,
    headers: {
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem('shop_token')
    }
});


export const firstDetails = (data) => client.post('/shop/', data);
export const secondDetails = (data) => client.post('/shop/second', data);
export const getShop = () => client.get('/shop/');
export const getMenu = () => client.get('/shop/menu');
export const withdrawMoney = () => client.post('/shop/withdraw');
export const changeDefaultFundAccount = (data) => client.post('/shop/default-account', data);
export const getPendingOrders = () => client.get('/shop/pending-orders');
export const getAllOrders = () => client.get('/shop/all-orders');

export const getOrder = (id) => client.get(`/order/shop/${id}`);
export const updateOrder = (id, data) => client.patch(`/order/shop/${id}`, data);
export const deliverOrder = (id) => client.patch(`/order/deliver/${id}`);
export const readyOrder = (id) => client.patch(`/order/ready/${id}`);
export const getFile = (id, index) => client.get(`/order/print/${id}/${index}`);
export const downloadFile = (id, index) => client.get(`/order/print/${id}/${index}/download`);
