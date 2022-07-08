const express = require('express');
const router = express.Router();
const { registerUser } = require('../controllers/userController');

const user = {};

/*
user controllers
*/
router.post('/').post(registerUser);

// router.post('/login', authUser);

module.exports = router;
