const express = require('express');
const router = express.Router();
const {getVacancyStatus} = require('../controllers/statusController')


router.get('/api/status/', getVacancyStatus)

module.exports = router;