const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const customerIntSchema = new Schema({

    Interaction_id :{
        type : String,
        required: true
    },
    lead_source :{
        type : String,
        required: true
    },
    satisfaction :{
        type : String,
        required: true
    },
    visitor_name :{
        type : String,
        required: true
    },
    site_visitedTimes :{
        type : Number,
        required: true
    },

})

const CustomerInt = mongoose.model("CustomerInt",customerIntSchema);

module.exports = CustomerInt;