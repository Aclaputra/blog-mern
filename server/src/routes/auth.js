const express = require('express');

const router = express.Router();

const authController = require('../controllers/auth');

// POST : localhost:3000/v1/auth/register
router.post('/register', authController.register);

// jangan lupa export router agar bisa dipakai di index.js
module.exports = router;