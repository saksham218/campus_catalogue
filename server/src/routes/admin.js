const express = require('express');
const adminRoutes = require('../controllers/admin');
const { adminMiddleware } = require('../middlewares/admin');
const router = express.Router();

router.post('/login', adminRoutes.login);
router.post('/register', adminRoutes.register);
router.put('/update', adminMiddleware, adminRoutes.update);
router.put('/change-password', adminMiddleware, adminRoutes.changePassword);
router.post('/approve-shop', adminMiddleware, adminRoutes.approveShop);
router.post('/reject-shop', adminMiddleware, adminRoutes.rejectShop);

module.exports = router;
