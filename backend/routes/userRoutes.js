const express = require('express');
const router = express.Router();
const { registerUser } = require('../controllers/userController');

/*
user controllers
*/
// router.route('/').post(registerUser);
router.post('/', registerUser);

// router.post('/login', authUser);

module.exports = router;
