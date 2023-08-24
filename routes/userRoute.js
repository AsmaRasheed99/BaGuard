const express = require('express');
const userController = require('../controllers/userController');
const Decode =require("../middlewares/decodeToken")
const router = express.Router();

router.post("/api/AddAirline", userController.AddAirline)
router.post("/api/LogIn", userController.LogIn)
router.get("/api/AllAdmins", userController.AllAdmins)
router.get("/api/AllAirLines", userController.AllAirLines)

router.get("/api/userData",Decode, userController.getUserData)


module.exports = router;
