const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const expenseSchema = new Schema({
    
    date : {
        type : String,
        required :true
    },
    Description : {
        type : String,
        required :true
    },
    Cost_Center : {
        type : String,
        required :true
    },
    Remark : {
        type : String
    },
    Amount : {
        type: Number,
        required :true
    }
    
})

const Expense = mongoose.model("Expense",expenseSchema);

module.exports = Expense;