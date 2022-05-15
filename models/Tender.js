const Mongoose = require('mongoose');

const Schema =Mongoose.Schema;

const tenderschema = new Schema ({

    T_company_name :{
        type:String,
        required:true
    },
    T_contact_no :{
        type:Number,
        required:true

    },
    estimated_time:{
        type:Date,
        required:true
    },
    estimate_cost:{
        type:Number,
        required:true
    }

})

const Tender = Mongoose.model("Tender",tenderschema);

module.exports=Tender;
