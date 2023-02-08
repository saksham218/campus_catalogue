import express from 'express';
const shopRoutes = require('../controllers/shop');

const router = express.Router();

//TODO: add shop middleware

router.post('/shop', shopRoutes.firstDetails);

router.patch('/shop', shopRoutes.secondDetails);

router.get('/shop', shopRoutes.getShop);

router.get('/shop/menu', shopRoutes.getMenu);

