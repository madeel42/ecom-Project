const mongoose = require("mongoose");
let modelSchema = new mongoose.Schema({
    Pname: {
        type:String
    },
    counter: {
        type:Number
    },
    description: {
        type:String
    },
    price:{
        type:Number
    },
    counter:{
        type:Number
    },
    file:String
})
let item = mongoose.model("item",modelSchema);
module.exports = item