const {handleError} = require("./errorController");
const UserToken = require('../models/userToken');
const Vacancy = require('../models/vacancy')


const getUserVacancies = async (req, res) => {
    try {
        const headers = req.headers
        if (headers.authorization) {
            const token = await UserToken.findOne({token: headers.authorization.split(' ')[1]})
            if (token) {
                const vacancies = await Vacancy.find({userId: token.userId})
                res.status(200).json(vacancies)
            } else {
                handleError(res, 401, {message: 'Unauthorized'})
            }
        } else {
            handleError(res, 401, {message: 'Unauthorized'})
        }
    } catch (error) {
        handleError(res, 500, error)
    }
}
const getUserVacancy = async (req, res) => {
    try {
        const headers = req.headers
        if (headers.authorization) {
            const token = await UserToken.findOne({token: headers.authorization.split(' ')[1]})
            if (token) {
                const vacancy = await Vacancy.findById({_id: req.params.id})
                res.status(200).json(vacancy)
            } else {
                handleError(res, 401, {message: 'Unauthorized'})
            }
        } else {
            handleError(res, 401, {message: 'Unauthorized'})
        }
    } catch (error) {
        handleError(res, 500, error)
    }
}

const createVacancy = async (req, res) => {
    try {
        const body = req.body
        const headers = req.headers
        if (headers.authorization) {
            const token = await UserToken.findOne({token: headers.authorization.split(' ')[1]})
            if (token) {
                const newVacancy = await Vacancy.create({
                    company: body.company,
                    vacancy: body.vacancy,
                    salary: body.salary,
                    status: body.status,
                    note: body.note,
                    userId: token.userId
                })
                res.status(200).json(newVacancy)
            } else {
                handleError(res, 401, {message: 'Unauthorized'})
            }
        } else {
            handleError(res, 401, {message: 'Unauthorized'})
        }
    } catch (error) {
        handleError(res, 500, error)
    }
}

const updateVacancy = async (req, res) => {
    try {
        const body = req.body
        const headers = req.headers
        if (headers.authorization) {
            const token = await UserToken.findOne({token: headers.authorization.split(' ')[1]})
            if (token) {
                const vacancy = await Vacancy.findByIdAndUpdate(req.params.id, body, {new: true})
                res.status(200).json(vacancy)
            } else {
                handleError(res, 401, {message: 'Unauthorized'})
            }
        } else {
            handleError(res, 401, {message: 'Unauthorized'})
        }
    } catch (error) {
        handleError(res, 500, error)
    }
}
const deleteVacancy = async (req, res) => {
    try {
        const headers = req.headers
        if (headers.authorization) {
            const token = await UserToken.findOne({token: headers.authorization.split(' ')[1]})
            if (token) {
                await Vacancy.findByIdAndDelete(req.params.id)
                res.status(204).json('Deleted')
            } else {
                handleError(res, 401, {message: 'Unauthorized'})
            }
        } else {
            handleError(res, 401, {message: 'Unauthorized'})
        }
    } catch (error) {
        handleError(res, 500, error)
    }
}

module.exports = {
    getUserVacancies: getUserVacancies,
    getUserVacancy: getUserVacancy,
    createVacancy: createVacancy,
    updateVacancy: updateVacancy,
    deleteVacancy:deleteVacancy
}