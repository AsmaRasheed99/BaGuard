const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

router.post("/api/AddAirline", userController.AddAirline)
router.post("/api/LogIn", userController.LogIn)


module.exports = router;
