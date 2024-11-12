const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const vacancySchema = new Schema({
    userId: {type: Object, required: true},
    company: {type: String, required: true},
    vacancy: {type: String, required: true},
    salary: {type: String, required: false},
    status: {type: String, required: true},
    note: {type: String, required: false},
}, { timestamps: true })

module.exports = mongoose.model('Vacancy', vacancySchema);

