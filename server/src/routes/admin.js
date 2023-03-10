const express = require('express');
const adminRoutes = require('../controllers/admin');
const { adminMiddleware } = require('../middlewares/admin');
const router = express.Router();

router.get('/', adminMiddleware, adminRoutes.getAdmin);
router.post('/login', adminRoutes.login);
router.post('/register', adminRoutes.register);
router.put('/update', adminMiddleware, adminRoutes.update);
router.put('/change-password', adminMiddleware, adminRoutes.changePassword);
router.post('/approve-shop', adminMiddleware, adminRoutes.approveShop);
router.post('/reject-shop', adminMiddleware, adminRoutes.rejectShop);
router.get('/pending-shops', adminMiddleware, adminRoutes.getPendingShops);
router.get('/approved-shops', adminMiddleware, adminRoutes.getApprovedShops);

module.exports = router;
