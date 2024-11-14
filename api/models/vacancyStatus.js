const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const vacancyStatusSchema = new Schema({
    color: {type: String, required: true},
    name: {type: String, required: true},
})

module.exports = mongoose.model('VacancyStatus', vacancyStatusSchema);


