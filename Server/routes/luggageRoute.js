const express = require('express');
const luggageController = require('../controllers/luggageController')
const router = express.Router();

router.get("/api/getLocation/:id", luggageController.getLocation)
router.get("/api/getData/:id", luggageController.getData)
router.put("/api/ConnectDevice", luggageController.ConnectDevice)



module.exports = router;