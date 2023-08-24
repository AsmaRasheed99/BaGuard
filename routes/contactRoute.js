const express = require('express');
const contactController = require('../controllers/contactController')
const router = express.Router();

router.post("/api/UserMessage", contactController.UserMessage)
router.get("/api/getUserMessage", contactController.getUserMessage)




module.exports = router;