const express = require('express');
const router = express.Router();
const {signup, login, logout, getCurrentUser} = require('../controllers/authController')


router.post('/api/signup/', signup)

router.post('/api/login/', login)
router.get('/api/users/me', getCurrentUser)
router.post('/api/logout/', logout)

module.exports = router;