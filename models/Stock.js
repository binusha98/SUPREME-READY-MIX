const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const stockSchema = new Schema({

    Stock_type : {
        type :String,
        required: true
    },
    size : {
        type: Number,
        required: true
    },
    date : {
        type : String,
        required : true
    }
})

const Stock = mongoose.model("Stock",stockSchema);

module.exports = Stock;