const express = require('express');
const luggageController = require('../controllers/luggageController')
const router = express.Router();

router.get("/api/getOrientation/:id", luggageController.getOrientation)




module.exports = router;