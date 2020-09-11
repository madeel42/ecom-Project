const mongoose = require("mongoose");
let userDetailsSchema = new mongoose.Schema({
    userName: {
        type:String
    },
    phoneNumber: {
        type:Number
    },
    email: {
        type:String
    },
    address:{
        type:String
    },
})
let user = mongoose.model("user",userDetailsSchema);
module.exports = user