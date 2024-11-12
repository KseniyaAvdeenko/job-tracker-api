const {handleError} = require("./errorController");
const VacancyStatus = require('../models/vacancyStatus')


const getVacancyStatus = async (req, res) => {
    try {
        const vacancyStatus = await VacancyStatus.find()
        res.status(200).json(vacancyStatus)
    } catch (e) {
        handleError(res, 500, e.message)
    }
}

module.exports = {getVacancyStatus: getVacancyStatus}