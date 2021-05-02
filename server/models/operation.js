const mongoose = require('mongoose');

const operationSchema = mongoose.Schema({
    concept: String,
    amount: Number,
    date: Date,
    type: {
        type: String,
        default: 'Income'
    }
})

const operation = mongoose.model('operation', operationSchema);

module.exports = operation