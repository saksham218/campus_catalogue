import Shop from '../models/shop';
import Timing from '../models/timing';

const getTodayTimings = (req, res) => {
    const timing = Timing.findOne({ shop: req.shop._id, 'date.from': { $lte: new Date() }, 'date.to': { $gte: new Date() } });
    if (timing) {
        res.status(200).json({ message: 'Timings found', timings: timing.date });
    } else {
        res.status(200).json({ message: 'Timings found', timings: { from: req.shop.basic_info.default_timings.open, to: req.shop.basic_info.default_timings.close } });
    }
};

const addTiming = (req, res) => {
    const { from, to, is_open } = req.body;
    // check if timing is already present
    let t = Timing.findOne({ shop: req.shop._id, 'date.from': { $lte: from }, 'date.to': { $gte: to } });
    if (t) {
        res.status(400).json({ message: 'Timing already exists' });
    }
    t = Timing.findOne({ shop: req.shop._id, 'date.from': { $gte: from }, 'date.to': { $lte: to } });
    if (t) {
        res.status(400).json({ message: 'Timing already exists' });
    }
    t = Timing.findOne({ shop: req.shop._id, 'date.from': { $lte: from }, 'date.to': { $gte: from } });
    if (t) {
        res.status(400).json({ message: 'Timing already exists' });
    }
    t = Timing.findOne({ shop: req.shop._id, 'date.from': { $lte: to }, 'date.to': { $gte: to } });
    if (t) {
        res.status(400).json({ message: 'Timing already exists' });
    }
    const timing = new Timing({
        shop: req.shop._id,
        date: {
            from: from,
            to: to
        },
        is_open: is_open
    });
    timing
        .save()
        .then((result) => {
            res.status(200).json({ message: 'Timing added successfully', timing: result });
        })
        .catch((error) => {
            res.status(500).json({ message: 'Error adding timing' });
        });
};

const updateTiming = (req, res) => {
    const { from, to, is_open } = req.body;
    const { timing_id } = req.params;

    const timing = Timing.findById(timing_id);
    if (!timing || timing.shop != req.shop._id) {
        res.status(400).json({ message: 'Timing not found' });
    }
    timing.date.from = from;
    timing.date.to = to;
    timing.is_open = is_open;
    timing
        .save()
        .then((result) => {
            res.status(200).json({ message: 'Timing updated successfully', timing: result });
        })
        .catch((error) => {
            res.status(500).json({ message: 'Error updating timing' });
        });
};

const deleteTiming = (req, res) => {
    const { timing_id } = req.params;
    const timing = Timing.findById(timing_id);
    if (!timing || timing.shop != req.shop._id) {
        res.status(400).json({ message: 'Timing not found' });
    }
    Timing.findByIdAndDelete(timing_id)
        .then((result) => {
            res.status(200).json({ message: 'Timing deleted successfully' });
        })
        .catch((error) => {
            res.status(500).json({ message: 'Error deleting timing' });
        });
};

module.exports = {
    getTodayTimings,
    addTiming,
    updateTiming,
    deleteTiming
};
