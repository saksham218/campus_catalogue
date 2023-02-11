const express = require('express');
const timingRoutes = require('../controllers/timing');
const { shopMiddleware } = require('../middlewares/shop');

const router = express.Router();

//TODO : add shop middleware

router.get('/', shopMiddleware, timingRoutes.getTodayTimings);

router.post('/', shopMiddleware, timingRoutes.addTiming);

router.patch('/:timing_id', shopMiddleware, timingRoutes.updateTiming);

router.delete('/:timing_id', shopMiddleware, timingRoutes.deleteTiming);

module.exports = router;
