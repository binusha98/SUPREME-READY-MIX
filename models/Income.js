const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const incomeSchema = new Schema({
    
    Income_date : {
        type : String,
        required :true
    },
    Income_Type : {
        type : String,
        required :true
    },
    Income_Description : {
        type : String,
        required :true
    },
    Income_Amount : {
        type: Number,
        required :true
    }
})

const Income = mongoose.model("Income",incomeSchema);

module.exports = Income;