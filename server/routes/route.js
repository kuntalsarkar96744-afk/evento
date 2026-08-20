const express = require('express');
const router = express.Router();

const { registerUser } = require('../controller/user');
const { loginUser } = require('../controller/login');

router.route('/register').post(registerUser);
router.route('/login').get(loginUser);


module.exports = router;

