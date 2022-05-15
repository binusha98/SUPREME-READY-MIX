const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const vehicleSchema = new Schema({

    Vehicle_no : {
        type : String,
        required : true
    },

    Income_ID : {
        type : String,
        required : true
    },

    Drivername : {
        type : String,
        required : true
    },

    avg_fuel_economy : {
        type : Number,
        required : true
    },

    Rate : {
        type : Number,
        required : true 
    },

    total_distance : {
        type : Number,
        required : true
    }

})

module.exports = mongoose.model("Vehicle",vehicleSchema);

//const Vehicle = mongoose.model("Vehicle",vehicleSchema);

//module.exports = Vehicle;