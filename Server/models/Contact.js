const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const contactSchema = new Schema ({
   
    Email : {
        type : String,
        required : true
    },

    Name : {
        type : String,
        required : true
    },
    Message : {
        type : Array,
        required : true
    }

 


},

{timestamps: true})

module.exports = mongoose.model('Contact' , contactSchema);