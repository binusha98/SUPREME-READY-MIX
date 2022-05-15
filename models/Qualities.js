const mongoose = require('mongoose');

const qualitiesSchema = new mongoose.Schema({

    prodType:{
        type:String,
        required:true
    },
    prodBrandName:{
        type:String,
        required:true
    },
    prodStandards:{
        type:String,
        required:true
    },
    expDate:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model('Qualities',qualitiesSchema);