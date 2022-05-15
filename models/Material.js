const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const materialSchema = new Schema({

    Material_name : {
        type :String,
        required: true
    },
    Unit_price : {
        type: Number,
        required: true
    },
    Number_of_Units : {
        type: Number,
        required: true
    }
})

const Material = mongoose.model("Material",materialSchema);

module.exports = Material;