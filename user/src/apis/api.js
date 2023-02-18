import axios from 'axios';

export const Backend_URL = 'http://localhost:5000';
const client = axios.create({
    baseURL: Backend_URL,
    headers: {
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem('user_token')
    }
});

export const getAllShops = () => client.get('/customer/all_shops');
export const postFavShops = (data) => client.post('/customer/fav_shops', data);
export const getFavShops = () => client.get('/customer/fav_shops');

export const getBasicInfo = () => client.get('/customer/basic_info');
export const postUpdateBasicInfo = (data) => client.post('/customer/update_info', data);
export const getCartItems = () => client.get('/customer/cart');
export const getShop = (id) => client.get(`/customer/shop/${id}`);
export const getShopMenu = (id) => client.get(`/customer/shop_menu/${id}`);
export const getItem = (id) => client.get(`/item/${id}`);


// order apis
export const createPrintOrder = (data) => client.post('/order/print', data);
export const addPrintOrder = (id, data) => client.post(`/order/print/${id}`, data);
export const updateOrder = (id, data) => client.patch(`/order/customer/${id}`, data);
export const getOrders = (id) => client.get(`/order/customer/${id}`);
export const addOrder = (id, data) => client.get(`/order/customer/${id}`, data);
export const cancelOrder = (id, data) => client.patch(`/order/cancel:${id}`, data);
export const deleteOrder = (id, data) => client.delete(`/order/:${id}`, data);
export const placeOrder = (id, data) => client.patch(`/order/place/:${id}`, data);