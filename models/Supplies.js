
const mongoose = require('mongoose');

const suppliesSchema = new mongoose.Schema({

    supplierName:{
        type:String,
        required:true
    },
    supType:{
        type:String,
        required:true
    },
    supAmount:{
        type:String,
        required:true
    },
    supTotalCost:{
        type:String,
        required:true
    },
    amountPaid:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model('Supplies',suppliesSchema);
