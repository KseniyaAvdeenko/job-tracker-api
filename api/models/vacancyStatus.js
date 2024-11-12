const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const vacancyStatusSchema = new Schema({
    color: {type: String, required: false},
    status: {type: String, required: true},
    name: {type: String, required: false},
})

module.exports = mongoose.model('VacancyStatus', vacancyStatusSchema);


