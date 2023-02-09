import express from 'express';
const timingRoutes = require('../controllers/timing');

const router = express.Router();

//TODO : add shop middleware

router.get('/timings', timingRoutes.getTodayTimings);

router.post('/timings', timingRoutes.addTiming);

router.patch('/timings/:timing_id', timingRoutes.updateTiming);

router.delete('/timings/:timing_id', timingRoutes.deleteTimng);

