import express from 'express';
const timingRoutes = require('../controllers/timing');

const router = express.Router();

//TODO : add shop middleware

router.get('/', timingRoutes.getTodayTimings);

router.post('/', timingRoutes.addTiming);

router.patch('/:timing_id', timingRoutes.updateTiming);

router.delete('/:timing_id', timingRoutes.deleteTimng);

