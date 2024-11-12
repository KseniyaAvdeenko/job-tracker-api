const express = require('express');
const router = express.Router();
const {getUserVacancies, getUserVacancy, createVacancy, deleteVacancy, updateVacancy} = require('../controllers/vacancyControllers')


router.get('/api/vacancies/', getUserVacancies)

router.get('/api/vacancies/:id', getUserVacancy)

router.post('/api/vacancies/', createVacancy)

router.put('/api/vacancies/:id', updateVacancy)

router.delete('/api/vacancies/:id', deleteVacancy)

module.exports = router;