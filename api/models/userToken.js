const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userTokenSchema = new Schema({
    userId: {type: Object, required: true},
    token: {type: String, required: true},
}, { timestamps: true })

module.exports = mongoose.model('UserToken', userTokenSchema);