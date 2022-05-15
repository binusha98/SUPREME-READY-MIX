const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const machinerepairSchema = new Schema({
   
    Machine_id : {
        type : String,
        required : true
    },

    Expense_id : {
        type : String,
        required : true
    },

    repairdate : {
        type : String,
        required : true
    },

    addedspare_parts : {
        type : String,
        required : true
    },

    nextservice_date : {
        type : String,
        required : true 
    },

    m_description : {
        type : String,
        required : true
    }

})


module.exports = mongoose.model("MachineRepair",machinerepairSchema);

//const MachineRepair = mongoose.model("MachineRepair",machinerepairSchema);

//module.exports = MachineRepair;