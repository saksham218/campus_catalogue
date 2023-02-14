const express = require('express');
const shopRoutes = require('../controllers/shop');
const { shopMiddleware } = require('../middlewares/shop');

const router = express.Router();

//TODO: add shop middleware

router.post('/', shopRoutes.firstDetails);
router.patch('/', shopMiddleware,shopRoutes.secondDetails);
router.get('/', shopMiddleware,shopRoutes.getShop);
router.get('/menu', shopMiddleware,shopRoutes.getMenu);
router.post('/withdraw', shopMiddleware,shopRoutes.withdrawMoney);
router.post('/default-account', shopMiddleware, shopRoutes.changeDefaultFundAccount);
router.get('/pending-orders', shopMiddleware, shopRoutes.getPendingOrders);
router.get('/all-orders', shopMiddleware, shopRoutes.getAllOrders);

module.exports = router;
