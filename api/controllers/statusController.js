const {handleError} = require("./errorController");
const vacancyStatus = require('../models/vacancyStatus')

const getVacancyStatus = (req, res) => {
    try {
        res.status(200).json(vacancyStatus)
    } catch (e) {
        handleError(res, 500, e.message)
    }
}

module.exports = {getVacancyStatus: getVacancyStatus}