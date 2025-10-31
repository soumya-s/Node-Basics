const mongoose = require("mongoose");   


const BookSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        trim : true,
        unique:true,
        minLength:3,
        maxLength:100

    },
    author:{
        type:String,
        required:true,
        trim : true,     
        minLength:3,
        maxLength:50
    },
    year:{
        type:Number,
        required:true,
        min:1815,
        max:new Date().getFullYear()
    },
    createdAt:{
        type:Date,
        default: Date.now
        
    }

});
module.exports = mongoose.model("Book",BookSchema);