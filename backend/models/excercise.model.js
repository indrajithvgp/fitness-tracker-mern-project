const mongoose = require('mongoose')

const excerciseSchema = new mongoose.Schema({
    userName:{
        type:String, 
        required:true
    },
    description:{
        type:String,
        required:true
    },
    duration:{
        type:Number,
        required:true
    },
    date:{
        type:Date,
        required:true,
    }
},{
    timestamps:true,
})
const Excercise = new mongoose.model('Excercise', excerciseSchema)

module.exports = Excercise