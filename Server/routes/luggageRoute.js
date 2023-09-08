const express = require('express');
const luggageController = require('../controllers/luggageController')
const router = express.Router();

router.get("/api/getLocation/:id", luggageController.getLocation)




module.exports = router;