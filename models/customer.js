const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const customerSchema = new Schema({

    cus_id :{
        type : String,
        required: true
    },
    cus_name :{
        type : String,
        required: true
    },
    cus_dob :{
        type : String,
        required: true
    },
    cus_email :{
        type : String,
        required: true
    },
    cus_phone :{
        type : Number,
        required: true
    },
    cus_fax :{
        type : Number,
        required: true
    },
    cus_address :{
        type : String,
        required: true
    },
    cus_designation :{
        type : String,
        required: true
    }

})

const Customer = mongoose.model("Customer",customerSchema);

module.exports = Customer;