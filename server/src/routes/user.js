const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {

	if (req.user) {
		return res.json({ user: req.user })
	} else {
		return res.json({ user: null })
	}
})

module.exports = router;