const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema ({
   
    Email : {
        type : String,
        required : true
    },

    Password : {
        type : String,
        required : true
    },
    Role : {
        type : String,
        required : true
    },
    Name : {
        type : String,
        required : true
    },
    BaGuard : {
        type : Number,
        required : false
    }
},

{timestamps: true})

module.exports = mongoose.model('User' , userSchema);