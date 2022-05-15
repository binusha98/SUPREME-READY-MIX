const Mongoose = require('mongoose');

const Schema =Mongoose.Schema;

const projectschema = new Schema ({

    company_name :{
        type:String,
        required:true
    },
    company_contact_no :{
        type:Number,
        required:true

    },
    accept_date:{
        type:Date,
        required:true
    },
    handover_date :{
        type:Date,
        required:true
    },
    Project_amount:{
        type:Number,
        required:true
    },
    en_incharge :{
        type:String,
        required:true
    }

})

const Project = Mongoose.model("Project",projectschema);

module.exports=Project;
