import express from 'express';
const shopRoutes = require('../controllers/shop');

const router = express.Router();

//TODO: add shop middleware

router.post('/', shopRoutes.firstDetails);
router.patch('/', shopRoutes.secondDetails);
router.get('/', shopRoutes.getShop);
router.get('/menu', shopRoutes.getMenu);
router.post('/withdraw', shopRoutes.withdrawMoney);
router.post('/default-account', shopRoutes.changeDefaultFundAccount);

module.exports = router;
