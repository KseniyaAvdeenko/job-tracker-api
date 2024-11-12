const express = require('express');
const router = express.Router();
const {signup, login, logout} = require('../controllers/authController')


router.post('/api/signup/', signup)

router.post('/api/login/', login)

router.post('/api/logout/', logout)

module.exports = router;